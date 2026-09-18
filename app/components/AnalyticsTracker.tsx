"use client";

import { useEffect } from 'react';
import { getVisitorId } from '../lib/analytics';
import { usePathname } from 'next/navigation';

type AnalyticsTrackerProps = {
  enabled: boolean;
};

export default function AnalyticsTracker({ enabled }: AnalyticsTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!enabled) return;

    void fetch('/api/analytics/pageview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page: pathname,
        visitorId: getVisitorId(),
      }),
    }).catch(() => undefined);
  }, [enabled, pathname]);

  return null;
}
