import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
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
        className={`${inter.className} antialiased backgroundPrimary`}
      >
        {children}
      </body>
    </html>
  );
}
