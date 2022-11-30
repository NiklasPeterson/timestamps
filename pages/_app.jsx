import { Analytics } from '@vercel/analytics/react';
import { GlobalStyle } from '../components/GlobalStyle'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
        <Component {...pageProps} />
        <Analytics />
    </>
  )
}
