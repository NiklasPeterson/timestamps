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
        <meta name="description" content="Little app that helps you create timestamps for Discord. Made by Niklas Peterson" />
        <meta name="author" content="Niklas Peterson" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#1e2024" />
        <meta name="theme-color" content="#1e2024" />
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

        <ScCopyright>Made by <a href="https://twitter.com/niklas_peterson">Niklas Peterson</a></ScCopyright>
        <ScSponsor>
        <a href="https://www.buymeacoffee.com/niklas_peterson" target="_blank"><img src="/bmc-button.svg" alt="Buy Me A Coffee" style={{height: 48}} /></a>
        </ScSponsor>
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

const ScSponsor = styled.div`
  display:flex;
  justify-content: center;
  margin-top: 8px;
  
  img {
    cursor: pointer;
  }
`;