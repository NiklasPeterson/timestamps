import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';

import Datepicker from '../components/Datepicker';
import Results from '../components/Results';

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
        <meta name="description" content="Little app that helps you create Results for Discord." />
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
        <Datepicker newTime={gotATime} />
        <Results dateTime={dateTime} />

        <ScCopyright>Made by <a href="https://niklaspeterson.com">Niklas Peterson</a></ScCopyright>
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
  padding: 40px 24px;
`;

const ScTitle = styled.h1`
  font-size: 32px;
  font-family: 'Inter Extra Light';
  text-align: center;
`;

const ScCopyright = styled.small`
  text-align:center;
  margin-top: 24px;
  font-size: 14px;

  a {
    color: var(--color-text);
    text-decoration: none;
  }
`;