"use client";

import { useEffect } from 'react';
import { getVisitorId } from '../lib/analytics';
import { usePathname } from 'next/navigation';

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ANALYTICS_ENABLED !== 'true') return;

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
  }, [pathname]);

  return null;
}
