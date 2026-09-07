# Timestamps

A free, browser-based generator for Discord and UNIX timestamps. Pick a date and time, then copy a Discord-ready timestamp that every viewer sees in their own timezone.

Live site: [Timestamps.app](https://timestamps.app)
Companion app: [Timestamps Discord bot](https://github.com/NiklasPeterson/timestamps-bot)

## What it does

- Generates a UNIX timestamp in seconds from a selected date and time.
- Produces all six Discord timestamp formats, ready to paste:
  - `<t:timestamp:f>` — short date and time
  - `<t:timestamp:F>` — long date and time
  - `<t:timestamp:d>` / `<t:timestamp:D>` — short / long date
  - `<t:timestamp:t>` — short time
  - `<t:timestamp:R>` — relative time
- Lets users copy a format with one click.
- Includes plain-language guides at `/unix-timestamp` and `/formats`.
- Tracks page views and displays a Discord server count when Supabase is configured.

## Getting started

Prerequisite: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev    # Start the local development server
npm run build  # Create a production build
npm run start  # Run the production build
npm run lint   # Check the code with ESLint
```

## Optional Supabase integration

The generator works without Supabase, but the analytics and server-count API routes require these server-only environment variables:

```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Add them to `.env.local` for local development or to your hosting provider’s environment settings for production. Never expose `SUPABASE_SERVICE_ROLE_KEY` in client-side code or commit it to the repository.

The configured database is expected to provide:

- a `pageviews` table, used by `POST /api/analytics/pageview`
- a `server_stats` relation with one row exposing `server_count`, used by `GET /api/server-count`

If those variables or database objects are unavailable, the timestamp generator and reference pages still render; the related API requests return an error.

## Project structure

```text
app/
  page.tsx                    Main timestamp generator
  components/                 Date picker, format results, analytics, and UI pieces
  unix-timestamp/page.tsx     UNIX timestamp explainer
  formats/page.tsx            Discord format-code reference
  api/                        Server-side analytics and server-count endpoints
public/                       Icons, images, and social-preview assets
```

## Built with

- [Next.js](https://nextjs.org/) and React
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Moment.js](https://momentjs.com/) for date formatting
- [Supabase](https://supabase.com/) for optional analytics and stats

## License

No license file is currently included. All rights are reserved unless the repository owner adds a license.
