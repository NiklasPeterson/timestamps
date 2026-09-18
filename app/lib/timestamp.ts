import moment from 'moment';

export const DISCORD_TIMESTAMP_FORMATS = [
  { label: 'Short Date Time', format: 'LLL', code: 'f' },
  { label: 'Long Date Time', format: 'LLLL', code: 'F' },
  { label: 'Short Date', format: 'L', code: 'd' },
  { label: 'Long Date', format: 'LL', code: 'D' },
  { label: 'Short Time', format: 'LT', code: 't' },
  { label: 'Relative Time', format: 'fromNow', code: 'R' },
] as const;

export type DiscordTimestampFormat = (typeof DISCORD_TIMESTAMP_FORMATS)[number]['format'];

export function parseDateAndTime(date: string, time: string): number | null {
  if (
    !moment(date, 'YYYY-MM-DD', true).isValid() ||
    !moment(time, 'HH:mm', true).isValid()
  ) {
    return null;
  }

  return Math.floor(moment(`${date}T${time}`).valueOf() / 1000);
}

export function formatDiscordTimestamp(
  timestamp: number,
  format: DiscordTimestampFormat,
): string {
  const dateTime = moment.unix(timestamp);

  return format === 'fromNow' ? dateTime.fromNow() : dateTime.format(format);
}

export function toDiscordTimestamp(timestamp: number, code: string): string {
  return `<t:${timestamp}:${code}>`;
}
