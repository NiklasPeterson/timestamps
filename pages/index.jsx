import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';

import Datepicker from '../components/Datepicker';
import Results from '../components/Results';

export default function Home() {
  const [dateTime, setDateTime] = useState({});

  useEffect(() => {
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
        <title>Generate Timestamps for Discord and More | timestamps.app"</title>
        <meta name="viewport" content="width=device-width,initial-scale=1, viewport-fit=cover, shrink-to-fit=no" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Generate timestamps for Discord and other platforms easily with timestamps.app." />
        <meta name="HandheldFriendly" content="true" />

        <link rel="canonical" href="https://timestamps.app" />

        <meta property="og:title" content="Generate Timestamps for Discord and More | timestamps.app" />
        <meta property="og:description" content="Generate timestamps for Discord and other platforms easily with timestamps.app." />
        <meta property="og:url" content="https://timestamps.app" />
        <meta property="og:image" content="https://timestamps.app/images/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Generate Timestamps for Discord and More | timestamps.app" />
        <meta name="twitter:description" content="Generate timestamps for Discord and other platforms easily with timestamps.app." />
        <meta name="twitter:image" content="https://timestamps.app/images/twitter-card-image.jpg" />
        <meta name="twitter:site" content="@app_timestamps" />

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

        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}>
          <ScCardContainer>
              <ScCard href='https://apps.apple.com/app/titls/id1579078964' target='_blank'>
                <div style={{ display: "inline-flex", gap: 16, alignItems: "center", padding: 8, justifyContent: "space-between", width: "100%",boxSizing: "border-box"}}>
                <div style={{display: "flex", gap: 16}}>
                  <div style={{ position: "relative", width: 32, height: 32, minWidth: 32, borderRadius: "8px", overflow: "hidden" }}>
                    <Image className='rounded-3xl' src="/images/titls.png" alt="App icon of Titls iOS app" fill={true} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 14, fontWeight: 500, lineHeight: "20px", }}>Titls</div>
                    <div style={{ fontSize: 12, lineHeight: "16px" }}>Organize & categorize your home screens.</div>
                  </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={20} height={20}><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" /></svg>
                </div>
              </ScCard>

              <ScCard href='https://hydrify.app' target='_blank'>
                <div style={{ display: "inline-flex", gap: 16, alignItems: "center", padding: 8, justifyContent: "space-between", width: "100%",boxSizing: "border-box"}}>
                  <div style={{display: "flex", gap: 16}}>
                    <div style={{ position: "relative", width: 32, height: 32, minWidth: 32, borderRadius: "8px", overflow: "hidden" }}>
                    <Image className='rounded-3xl' src="/images/hydrify.png" alt="App icon of Hydrify iOS app" fill={true} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 14, fontWeight: 500, lineHeight: "20px", }}>Hydrify</div>
                    <div style={{ fontSize: 12, lineHeight: "16px", color: "var(--color-muted)" }}>Your optimal iOS hydration companion.</div>
                  </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={20} height={20}><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" /></svg>
                </div>

              </ScCard>
          </ScCardContainer>

          <ScMain>
            <ScTitle>Timestamps Generator</ScTitle>
            <ScDescription>This little app helps you generate and format timestamps for Discord and other services that support timestamp format.</ScDescription>
            <ScSelectWrapper>
              <ScAction>Pick date</ScAction>
            <Datepicker newTime={gotATime} />
            </ScSelectWrapper>
            <Results dateTime={dateTime} />

            <ScCopyright>Made by <a href="https://www.niklaspeterson.com">Niklas Peterson</a></ScCopyright>
            <ScSponsor>
              <a href="https://www.buymeacoffee.com/niklaspeterson" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4827 11.239C11.7643 11.5465 10.949 11.8952 9.8924 11.8952C9.4504 11.8944 9.01053 11.8337 8.58478 11.715L9.31555 19.2178C9.34141 19.5313 9.48427 19.8237 9.71575 20.0369C9.94723 20.25 10.2504 20.3682 10.5651 20.3682C10.5651 20.3682 11.6012 20.422 11.947 20.422C12.3191 20.422 13.4349 20.3682 13.4349 20.3682C13.7495 20.3682 14.0526 20.2498 14.284 20.0367C14.5154 19.8236 14.6582 19.5313 14.6841 19.2178L15.4668 10.9269C15.117 10.8074 14.764 10.7281 14.3661 10.7281C13.6778 10.7278 13.1233 10.9648 12.4827 11.239Z" fill="#18181B" /><path d="M18.8461 7.34556L18.7361 6.79048C18.6373 6.29245 18.4132 5.82187 17.902 5.64187C17.7381 5.58428 17.5522 5.55954 17.4266 5.44034C17.3009 5.32115 17.2638 5.13604 17.2347 4.96437C17.1809 4.6493 17.1303 4.33396 17.0752 4.01943C17.0275 3.74902 16.9899 3.44526 16.8658 3.19718C16.7044 2.86409 16.3694 2.66929 16.0363 2.54041C15.8656 2.47669 15.6915 2.42279 15.5146 2.37897C14.6824 2.15942 13.8074 2.0787 12.9513 2.03269C11.9237 1.97598 10.8933 1.99307 9.8681 2.08381C9.10506 2.15323 8.30137 2.23718 7.57626 2.50112C7.31124 2.59772 7.03813 2.71368 6.83662 2.91844C6.58934 3.17001 6.50862 3.55907 6.68916 3.87279C6.81751 4.09557 7.03491 4.25297 7.2655 4.3571C7.56584 4.49127 7.87951 4.59336 8.20129 4.66168C9.09725 4.85971 10.0252 4.93746 10.9406 4.97056C11.9551 5.0115 12.9713 4.97832 13.981 4.87127C14.2307 4.84383 14.4799 4.81091 14.7287 4.77254C15.0217 4.72759 15.2098 4.34445 15.1234 4.07754C15.0201 3.75845 14.7424 3.63468 14.4284 3.68284C14.3821 3.6901 14.3361 3.69682 14.2898 3.70355L14.2565 3.70839C14.1501 3.72186 14.0437 3.7344 13.9374 3.74606C13.7177 3.76974 13.4974 3.78911 13.2766 3.80419C12.782 3.83862 12.2862 3.85449 11.7906 3.85531C11.3036 3.85531 10.8163 3.84158 10.3304 3.80957C10.1087 3.79504 9.88748 3.77656 9.66685 3.75413C9.56649 3.74364 9.4664 3.73262 9.36632 3.72023L9.27106 3.70813L9.25036 3.70517L9.15161 3.69091C8.94981 3.6605 8.74801 3.62553 8.54837 3.58328C8.52823 3.57881 8.5102 3.56761 8.49729 3.55151C8.48437 3.53542 8.47733 3.5154 8.47733 3.49476C8.47733 3.47413 8.48437 3.45411 8.49729 3.43801C8.5102 3.42192 8.52823 3.41071 8.54837 3.40624H8.55214C8.72515 3.36938 8.89949 3.3379 9.07438 3.31046C9.13269 3.30131 9.19115 3.29234 9.24981 3.28355H9.25142C9.36093 3.27629 9.47098 3.25664 9.57994 3.24373C10.528 3.14511 11.4817 3.11149 12.4344 3.1431C12.8969 3.15655 13.3592 3.18373 13.8195 3.23054C13.9185 3.24077 14.017 3.25153 14.1155 3.26364C14.1532 3.26821 14.1911 3.27359 14.229 3.27817L14.3055 3.2892C14.5282 3.32239 14.7498 3.36265 14.9703 3.41001C15.2969 3.48104 15.7164 3.50418 15.8617 3.86203C15.908 3.97557 15.929 4.10176 15.9545 4.22095L15.9871 4.37297C15.9879 4.3757 15.9886 4.37849 15.989 4.38131C16.0659 4.74006 16.143 5.09881 16.2201 5.45755C16.2257 5.48406 16.2259 5.51144 16.2205 5.53799C16.2151 5.56456 16.2043 5.5897 16.1887 5.61191C16.1732 5.6341 16.1532 5.65285 16.1301 5.66698C16.107 5.68112 16.0812 5.69033 16.0543 5.69407H16.0522L16.0051 5.70052L15.9586 5.7067C15.8111 5.7259 15.6635 5.74384 15.5157 5.76052C15.2246 5.79371 14.933 5.8224 14.641 5.84662C14.0607 5.89486 13.4793 5.92653 12.8967 5.9416C12.5998 5.94948 12.303 5.95317 12.0063 5.95263C10.8254 5.9517 9.64554 5.88306 8.4725 5.74706C8.3455 5.732 8.21851 5.71585 8.0915 5.69945C8.18998 5.7121 8.01993 5.68975 7.9855 5.68492C7.90478 5.67361 7.82406 5.66187 7.74334 5.64967C7.47239 5.60903 7.20307 5.55899 6.93266 5.51513C6.60575 5.46132 6.29311 5.48823 5.99741 5.64967C5.75469 5.78249 5.55824 5.98617 5.43427 6.23353C5.30673 6.49721 5.26879 6.78429 5.21175 7.06762C5.15471 7.35094 5.06592 7.65578 5.09956 7.94663C5.17193 8.57436 5.61077 9.08449 6.24199 9.19858C6.8358 9.30619 7.43285 9.39337 8.0315 9.46763C10.3832 9.75565 12.759 9.7901 15.118 9.57041C15.3101 9.55248 15.502 9.53293 15.6935 9.51176C15.7534 9.50519 15.8139 9.51207 15.8708 9.53193C15.9276 9.55179 15.9792 9.58411 16.022 9.62652C16.0647 9.66893 16.0974 9.72036 16.1176 9.77703C16.1379 9.83371 16.1452 9.89421 16.1391 9.95409L16.0794 10.5347C15.959 11.708 15.8386 12.8812 15.7183 14.0543C15.5927 15.2862 15.4664 16.5181 15.3392 17.7498C15.3033 18.0968 15.2674 18.4436 15.2316 18.7903C15.1971 19.1318 15.1923 19.4839 15.1274 19.8214C15.0252 20.352 14.666 20.6778 14.1419 20.797C13.6617 20.9063 13.1711 20.9637 12.6787 20.9681C12.1328 20.971 11.5871 20.9468 11.0412 20.9498C10.4584 20.9531 9.74462 20.8993 9.29475 20.4655C8.89949 20.0846 8.84487 19.488 8.79106 18.9721C8.71932 18.2893 8.6482 17.6065 8.57769 16.9238L7.92631 10.6714C7.92199 10.6308 7.91769 10.5907 7.91366 10.5498C7.88298 10.2568 7.67554 9.96998 7.34862 9.98477C7.06881 9.99714 6.75078 10.235 6.78361 10.5498L7.36558 16.1376C7.47733 17.2076 7.58881 18.2777 7.70002 19.3481C7.72156 19.5531 7.74173 19.7587 7.76432 19.9637C7.88729 21.0841 8.7429 21.6878 9.80246 21.8578C10.4213 21.9574 11.0552 21.9779 11.6832 21.9881C12.4882 22.0011 13.3013 22.032 14.0932 21.8861C15.2665 21.6708 16.1469 20.8874 16.2725 19.6721C16.3084 19.3212 16.3443 18.9703 16.3802 18.6192C16.4995 17.4583 16.6186 16.2973 16.7375 15.1362L17.3049 9.60378C17.3138 9.51756 17.3502 9.4365 17.4088 9.37259C17.4673 9.30868 17.5449 9.2653 17.63 9.24888C17.9655 9.1835 18.2862 9.07184 18.5249 8.8165C18.9048 8.40996 18.9804 7.87991 18.8461 7.34556ZM6.22477 7.72063C6.22988 7.71821 6.22046 7.76205 6.21643 7.78251C6.21562 7.75156 6.21723 7.72412 6.22477 7.72063ZM6.25732 7.97247C6.26001 7.97057 6.26808 7.98135 6.27643 7.99427C6.26378 7.98241 6.25598 7.97355 6.25732 7.97247ZM6.28934 8.0147C6.3071 8.04673 6.30091 8.03434 6.28934 8.0147ZM6.35365 8.0669H6.35526C6.35526 8.06879 6.35822 8.07067 6.3593 8.07256C6.35751 8.07048 6.3558 8.06859 6.35365 8.0669ZM17.6144 7.98887C17.4938 8.10349 17.3122 8.15677 17.1327 8.18341C15.1202 8.48207 13.0783 8.63328 11.0436 8.56655C9.58748 8.51678 8.14667 8.35506 6.70504 8.15139C6.56378 8.13148 6.41069 8.10565 6.31356 8.00152C6.13059 7.8051 6.22046 7.40959 6.26808 7.17228C6.31167 6.95488 6.39508 6.6651 6.65365 6.63416C7.05724 6.58681 7.52593 6.75711 7.92523 6.81766C8.40595 6.89101 8.88847 6.94976 9.37276 6.99389C11.4397 7.18224 13.5413 7.15291 15.5991 6.87739C15.9742 6.82698 16.3479 6.76842 16.7203 6.7017C17.052 6.64223 17.4198 6.53058 17.6203 6.87416C17.7578 7.10825 17.7761 7.42143 17.7548 7.68592C17.7483 7.80115 17.6982 7.90953 17.6144 7.98887Z" fill="var(--color-text)" /></svg>
              </a>
              <a href="https://twitter.com/niklas_peterson" target='_blank'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7512 2.96092H20.818L14.1179 10.6186L22 21.0391H15.8284L10.9946 14.7191L5.46359 21.0391H2.39494L9.5613 12.8483L2 2.96092H8.32828L12.6976 8.73759L17.7512 2.96092ZM16.6748 19.2034H18.3742L7.4049 4.70013H5.58133L16.6748 19.2034Z" fill="var(--color-text)" />
              </svg>
              </a>
              <a href='https://github.com/NiklasPeterson/timestamps' target='_blank'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0001 2C6.47791 2 2 6.59036 2 12.2531C2 16.7833 4.86533 20.6266 8.83865 21.9824C9.33844 22.0773 9.5219 21.76 9.5219 21.489C9.5219 21.2446 9.51265 20.4369 9.50832 19.5802C6.72628 20.2004 6.13926 18.3704 6.13926 18.3704C5.68437 17.1853 5.02893 16.8702 5.02893 16.8702C4.12164 16.2338 5.09733 16.2469 5.09733 16.2469C6.1015 16.3192 6.63024 17.3036 6.63024 17.3036C7.52215 18.8709 8.96965 18.4178 9.54028 18.1558C9.63002 17.4932 9.8892 17.0409 10.1752 16.7848C7.95403 16.5256 5.61911 15.6464 5.61911 11.7176C5.61911 10.5982 6.00977 9.68357 6.64944 8.96557C6.54562 8.70732 6.20332 7.66444 6.74632 6.25216C6.74632 6.25216 7.58607 5.97661 9.49706 7.30316C10.2947 7.07599 11.1502 6.96203 12.0001 6.95816C12.8499 6.96203 13.7061 7.07599 14.5052 7.30316C16.4138 5.97661 17.2525 6.25216 17.2525 6.25216C17.7968 7.66444 17.4544 8.70732 17.3505 8.96557C17.9917 9.68357 18.3797 10.5982 18.3797 11.7176C18.3797 15.6557 16.0404 16.5228 13.8135 16.7766C14.1722 17.0948 14.4918 17.7188 14.4918 18.6754C14.4918 20.0473 14.4802 21.1514 14.4802 21.489C14.4802 21.762 14.6602 22.0817 15.1671 21.981C19.1384 20.6237 22 16.7817 22 12.2531C22 6.59036 17.5228 2 12.0001 2Z" fill="var(--color-text)" />
                <path d="M5.81695 16.6513C5.79497 16.7017 5.71695 16.7168 5.64587 16.6822C5.57349 16.649 5.53282 16.5804 5.55629 16.5297C5.57778 16.4778 5.65597 16.4633 5.72819 16.4981C5.80075 16.5313 5.84207 16.6006 5.81695 16.6513Z" fill="var(--color-text)" />
                <path d="M6.22126 17.1096C6.17363 17.1545 6.08058 17.1337 6.01744 17.0626C5.95215 16.992 5.93992 16.8973 5.98818 16.8517C6.03727 16.8068 6.12752 16.8278 6.19296 16.8986C6.25826 16.9702 6.271 17.0642 6.22126 17.1096Z" fill="var(--color-text)" />
                <path d="M6.61486 17.6949C6.55369 17.7381 6.45369 17.6976 6.3919 17.6073C6.33073 17.517 6.33073 17.4088 6.39319 17.3654C6.45519 17.322 6.55369 17.361 6.61635 17.4506C6.67735 17.5424 6.67735 17.6506 6.61486 17.6949Z" fill="var(--color-text)" />
                <path d="M7.15396 18.2594C7.09926 18.3209 6.98275 18.3044 6.89746 18.2206C6.81016 18.1388 6.78588 18.0226 6.84075 17.9613C6.89612 17.8997 7.0133 17.917 7.09926 18.0001C7.18588 18.0818 7.21234 18.1988 7.15396 18.2594Z" fill="var(--color-text)" />
                <path d="M7.8978 18.5876C7.87367 18.6672 7.76147 18.7033 7.64839 18.6694C7.53551 18.6346 7.46163 18.5416 7.48443 18.4612C7.50788 18.3812 7.62063 18.3434 7.73451 18.3796C7.84721 18.4142 7.92129 18.5068 7.8978 18.5876Z" fill="var(--color-text)" />
                <path d="M8.7147 18.6481C8.7175 18.7318 8.62166 18.8013 8.50296 18.8028C8.38362 18.8054 8.28708 18.7377 8.2858 18.6553C8.2858 18.5708 8.3795 18.502 8.49884 18.5C8.6175 18.4977 8.7147 18.5649 8.7147 18.6481Z" fill="var(--color-text)" />
                <path d="M9.47502 18.5158C9.48924 18.5974 9.40677 18.6813 9.28891 18.7037C9.17303 18.7253 9.06577 18.6748 9.05107 18.5938C9.03669 18.5101 9.12065 18.4261 9.23636 18.4045C9.35436 18.3837 9.45998 18.4328 9.47502 18.5158Z" fill="var(--color-text)" />
              </svg>
              </a>
            </ScSponsor>


          </ScMain>

        </div>
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
  font-weight: 200;
  text-align: center;
  margin-bottom: 8px;
`;

const ScDescription = styled.p`
  text-align: center;
  margin-top: 0;
`;

const ScAction = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 0;
`;

const ScSelectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 24px;
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
  gap: 16px;
  
  img {
    cursor: pointer;
  }
`;


const ScCardContainer = styled.div`
  display: flex;
  padding: 16px 16px 0;
  gap: 16px;
  width: 100%;
  justify-content: end;
  box-sizing: border-box;

@media (max-width: 812px) {
  flex-direction: column;
  }

`;


const ScSpacer = styled.div`
@media (max-width: 812px) {
  display:flex;
  flex: 1;
  }
`;

const ScCard = styled.a`
  background: var(--color-card);
  color: var(--color-text);
  border-radius: 12px;

  &:hover {
    color: var(--color-text);
    background: var(--color-card-hover);
  }

  &:visited, &:focused {
    color: var(--color-text);
  }
`;



