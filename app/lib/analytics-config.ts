import 'server-only';

export function isAnalyticsEnabled() {
  const configuredValue = process.env.ANALYTICS_ENABLED;

  if (configuredValue !== undefined) {
    return configuredValue === 'true';
  }

  return process.env.VERCEL_ENV === 'production';
}
