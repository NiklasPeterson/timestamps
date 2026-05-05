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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I generate a Discord timestamp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pick a date and time on timestamps.app, then copy any of the six Discord timestamp formats (e.g. <t:1700000000:F>) and paste it into a Discord message. Discord will render it in each viewer's local timezone. See the full list of Discord timestamp format codes for what each one renders.",
      },
    },
    {
      "@type": "Question",
      name: "What is a UNIX timestamp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A UNIX timestamp is the number of seconds since 00:00:00 UTC on 1 January 1970. It is the format Discord and many other platforms use to represent a moment in time independently of timezone. Discord wraps the timestamp in a format code tag to control how it's displayed.",
      },
    },
    {
      "@type": "Question",
      name: "What do the Discord timestamp format codes mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "<p>Discord supports six timestamp format codes. Append the code to a UNIX timestamp inside &lt;t:...&gt; to control how Discord renders the date and time in each viewer's local timezone. For a quick start, see how to generate a Discord timestamp.</p><ul><li><strong>:f</strong> — Short date and time (e.g. December 25, 2025 3:00 PM)</li><li><strong>:F</strong> — Long date and time (e.g. Thursday, December 25, 2025 3:00 PM)</li><li><strong>:d</strong> — Short date (e.g. 12/25/2025)</li><li><strong>:D</strong> — Long date (e.g. December 25, 2025)</li><li><strong>:t</strong> — Short time (e.g. 3:00 PM)</li><li><strong>:R</strong> — Relative time (e.g. \"in 3 hours\")</li></ul>",
      },
    },
    {
      "@type": "Question",
      name: "Is timestamps.app free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. timestamps.app is free, requires no sign-up, and runs entirely in your browser.",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <AnalyticsTracker />
        {children}
        <Toaster />
      </body>
    </html>
  );
}