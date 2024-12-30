"use client";
import { useEffect, useState } from 'react';

type AnalyticsData = {
  uniqueVisitors: number;
  uniqueSessions: number;
  totalPageviews: number;
  uniquePageViews: number;
  pageviewsByCountry: { [key: string]: number };
};

export default function Analytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const response = await fetch('/api/analytics');
        if (!response.ok) throw new Error('Failed to fetch analytics');
        const data = await response.json();
        setAnalytics(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, []);

  if (loading) return (
    <div className="p-4">
      <p>Loading analytics...</p>
    </div>
  );

  if (error) return (
    <div className="p-4 text-red-500">
      <p>Error: {error}</p>
    </div>
  );

  if (!analytics) return null;

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="backgroundPrimary p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Unique Visitors</h3>
          <p className="text-2xl font-semibold">{analytics.uniqueVisitors}</p>
        </div>
        
        <div className="backgroundPrimary p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">Total Pageviews</h3>
          <p className="text-2xl font-semibold">{analytics.totalPageviews}</p>
        </div>
    </div>
  );
}