import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Discord Timestamp Format Reference — All 6 Format Codes",
  description:
    "Complete reference for Discord's six timestamp format codes (:f, :F, :d, :D, :t, :R). See what each renders, when to use it, and copy-paste examples.",
  alternates: { canonical: "/formats" },
  openGraph: {
    title: "Discord Timestamp Format Reference",
    description:
      "Complete reference for Discord's six timestamp format codes with rendered examples.",
    url: "https://timestamps.app/formats",
    siteName: "timestamps.app",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discord Timestamp Format Reference",
    description:
      "Complete reference for Discord's six timestamp format codes with rendered examples.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Discord Timestamp Format Reference",
  description:
    "Complete reference for Discord's six timestamp format codes (:f, :F, :d, :D, :t, :R) with rendered examples and guidance on when to use each.",
  url: "https://timestamps.app/formats",
  author: {
    "@type": "Person",
    name: "Niklas Peterson",
    url: "https://niklaspeterson.com",
  },
  publisher: {
    "@type": "Organization",
    name: "timestamps.app",
    url: "https://timestamps.app",
  },
  datePublished: "2026-05-05",
  dateModified: new Date().toISOString().slice(0, 10),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://timestamps.app/formats",
  },
};

const FORMAT_CODES = [
  {
    code: ":f",
    name: "Short date and time",
    example: "December 25, 2025 3:00 PM",
    when: "The default for most messages. Communicates a specific moment with both date and time.",
  },
  {
    code: ":F",
    name: "Long date and time",
    example: "Thursday, December 25, 2025 3:00 PM",
    when: "Use when the day of the week matters — meetings, events, deadlines.",
  },
  {
    code: ":d",
    name: "Short date",
    example: "12/25/2025",
    when: "Compact, no time. Good for date-only references in tables or lists.",
  },
  {
    code: ":D",
    name: "Long date",
    example: "December 25, 2025",
    when: "Spelled-out date, no time. Less ambiguous than :d for international audiences.",
  },
  {
    code: ":t",
    name: "Short time",
    example: "3:00 PM",
    when: "Time only — useful when the date is already known from context.",
  },
  {
    code: ":R",
    name: "Relative time",
    example: '"in 3 hours" / "2 days ago"',
    when: "Counts up or down from the current moment. Updates as time passes — perfect for countdowns.",
  },
];

export default function FormatsPage() {
  return (
    <main className="w-full max-w-3xl px-4 py-12 md:py-20 flex flex-col gap-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Link
        href="/"
        className="text-sm contentSecondary hover:contentPrimary w-fit focusLinkInline"
      >
        ← timestamps.app
      </Link>

      <article className="flex flex-col gap-10">
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Discord timestamp format reference
          </h1>
          <p className="text-lg contentSecondary">
            Discord supports six timestamp format codes. Each one tells Discord how to render
            a UNIX timestamp in the viewer&apos;s local timezone — so a single message reads
            correctly for everyone, no matter where they are.
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">How a Discord timestamp works</h2>
          <p className="contentSecondary">
            A Discord timestamp is a small inline tag of the form{" "}
            <code>&lt;t:UNIX_SECONDS:CODE&gt;</code>. Discord parses it client-side and shows
            the corresponding date or time in each viewer&apos;s timezone. The{" "}
            <code>UNIX_SECONDS</code> is a{" "}
            <Link href="/unix-timestamp" className="underline">UNIX timestamp</Link> — the
            number of seconds since 00:00:00 UTC on 1 January 1970. The trailing letter is the
            format code.
          </p>
          <p className="contentSecondary">
            For example, <code>&lt;t:1735138800:F&gt;</code> renders as{" "}
            <em>Thursday, December 25, 2025 3:00 PM</em> for a viewer in New York and{" "}
            <em>Friday, December 26, 2025 8:00 AM</em> for a viewer in Tokyo — both pointing
            to the same instant.
          </p>
          <p className="contentSecondary">
            The fastest way to get a correctly formatted tag is to{" "}
            <Link href="/" className="underline">use the timestamp generator</Link>: pick a
            date and time, copy the format you want, and paste it into Discord.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold">The six format codes</h2>
          {FORMAT_CODES.map(({ code, name, example, when }) => (
            <div key={code} className="flex flex-col gap-1">
              <h3 className="font-semibold">
                <code>{code}</code> — {name}
              </h3>
              <p className="contentSecondary">
                <strong>Renders as:</strong> {example}
              </p>
              <p className="contentSecondary">
                <strong>When to use:</strong> {when}
              </p>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Choosing the right format</h2>
          <p className="contentSecondary">
            For event announcements, <code>:F</code> reads cleanly because the day of the week
            anchors the date. For countdowns and reminders, <code>:R</code> stays useful as
            time passes — &quot;in 3 days&quot; becomes &quot;in 2 hours&quot; without you
            editing the message. For brief inline references where the date is already
            implied, <code>:t</code> keeps the line short.
          </p>
          <p className="contentSecondary">
            A common pattern is to combine two: an absolute time alongside a relative one,
            like <code>&lt;t:...:F&gt;</code> (<code>&lt;t:...:R&gt;</code>). The reader sees
            both the wall-clock time and how soon it is.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Where Discord renders timestamps</h2>
          <p className="contentSecondary">
            Discord renders these tags in messages, embeds, channel descriptions, and forum
            posts. Bots can include them in webhook payloads. The same format works in
            third-party platforms that follow Discord&apos;s timestamp convention.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Related</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="underline">
                → Generate a Discord timestamp
              </Link>
            </li>
            <li>
              <Link href="/unix-timestamp" className="underline">
                → What is a UNIX timestamp?
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
