import cron from 'node-cron';
import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Setup email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send email notifications
const sendEmailNotification = async (email, meeting) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Upcoming Meeting Reminder: ${meeting.title}`,
    text: `You have a meeting titled "${meeting.title}" scheduled at ${new Date(meeting.startTime).toLocaleString()}. Don't forget to join!`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Notification sent to ${email}`);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
};

// Function to schedule meeting notifications
export const scheduleMeetingNotifications = () => {
  console.log('🕒 Scheduler started...');

  cron.schedule('*/15 * * * *', async () => {
    console.log('⏳ Running CRON job at:', new Date().toLocaleString());

    const now = new Date();
    const upcomingMeetings = await prisma.meeting.findMany({
      where: {
        startTime: {
          gte: now,
          lte: new Date(now.getTime() + 30 * 60 * 1000), // Meetings in next 30 mins
        },
      },
      include: { participants: true },
    });

    console.log('📅 Upcoming meetings:', upcomingMeetings);

    upcomingMeetings.forEach(meeting => {
      meeting.participants.forEach(user => {
        sendEmailNotification(user.email, meeting);
      });
    });
  });
};
