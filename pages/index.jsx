import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import TimeForm from '../components/TimeForm';
import TimeStamps from '../components/TimeStamps';
import Title from '../components/Title'

export default function Home() {
  const [dateTime, setDateTime] = useState({});

  useEffect( () => {
    const date = new Date();
    date.setSeconds(0);
    setDateTime(date);
  }, [])

  const gotATime = dateTime => {
    setDateTime(dateTime);
  }
  
  return (
  <>
    <Head>
        <title>Discord Timestamp Formatter</title>
        <meta name="description" content="Little app that helps you create Timestamps for Discord." />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Title>Enter your time!</Title>
      <TimeForm newTime={gotATime} />
      <TimeStamps dateTime={dateTime} />
    </main>
  </>
  )
}
