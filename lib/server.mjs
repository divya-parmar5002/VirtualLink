import { scheduleMeetingNotifications } from './scheduler.mjs';



// Ensure it runs only on the server
export default function startScheduler() {
  if (typeof window === 'undefined') {
    console.log('🕒 Starting meeting notification scheduler...');
    scheduleMeetingNotifications();
  }
}
