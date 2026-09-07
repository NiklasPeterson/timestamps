import ResultItem from './ResultItem';
import {
  DISCORD_TIMESTAMP_FORMATS,
  formatDiscordTimestamp,
  toDiscordTimestamp,
} from '../lib/timestamp';

interface ResultListProps {
  timestamp: number;
}

export default function ResultList({ timestamp }: ResultListProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {DISCORD_TIMESTAMP_FORMATS.map(({ label, format, code }) => (
        <ResultItem
          key={label}
          label={label}
          value={toDiscordTimestamp(timestamp, code)}
        >
          <span className="w-full block px-2 contentSecondary select-none text-sm md:text-base">
            {formatDiscordTimestamp(timestamp, format)}
          </span>
        </ResultItem>
      ))}
    </div>
  );
}
