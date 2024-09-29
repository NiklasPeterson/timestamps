import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GlobalStyle } from '../components/GlobalStyle'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
        <Component {...pageProps} />
    <Analytics />
    <SpeedInsights />
    </>
  )
}
