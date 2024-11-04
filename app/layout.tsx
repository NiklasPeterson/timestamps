import type { Metadata, Viewport } from "next";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from 'next/font/google'
import "./globals.css";
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Timestamps",
  description: "Generate UNIX timestamps for Discord and other platforms easily with timestamps.app",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased p-sa contentPrimary flex flex-col min-h-screen justify-start items-start bg-white dark:bg-black bg-no-repeat bg-[url(../public/bg.png)] bg-center bg-cover md:bg-auto  md:justify-center md:items-center`}>
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}