import Head from 'next/head'
import Title from '../components/Title'

export default function Home() {
  return (
  <>
    <Head>
        <title>Discord Timestamp Formatter</title>
        <meta name="description" content="Little app that helps you create Timestamps for Discord." />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <Title>Hello?</Title>
    <p>Yo!</p>
  </>
  )
}
