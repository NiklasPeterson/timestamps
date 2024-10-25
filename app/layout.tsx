import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Timestamps",
  description: "Generate UNIX timestamps for Discord and other platforms easily with timestamps.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased backgroundPrimary contentPrimary h-screen flex flex-col justify-start items-start md:justify-center md:items-center`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
