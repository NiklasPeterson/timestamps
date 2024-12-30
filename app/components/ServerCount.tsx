"use client";
import { useEffect, useState } from 'react';

export default function ServerCount() {
  const [serverCount, setServerCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchServerCount() {
      const response = await fetch('/api/server-count');
      const data = await response.json();
      setServerCount(data.count);
    }

    fetchServerCount();
  }, []);

  if (!serverCount) return null;

  return (
    <span className="text-sm contentSecondary">
      Used in {serverCount.toLocaleString()} servers
    </span>
  );
}