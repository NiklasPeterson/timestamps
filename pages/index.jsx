import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';

import TimeForm from '../components/TimeForm';
import TimeStamps from '../components/TimeStamps';

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

    <ScWrapper>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
      <ScMain>
        <ScTitle>Enter your time!</ScTitle>
        <TimeForm newTime={gotATime} />
        <TimeStamps dateTime={dateTime} />
      </ScMain>
    </ScWrapper>
  </>
  )
}

const ScWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const ScMain = styled.main`
  width: 640px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 24px;
`;

const ScTitle = styled.h1`
  font-size: 32px;
  font-family: 'Inter Extra Light';
  text-align: center;
`;