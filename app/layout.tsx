import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { Toaster } from 'sonner'
import AnalyticsTracker from './components/AnalyticsTracker';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Timestamps - Generate UNIX timestamps",
  description: "Generate and format UNIX timestamps for Discord and other platforms easily with timestamps.app",
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
        <AnalyticsTracker />
        {children}
        <Toaster />
      </body>
    </html>
  );
}