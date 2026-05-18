import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a UNIX Timestamp? — Epoch Time Explained",
  description:
    "A UNIX timestamp is the number of seconds since 1 January 1970 UTC. Learn how it works, why it's used everywhere from Discord to databases, and how to convert one.",
  alternates: { canonical: "/unix-timestamp" },
  openGraph: {
    title: "What is a UNIX Timestamp? — Epoch Time Explained",
    description:
      "A UNIX timestamp is the number of seconds since 1 January 1970 UTC. Learn how it works and how to convert one.",
    url: "https://timestamps.app/unix-timestamp",
    siteName: "timestamps.app",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is a UNIX Timestamp?",
    description:
      "The number of seconds since 1 January 1970 UTC — explained with examples.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is a UNIX Timestamp?",
  description:
    "A plain-language explanation of UNIX timestamps: what they are, how they work, and why they're used in Discord, databases, and APIs.",
  url: "https://timestamps.app/unix-timestamp",
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
    "@id": "https://timestamps.app/unix-timestamp",
  },
};

export default function UnixTimestampPage() {
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
            What is a UNIX timestamp?
          </h1>
          <p className="text-lg contentSecondary">
            A UNIX timestamp is the number of seconds that have elapsed since 00:00:00 UTC on
            1 January 1970 — a moment known as the <em>UNIX epoch</em>. It&apos;s the format
            most software uses internally to represent a single instant in time, independent
            of timezone.
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Why count seconds since 1970?</h2>
          <p className="contentSecondary">
            UNIX, the operating system that most of today&apos;s servers descend from, was
            designed in the early 1970s. Its engineers picked 1 January 1970 UTC as a fixed
            reference point and stored every date as the count of seconds since then. The
            convention stuck. Almost every programming language, database, and API uses some
            variant of it: JavaScript counts milliseconds since 1970, most other systems count
            seconds.
          </p>
          <p className="contentSecondary">
            The point of using a single integer is that it has no timezone, no daylight saving
            ambiguity, and no calendar quirks. <code>1735138800</code> means the same instant
            in New York as it does in Tokyo — only how we display it changes.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">A few examples</h2>
          <ul className="flex flex-col gap-2 contentSecondary">
            <li>
              <code>0</code> — 1 January 1970, 00:00:00 UTC (the epoch itself)
            </li>
            <li>
              <code>1000000000</code> — 9 September 2001, 01:46:40 UTC
            </li>
            <li>
              <code>1700000000</code> — 14 November 2023, 22:13:20 UTC
            </li>
            <li>
              <code>1735138800</code> — 25 December 2025, 15:00:00 (3 PM) in New York
            </li>
          </ul>
          <p className="contentSecondary">
            You can paste any of these into the{" "}
            <Link href="/" className="underline">timestamp generator</Link> to see them
            rendered in your local timezone.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Where UNIX timestamps show up</h2>
          <p className="contentSecondary">
            Anywhere software needs to record &quot;when&quot;: file modification times, log
            entries, database rows, JWT expirations, API responses, OAuth tokens, and Discord
            messages. Discord in particular uses UNIX timestamps inside its{" "}
            <Link href="/formats" className="underline">timestamp format tags</Link> so that a
            single message renders correctly for users in every timezone.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Seconds vs milliseconds</h2>
          <p className="contentSecondary">
            Two conventions exist side by side. Most languages and databases store UNIX time
            in <strong>seconds</strong> (a 10-digit number for current dates).
            JavaScript&apos;s <code>Date.now()</code> and many web APIs use{" "}
            <strong>milliseconds</strong> (a 13-digit number). If a value looks suspiciously
            large or small by 1000×, that&apos;s usually the reason — divide or multiply by
            1000 to convert.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">The year 2038 problem</h2>
          <p className="contentSecondary">
            Older systems store UNIX timestamps in a signed 32-bit integer, which overflows on
            19 January 2038. Modern systems use 64-bit integers, which won&apos;t overflow for
            roughly 292 billion years — so for everyday use, including Discord, this
            isn&apos;t something you need to worry about.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">How to convert a UNIX timestamp</h2>
          <p className="contentSecondary">
            The simplest way is to pick a date and time on the{" "}
            <Link href="/" className="underline">timestamp generator</Link>: it shows you the
            UNIX timestamp alongside Discord&apos;s six rendered formats, ready to copy. If
            you&apos;re building software, every major language has a built-in:{" "}
            <code>Math.floor(Date.now() / 1000)</code> in JavaScript,{" "}
            <code>time.time()</code> in Python, <code>time()</code> in PHP.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Related</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="underline">
                → Generate a Discord or UNIX timestamp
              </Link>
            </li>
            <li>
              <Link href="/formats" className="underline">
                → Discord timestamp format reference
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
