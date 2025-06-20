import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "VIRTUAL LINK",
  description: "Video calling App",
  icons: {
   // icon: "/icons/logo.svg",
=======
  title: "YOOM",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.svg",
>>>>>>> 6d248d96 (first commit)
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
<<<<<<< HEAD
          //  socialButtonsVariant: "iconButton",
           //logoImageUrl: "/icons/yoom-logo.svg",
          },
          variables: {
            colorText: "#000000",
            colorPrimary: "#1C1F2E",
            colorBackground: "#ffffff",
            colorInputBackground: "#ffffff",
            colorInputText: "#000000",
=======
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/yoom-logo.svg",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
>>>>>>> 6d248d96 (first commit)
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
