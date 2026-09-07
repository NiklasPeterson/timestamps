# Timestamps

A free, browser-based generator for Discord and UNIX timestamps. Pick a date and time, then copy a Discord-ready timestamp that every viewer sees in their own timezone.

[Open Timestamps.app](https://timestamps.app) · [View the companion Discord bot](https://github.com/NiklasPeterson/timestamps-bot)

## Why I built it

Discord timestamps are useful for communities spread across different timezones, but creating them by hand is awkward. I built Timestamps to make the process visual and immediate, then created the companion bot so the same workflow could be used directly inside Discord.

## What it does

- Generates a UNIX timestamp in seconds from a selected date and time.
- Produces six Discord timestamp formats, ready to paste:
  - `<t:timestamp:f>` — short date and time
  - `<t:timestamp:F>` — long date and time
  - `<t:timestamp:d>` — short date
  - `<t:timestamp:D>` — long date
  - `<t:timestamp:t>` — short time
  - `<t:timestamp:R>` — relative time
- Shows a live preview of how each format will appear.
- Lets users copy any format with one click.
- Works across screen sizes and supports light and dark mode.
- Includes plain-language guides to UNIX timestamps and Discord’s format codes.
- Generates timestamps entirely in the browser. Selected dates and times are not sent to the server.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run start` runs the production build.
- `npm run lint` checks the code with ESLint.
- `npm run typecheck` checks TypeScript without emitting files.

## Optional Supabase integration

The timestamp generator works without Supabase. The page-view and Discord server-count API routes require the following server-side environment variables:

```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Add them to `.env.local` for local development or to your hosting provider’s environment settings for production. Never expose `SUPABASE_SERVICE_ROLE_KEY` in client-side code or commit it to the repository.

### Analytics privacy and production configuration

Timestamps analytics are disabled by default in local development and Vercel Preview deployments. To enable them in Production only, add both of these values in the Vercel Production environment:

```bash
NEXT_PUBLIC_ANALYTICS_ENABLED=true
ANALYTICS_ENABLED=true
```

When enabled, Timestamps stores a persistent, first-party anonymous visitor UUID and the page-view path. It does not send or store a referrer, does not create browser sessions, and never sends the selected timestamp date or time. The database retains the existing `session_id` field for dashboard compatibility, but new events store the same UUID there as `visitor_id`.

The configured database is expected to provide:

- A `pageviews` table used by `POST /api/analytics/pageview`.
- A `server_stats` relation containing one row with a `server_count` value, used by `GET /api/server-count`.

If the environment variables or database objects are unavailable, the generator and reference pages still work. The related API requests return an error without affecting timestamp generation.

## Project structure

```text
app/
  page.tsx                    Main timestamp generator
  components/                 Date picker, results, analytics, and UI components
  unix-timestamp/page.tsx     UNIX timestamp guide
  formats/page.tsx            Discord format-code reference
  api/                        Analytics and server-count API routes
public/                       Images and social-preview assets
```

## Built with

- [Next.js](https://nextjs.org/) and React
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Moment.js](https://momentjs.com/) for date formatting
- [Supabase](https://supabase.com/) for optional analytics and server statistics

## Related project

The [Timestamps Discord bot](https://github.com/NiklasPeterson/timestamps-bot) brings the same workflow into Discord through slash commands, timezone search, and private or shared timestamp creation.

## License

No license is currently included. All rights are reserved unless a license is added by the repository owner.
