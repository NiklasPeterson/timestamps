import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { Toaster } from 'sonner'
import AnalyticsTracker from './components/AnalyticsTracker';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://timestamps.app"),
  title: "Discord Timestamp Generator — UNIX timestamps for Discord",
  description:
    "Free online tool to generate Discord timestamps and UNIX timestamps. Pick any date and time, then copy the <t:...> format Discord and other platforms need. No sign-up required.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Discord Timestamp Generator — UNIX timestamps for Discord",
    description:
      "Generate Discord-ready <t:...> timestamps and UNIX timestamps from any date and time. Free, no sign-up.",
    url: "https://timestamps.app",
    siteName: "timestamps.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discord Timestamp Generator",
    description: "Generate Discord-ready <t:...> timestamps from any date and time.",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: "cover",
}

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "timestamps.app",
  url: "https://timestamps.app",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  description:
    "Free tool to generate Discord timestamps and UNIX timestamps from any date and time.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: {
    "@type": "Person",
    name: "Niklas Peterson",
    url: "https://niklaspeterson.com",
  },
  datePublished: "2021-10-17",
  dateModified: new Date().toISOString().slice(0, 10),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased p-sa contentPrimary flex flex-col min-h-screen justify-start items-start bg-white dark:bg-black bg-no-repeat bg-[url(../public/bg.png)] bg-center bg-cover md:bg-auto  md:justify-center md:items-center`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
        />
        <AnalyticsTracker />
        {children}
        <Toaster />
      </body>
    </html>
  );
}