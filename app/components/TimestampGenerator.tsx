'use client';

import { useCallback, useState } from 'react';
import DatePicker from './DatePicker';
import ResultList from './ResultList';

export default function TimestampGenerator() {
  const [timestamp, setTimestamp] = useState(() => Math.floor(Date.now() / 1000));

  const handleTimestampChange = useCallback((nextTimestamp: number) => {
    setTimestamp(nextTimestamp);
  }, []);

  return (
    <section
      aria-label="Timestamp generator"
      className="flex flex-col gap-4 p-4 md:p-6 rounded-xl border border-zinc-200 dark:border-zinc-700 backdrop-blur-sm backgroundTransparentCard shadow-sm dark:shadow-none h-fit justify-center items-center w-full md:w-[440px]"
    >
      <DatePicker onTimestampChange={handleTimestampChange} />
      <ResultList timestamp={timestamp} />
    </section>
  );
}
