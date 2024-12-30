import 'next/server';

declare module 'next/server' {
  interface NextRequest {
    geo?: {
      country?: string;
    };
  }
}