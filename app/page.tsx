"use client"; // Add this directive at the top of the file

import React, { useState, useCallback } from 'react'; // Added useState import
import AppCard from "./components/AppCard";
import ResultList from "./components/ResultList";
import DatePicker from './components/DatePicker';
import moment, { Moment } from 'moment';
import Image from 'next/image';

export default function Home() {
  const [dateTime, setDateTime] = useState<Moment>(moment());

  const handleDateTimeChange = useCallback((newDateTime: Moment) => {
    setDateTime(newDateTime);
  }, []);

  return (
    <>
      <div className="flex w-full pr-sa md:top-0 md:absolute">
        <div className="flex w-full mx-4 mt-4 gap-2 justify-end flex-col md:flex-row">
          <AppCard
            href='https://apps.apple.com/app/titls/id1579078964'
            imageSrc="/titls.png"
            imageAlt="App icon of Titls iOS app"
            title="Titls"
            description="Organize & categorize your home screens."
          />
          <AppCard
            href='https://apps.apple.com/app/hydrify/id6450311759'
            imageSrc="/hydrify.png"
            imageAlt="App icon of Hydrify iOS app"
            title="Hydrify"
            description="Your optimal iOS hydration companion."
          />
        </div>
      </div>

      <main className="flex w-full max-w-6xl px-4 flex-wrap py-14 gap-14 md:justify-between md:items-center md:py-32">

        <header className="max-w-lg flex flex-col gap-4 md:gap-6 h-fit md:flex-1">
          <h1 className="font-semibold text-5xl md:text-7xl">Timestamps Generator</h1>
          <div>

            <h2 className='text-xl'>
              <span className='mr-2'>Generate and format</span>
              <div className='inline-block mr-2'>
                <div className='inline-block h-[21px]'>
                  <div className='h-7 w-7 p-1 mr-2 rounded-md shadow-md dark:shadow-none rotate-12 bg-[#000000] border border-zinc-50 border-opacity-10 scale-100 transition-transform ease-in-out will-change-transform hover:scale-125'>
                    <svg width={18} height={18} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.00206 8.9017C3.83188 8.9017 3.69189 8.8468 3.58209 8.73701C3.47229 8.62172 3.4174 8.48173 3.4174 8.31704C3.4174 8.15783 3.47229 8.02333 3.58209 7.91354C3.69189 7.79825 3.83188 7.74061 4.00206 7.74061H7.41945V3.14565C7.41945 2.98645 7.47435 2.85195 7.58415 2.74215C7.69943 2.62687 7.83668 2.56922 7.99588 2.56922C8.16058 2.56922 8.29782 2.62687 8.40762 2.74215C8.5229 2.85195 8.58055 2.98645 8.58055 3.14565V8.31704C8.58055 8.48173 8.5229 8.62172 8.40762 8.73701C8.29782 8.8468 8.16058 8.9017 7.99588 8.9017H4.00206ZM8.00412 16C6.90616 16 5.87408 15.7886 4.90787 15.3659C3.94716 14.9487 3.09899 14.3723 2.36336 13.6366C1.62772 12.901 1.04855 12.0528 0.625836 11.0921C0.208612 10.1259 0 9.09384 0 7.99588C0 6.90341 0.208612 5.87408 0.625836 4.90787C1.04306 3.94167 1.61949 3.09075 2.35512 2.35512C3.09624 1.61949 3.94716 1.04306 4.90787 0.625836C5.87408 0.208612 6.90341 0 7.99588 0C9.08835 0 10.1177 0.208612 11.0839 0.625836C12.0501 1.04306 12.901 1.61949 13.6366 2.35512C14.3723 3.09075 14.9487 3.94167 15.3659 4.90787C15.7886 5.87408 16 6.90341 16 7.99588C16 9.09384 15.7914 10.1259 15.3742 11.0921C14.9569 12.0528 14.3805 12.901 13.6449 13.6366C12.9092 14.3723 12.0583 14.9487 11.0921 15.3659C10.1259 15.7886 9.09659 16 8.00412 16ZM8.00412 14.5342C8.90993 14.5342 9.75811 14.364 10.5486 14.0237C11.3392 13.6888 12.0336 13.2222 12.632 12.6238C13.2304 12.0254 13.697 11.3309 14.0319 10.5404C14.3668 9.74987 14.5342 8.9017 14.5342 7.99588C14.5342 7.09007 14.3668 6.24189 14.0319 5.45136C13.697 4.66083 13.2304 3.96638 12.632 3.36799C12.0336 2.7696 11.3364 2.30297 10.5404 1.96809C9.74987 1.63321 8.9017 1.46577 7.99588 1.46577C7.09007 1.46577 6.24189 1.63321 5.45136 1.96809C4.66632 2.30297 3.97461 2.7696 3.37622 3.36799C2.77784 3.96638 2.3112 4.66083 1.97633 5.45136C1.64145 6.24189 1.47401 7.09007 1.47401 7.99588C1.47401 8.9017 1.64145 9.74987 1.97633 10.5404C2.3112 11.3309 2.77784 12.0254 3.37622 12.6238C3.97461 13.2222 4.66907 13.6888 5.4596 14.0237C6.25013 14.364 7.0983 14.5342 8.00412 14.5342Z" fill="#ffffff" />
                    </svg>
                  </div>
                </div>
                timestamps
              </div>
              <span className='mr-2'>for</span>
              <div className='inline-block mr-2'>
                <div className='inline-block h-[21px]'>
                  <div className='h-7 w-7 p-1 mr-2 rounded-md shadow-md dark:shadow-none -rotate-12 bg-[#5865F2] border border-zinc-50 border-opacity-10 scale-100 transition-transform ease-in-out will-change-transform hover:scale-125'>
                    <svg width={18} height={18} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5644 2.93412C13.5598 2.92533 13.552 2.91855 13.5427 2.91508C12.5061 2.4394 11.4122 2.10007 10.2884 1.90559C10.2783 1.90374 10.2679 1.90511 10.2586 1.9095C10.2493 1.91389 10.2416 1.92109 10.2367 1.93008C10.0876 2.20062 9.9523 2.47852 9.83125 2.7627C8.61918 2.57873 7.3863 2.57873 6.17424 2.7627C6.0527 2.47781 5.91553 2.19985 5.76337 1.93008C5.75812 1.92136 5.75041 1.91439 5.74121 1.91003C5.73202 1.90567 5.72174 1.90413 5.71167 1.90559C4.58588 2.0992 3.49009 2.43854 2.45192 2.91508C2.44282 2.91893 2.43519 2.92561 2.43015 2.93412C0.356759 6.03333 -0.211928 9.05363 0.0656129 12.0386C0.0663988 12.0461 0.0687401 12.0533 0.0724877 12.0599C0.0762354 12.0665 0.0813074 12.0722 0.0873808 12.0766C1.29513 12.97 2.6458 13.6518 4.08179 14.0929C4.09212 14.0961 4.10318 14.096 4.11343 14.0926C4.12367 14.0891 4.1326 14.0826 4.13894 14.0739C4.44704 13.6544 4.72007 13.2103 4.95523 12.746C4.95836 12.7396 4.96014 12.7327 4.96046 12.7255C4.96077 12.7184 4.95962 12.7113 4.95706 12.7047C4.95451 12.6981 4.95061 12.692 4.94561 12.687C4.94062 12.6819 4.93463 12.6779 4.92802 12.6753C4.49662 12.51 4.079 12.3107 3.67909 12.0794C3.67202 12.075 3.6661 12.0691 3.66182 12.062C3.65754 12.0549 3.65502 12.0469 3.65449 12.0386C3.65396 12.0303 3.65542 12.0221 3.65875 12.0145C3.66209 12.0069 3.66719 12.0002 3.67365 11.995C3.758 11.9324 3.84235 11.8671 3.92126 11.8018C3.92822 11.7957 3.93677 11.7917 3.94592 11.7903C3.95507 11.7888 3.96445 11.79 3.97296 11.7937C6.59055 12.9882 9.42582 12.9882 12.0135 11.7937C12.0217 11.7896 12.031 11.788 12.0401 11.789C12.0493 11.7899 12.0579 11.7934 12.0652 11.7991C12.1441 11.8644 12.2284 11.9324 12.3128 11.995C12.3192 12.0002 12.3244 12.0069 12.3277 12.0145C12.331 12.0221 12.3325 12.0303 12.3319 12.0386C12.3314 12.0469 12.3289 12.0549 12.3246 12.062C12.3203 12.0691 12.3144 12.075 12.3073 12.0794C11.9085 12.3119 11.4907 12.5103 11.0584 12.6725C11.0518 12.6752 11.0458 12.6792 11.0408 12.6842C11.0358 12.6893 11.0319 12.6953 11.0294 12.702C11.0268 12.7086 11.0257 12.7157 11.026 12.7228C11.0263 12.7299 11.0281 12.7369 11.0312 12.7433C11.2705 13.2053 11.5433 13.6491 11.8475 14.0711C11.8538 14.0799 11.8628 14.0864 11.873 14.0898C11.8833 14.0933 11.8943 14.0934 11.9046 14.0902C13.3448 13.651 14.6994 12.9691 15.9099 12.0739C15.9161 12.0696 15.9213 12.0639 15.9251 12.0573C15.9288 12.0507 15.9311 12.0434 15.9317 12.0358C16.2637 8.58834 15.3712 5.59253 13.5644 2.93412ZM5.34706 10.2209C4.55797 10.2209 3.91037 9.49715 3.91037 8.61011C3.91037 7.72306 4.54708 6.99656 5.34706 6.99656C6.15519 6.99656 6.79734 7.72579 6.78374 8.60739C6.78374 9.49715 6.14703 10.2209 5.34706 10.2209ZM10.6639 10.2209C9.87478 10.2209 9.22719 9.49715 9.22719 8.61011C9.22719 7.72306 9.86118 6.99656 10.6639 6.99656C11.472 6.99656 12.1142 7.72579 12.1006 8.60739C12.1006 9.49715 11.4693 10.2209 10.6639 10.2209Z" fill="#ffffff" />
                    </svg>
                  </div>
                </div>
                Discord
              </div>
              and other services that support timestamp format.
            </h2>

            <div className='items-center mt-2 hidden md:flex'>Made by <a href="https://x.com/niklas_peterson" className='group plainButton w-fit pl-1 pr-3 ml-1 gap-2 rounded-2xl' target='_blank' rel="noopener noreferrer">
              <Image src="/niklaspeterson.jpg" width={24} height={24} alt='Profile picture of Niklas Peterson' className='rounded-full' /> Niklas Peterson</a>
            </div>
          </div>

          <div className='flex flex-1 flex-col gap-4'>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1031598414280015915"
              target="_blank"
              rel="noopener noreferrer"
              className="primaryButton"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9556 5.66765C18.9497 5.65666 18.94 5.64819 18.9283 5.64384C17.6326 5.04924 16.2653 4.62509 14.8605 4.38198C14.8478 4.37967 14.8348 4.38138 14.8232 4.38687C14.8116 4.39237 14.802 4.40137 14.7958 4.4126C14.6095 4.75078 14.4404 5.09815 14.2891 5.45337C12.774 5.22341 11.2329 5.22341 9.7178 5.45337C9.56587 5.09727 9.39441 4.74981 9.20421 4.4126C9.19765 4.4017 9.18801 4.39298 9.17652 4.38754C9.16502 4.38209 9.15217 4.38016 9.13959 4.38198C7.73235 4.624 6.36261 5.04818 5.0649 5.64384C5.05352 5.64867 5.04398 5.65701 5.03769 5.66765C2.44595 9.54166 1.73509 13.317 2.08202 17.0482C2.083 17.0576 2.08593 17.0667 2.09061 17.0749C2.09529 17.0831 2.10163 17.0902 2.10923 17.0958C3.61891 18.2125 5.30725 19.0647 7.10224 19.6161C7.11514 19.6201 7.12897 19.62 7.14178 19.6157C7.15459 19.6114 7.16574 19.6033 7.17367 19.5923C7.5588 19.068 7.90008 18.5129 8.19404 17.9325C8.19796 17.9245 8.20018 17.9158 8.20057 17.9069C8.20096 17.8981 8.19952 17.8892 8.19633 17.8809C8.19313 17.8726 8.18826 17.865 8.18202 17.8587C8.17577 17.8524 8.16829 17.8474 8.16003 17.8441C7.62077 17.6374 7.09874 17.3884 6.59886 17.0992C6.59003 17.0938 6.58262 17.0864 6.57727 17.0775C6.57192 17.0686 6.56878 17.0586 6.56811 17.0483C6.56745 17.0379 6.56927 17.0276 6.57344 17.0181C6.57761 17.0086 6.58399 17.0003 6.59206 16.9938C6.6975 16.9155 6.80294 16.8339 6.90157 16.7523C6.91027 16.7446 6.92097 16.7396 6.9324 16.7378C6.94384 16.736 6.95556 16.7375 6.96619 16.7421C10.2382 18.2352 13.7823 18.2352 17.0169 16.7421C17.0272 16.737 17.0387 16.735 17.0501 16.7362C17.0616 16.7374 17.0724 16.7418 17.0815 16.7489C17.1801 16.8305 17.2856 16.9155 17.391 16.9938C17.3991 17.0003 17.4054 17.0086 17.4096 17.0181C17.4138 17.0276 17.4156 17.0379 17.4149 17.0483C17.4143 17.0586 17.4111 17.0686 17.4058 17.0775C17.4004 17.0864 17.393 17.0938 17.3842 17.0992C16.8856 17.3899 16.3634 17.6379 15.823 17.8407C15.8148 17.844 15.8073 17.849 15.801 17.8553C15.7948 17.8616 15.7899 17.8692 15.7867 17.8775C15.7835 17.8858 15.7821 17.8947 15.7825 17.9035C15.7829 17.9124 15.7851 17.9211 15.789 17.9291C16.0881 18.5066 16.4291 19.0613 16.8094 19.5889C16.8173 19.5999 16.8285 19.608 16.8413 19.6123C16.8541 19.6166 16.8679 19.6167 16.8808 19.6127C18.681 19.0638 20.3742 18.2114 21.8874 17.0924C21.8952 17.087 21.9016 17.0799 21.9063 17.0716C21.911 17.0634 21.9139 17.0542 21.9146 17.0448C22.3296 12.7354 21.214 8.99066 18.9556 5.66765ZM8.68382 14.7762C7.69746 14.7762 6.88797 13.8714 6.88797 12.7626C6.88797 11.6538 7.68386 10.7457 8.68382 10.7457C9.69399 10.7457 10.4967 11.6572 10.4797 12.7592C10.4797 13.8714 9.68378 14.7762 8.68382 14.7762ZM15.3298 14.7762C14.3435 14.7762 13.534 13.8714 13.534 12.7626C13.534 11.6538 14.3265 10.7457 15.3298 10.7457C16.34 10.7457 17.1427 11.6572 17.1257 12.7592C17.1257 13.8714 16.3366 14.7762 15.3298 14.7762Z" fill="white" />
              </svg>
              Add to your server
            </a>

            <div className="hidden md:flex gap-1">
              <a
                href="https://buymeacoffee.com/niklaspeterson"
                target="_blank"
                rel="noopener noreferrer"
                className="plainButton"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.4827 11.239C11.7643 11.5465 10.949 11.8952 9.8924 11.8952C9.4504 11.8944 9.01053 11.8337 8.58478 11.715L9.31555 19.2178C9.34141 19.5313 9.48427 19.8237 9.71575 20.0369C9.94723 20.25 10.2504 20.3682 10.5651 20.3682C10.5651 20.3682 11.6012 20.422 11.947 20.422C12.3191 20.422 13.4349 20.3682 13.4349 20.3682C13.7495 20.3682 14.0526 20.2498 14.284 20.0367C14.5154 19.8236 14.6582 19.5313 14.6841 19.2178L15.4668 10.9269C15.117 10.8074 14.764 10.7281 14.3661 10.7281C13.6778 10.7278 13.1233 10.9648 12.4827 11.239Z" className="fill-current" />
                  <path d="M18.8461 7.34556L18.7361 6.79048C18.6373 6.29245 18.4132 5.82187 17.902 5.64187C17.7381 5.58428 17.5522 5.55954 17.4266 5.44034C17.3009 5.32115 17.2638 5.13604 17.2347 4.96437C17.1809 4.6493 17.1303 4.33396 17.0752 4.01943C17.0275 3.74902 16.9899 3.44526 16.8658 3.19718C16.7044 2.86409 16.3694 2.66929 16.0363 2.54041C15.8656 2.47669 15.6915 2.42279 15.5146 2.37897C14.6824 2.15942 13.8074 2.0787 12.9513 2.03269C11.9237 1.97598 10.8933 1.99307 9.8681 2.08381C9.10506 2.15323 8.30137 2.23718 7.57626 2.50112C7.31124 2.59772 7.03813 2.71368 6.83662 2.91844C6.58934 3.17001 6.50862 3.55907 6.68916 3.87279C6.81751 4.09557 7.03491 4.25297 7.2655 4.3571C7.56584 4.49127 7.87951 4.59336 8.20129 4.66168C9.09725 4.85971 10.0252 4.93746 10.9406 4.97056C11.9551 5.0115 12.9713 4.97832 13.981 4.87127C14.2307 4.84383 14.4799 4.81091 14.7287 4.77254C15.0217 4.72759 15.2098 4.34445 15.1234 4.07754C15.0201 3.75845 14.7424 3.63468 14.4284 3.68284C14.3821 3.6901 14.3361 3.69682 14.2898 3.70355L14.2565 3.70839C14.1501 3.72186 14.0437 3.7344 13.9374 3.74606C13.7177 3.76974 13.4974 3.78911 13.2766 3.80419C12.782 3.83862 12.2862 3.85449 11.7906 3.85531C11.3036 3.85531 10.8163 3.84158 10.3304 3.80957C10.1087 3.79504 9.88748 3.77656 9.66685 3.75413C9.56649 3.74364 9.4664 3.73262 9.36632 3.72023L9.27106 3.70813L9.25036 3.70517L9.15161 3.69091C8.94981 3.6605 8.74801 3.62553 8.54837 3.58328C8.52823 3.57881 8.5102 3.56761 8.49729 3.55151C8.48437 3.53542 8.47733 3.5154 8.47733 3.49476C8.47733 3.47413 8.48437 3.45411 8.49729 3.43801C8.5102 3.42192 8.52823 3.41071 8.54837 3.40624H8.55214C8.72515 3.36938 8.89949 3.3379 9.07438 3.31046C9.13269 3.30131 9.19115 3.29234 9.24981 3.28355H9.25142C9.36093 3.27629 9.47098 3.25664 9.57994 3.24373C10.528 3.14511 11.4817 3.11149 12.4344 3.1431C12.8969 3.15655 13.3592 3.18373 13.8195 3.23054C13.9185 3.24077 14.017 3.25153 14.1155 3.26364C14.1532 3.26821 14.1911 3.27359 14.229 3.27817L14.3055 3.2892C14.5282 3.32239 14.7498 3.36265 14.9703 3.41001C15.2969 3.48104 15.7164 3.50418 15.8617 3.86203C15.908 3.97557 15.929 4.10176 15.9545 4.22095L15.9871 4.37297C15.9879 4.3757 15.9886 4.37849 15.989 4.38131C16.0659 4.74006 16.143 5.09881 16.2201 5.45755C16.2257 5.48406 16.2259 5.51144 16.2205 5.53799C16.2151 5.56456 16.2043 5.5897 16.1887 5.61191C16.1732 5.6341 16.1532 5.65285 16.1301 5.66698C16.107 5.68112 16.0812 5.69033 16.0543 5.69407H16.0522L16.0051 5.70052L15.9586 5.7067C15.8111 5.7259 15.6635 5.74384 15.5157 5.76052C15.2246 5.79371 14.933 5.8224 14.641 5.84662C14.0607 5.89486 13.4793 5.92653 12.8967 5.9416C12.5998 5.94948 12.303 5.95317 12.0063 5.95263C10.8254 5.9517 9.64554 5.88306 8.4725 5.74706C8.3455 5.732 8.21851 5.71585 8.0915 5.69945C8.18998 5.7121 8.01993 5.68975 7.9855 5.68492C7.90478 5.67361 7.82406 5.66187 7.74334 5.64967C7.47239 5.60903 7.20307 5.55899 6.93266 5.51513C6.60575 5.46132 6.29311 5.48823 5.99741 5.64967C5.75469 5.78249 5.55824 5.98617 5.43427 6.23353C5.30673 6.49721 5.26879 6.78429 5.21175 7.06762C5.15471 7.35094 5.06592 7.65578 5.09956 7.94663C5.17193 8.57436 5.61077 9.08449 6.24199 9.19858C6.8358 9.30619 7.43285 9.39337 8.0315 9.46763C10.3832 9.75565 12.759 9.7901 15.118 9.57041C15.3101 9.55248 15.502 9.53293 15.6935 9.51176C15.7534 9.50519 15.8139 9.51207 15.8708 9.53193C15.9276 9.55179 15.9792 9.58411 16.022 9.62652C16.0647 9.66893 16.0974 9.72036 16.1176 9.77703C16.1379 9.83371 16.1452 9.89421 16.1391 9.95409L16.0794 10.5347C15.959 11.708 15.8386 12.8812 15.7183 14.0543C15.5927 15.2862 15.4664 16.5181 15.3392 17.7498C15.3033 18.0968 15.2674 18.4436 15.2316 18.7903C15.1971 19.1318 15.1923 19.4839 15.1274 19.8214C15.0252 20.352 14.666 20.6778 14.1419 20.797C13.6617 20.9063 13.1711 20.9637 12.6787 20.9681C12.1328 20.971 11.5871 20.9468 11.0412 20.9498C10.4584 20.9531 9.74462 20.8993 9.29475 20.4655C8.89949 20.0846 8.84487 19.488 8.79106 18.9721C8.71932 18.2893 8.6482 17.6065 8.57769 16.9238L7.92631 10.6714C7.92199 10.6308 7.91769 10.5907 7.91366 10.5498C7.88298 10.2568 7.67554 9.96998 7.34862 9.98477C7.06881 9.99714 6.75078 10.235 6.78361 10.5498L7.36558 16.1376C7.47733 17.2076 7.58881 18.2777 7.70002 19.3481C7.72156 19.5531 7.74173 19.7587 7.76432 19.9637C7.88729 21.0841 8.7429 21.6878 9.80246 21.8578C10.4213 21.9574 11.0552 21.9779 11.6832 21.9881C12.4882 22.0011 13.3013 22.032 14.0932 21.8861C15.2665 21.6708 16.1469 20.8874 16.2725 19.6721C16.3084 19.3212 16.3443 18.9703 16.3802 18.6192C16.4995 17.4583 16.6186 16.2973 16.7375 15.1362L17.3049 9.60378C17.3138 9.51756 17.3502 9.4365 17.4088 9.37259C17.4673 9.30868 17.5449 9.2653 17.63 9.24888C17.9655 9.1835 18.2862 9.07184 18.5249 8.8165C18.9048 8.40996 18.9804 7.87991 18.8461 7.34556ZM6.22477 7.72063C6.22988 7.71821 6.22046 7.76205 6.21643 7.78251C6.21562 7.75156 6.21723 7.72412 6.22477 7.72063ZM6.25732 7.97247C6.26001 7.97057 6.26808 7.98135 6.27643 7.99427C6.26378 7.98241 6.25598 7.97355 6.25732 7.97247ZM6.28934 8.0147C6.3071 8.04673 6.30091 8.03434 6.28934 8.0147ZM6.35365 8.0669H6.35526C6.35526 8.06879 6.35822 8.07067 6.3593 8.07256C6.35751 8.07048 6.3558 8.06859 6.35365 8.0669ZM17.6144 7.98887C17.4938 8.10349 17.3122 8.15677 17.1327 8.18341C15.1202 8.48207 13.0783 8.63328 11.0436 8.56655C9.58748 8.51678 8.14667 8.35506 6.70504 8.15139C6.56378 8.13148 6.41069 8.10565 6.31356 8.00152C6.13059 7.8051 6.22046 7.40959 6.26808 7.17228C6.31167 6.95488 6.39508 6.6651 6.65365 6.63416C7.05724 6.58681 7.52593 6.75711 7.92523 6.81766C8.40595 6.89101 8.88847 6.94976 9.37276 6.99389C11.4397 7.18224 13.5413 7.15291 15.5991 6.87739C15.9742 6.82698 16.3479 6.76842 16.7203 6.7017C17.052 6.64223 17.4198 6.53058 17.6203 6.87416C17.7578 7.10825 17.7761 7.42143 17.7548 7.68592C17.7483 7.80115 17.6982 7.90953 17.6144 7.98887Z" className="fill-current" />
                </svg>
              </a>
              <a
                href="https://x.com/AppTimestamps"
                target='_blank'
                rel="noopener noreferrer"
                className="plainButton"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.7512 2.96092H20.818L14.1179 10.6186L22 21.0391H15.8284L10.9946 14.7191L5.46359 21.0391H2.39494L9.5613 12.8483L2 2.96092H8.32828L12.6976 8.73759L17.7512 2.96092ZM16.6748 19.2034H18.3742L7.4049 4.70013H5.58133L16.6748 19.2034Z" className="fill-current" />
                </svg>
              </a>
              <a
                href='https://github.com/NiklasPeterson/timestamps'
                target='_blank'
                rel="noopener noreferrer"
                className="plainButton"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0001 2C6.47791 2 2 6.59036 2 12.2531C2 16.7833 4.86533 20.6266 8.83865 21.9824C9.33844 22.0773 9.5219 21.76 9.5219 21.489C9.5219 21.2446 9.51265 20.4369 9.50832 19.5802C6.72628 20.2004 6.13926 18.3704 6.13926 18.3704C5.68437 17.1853 5.02893 16.8702 5.02893 16.8702C4.12164 16.2338 5.09733 16.2469 5.09733 16.2469C6.1015 16.3192 6.63024 17.3036 6.63024 17.3036C7.52215 18.8709 8.96965 18.4178 9.54028 18.1558C9.63002 17.4932 9.8892 17.0409 10.1752 16.7848C7.95403 16.5256 5.61911 15.6464 5.61911 11.7176C5.61911 10.5982 6.00977 9.68357 6.64944 8.96557C6.54562 8.70732 6.20332 7.66444 6.74632 6.25216C6.74632 6.25216 7.58607 5.97661 9.49706 7.30316C10.2947 7.07599 11.1502 6.96203 12.0001 6.95816C12.8499 6.96203 13.7061 7.07599 14.5052 7.30316C16.4138 5.97661 17.2525 6.25216 17.2525 6.25216C17.7968 7.66444 17.4544 8.70732 17.3505 8.96557C17.9917 9.68357 18.3797 10.5982 18.3797 11.7176C18.3797 15.6557 16.0404 16.5228 13.8135 16.7766C14.1722 17.0948 14.4918 17.7188 14.4918 18.6754C14.4918 20.0473 14.4802 21.1514 14.4802 21.489C14.4802 21.762 14.6602 22.0817 15.1671 21.981C19.1384 20.6237 22 16.7817 22 12.2531C22 6.59036 17.5228 2 12.0001 2Z" className="fill-current" />
                  <path d="M5.81695 16.6513C5.79497 16.7017 5.71695 16.7168 5.64587 16.6822C5.57349 16.649 5.53282 16.5804 5.55629 16.5297C5.57778 16.4778 5.65597 16.4633 5.72819 16.4981C5.80075 16.5313 5.84207 16.6006 5.81695 16.6513Z" className="fill-current" />
                  <path d="M6.22126 17.1096C6.17363 17.1545 6.08058 17.1337 6.01744 17.0626C5.95215 16.992 5.93992 16.8973 5.98818 16.8517C6.03727 16.8068 6.12752 16.8278 6.19296 16.8986C6.25826 16.9702 6.271 17.0642 6.22126 17.1096Z" className="fill-current" />
                  <path d="M6.61486 17.6949C6.55369 17.7381 6.45369 17.6976 6.3919 17.6073C6.33073 17.517 6.33073 17.4088 6.39319 17.3654C6.45519 17.322 6.55369 17.361 6.61635 17.4506C6.67735 17.5424 6.67735 17.6506 6.61486 17.6949Z" className="fill-current" />
                  <path d="M7.15396 18.2594C7.09926 18.3209 6.98275 18.3044 6.89746 18.2206C6.81016 18.1388 6.78588 18.0226 6.84075 17.9613C6.89612 17.8997 7.0133 17.917 7.09926 18.0001C7.18588 18.0818 7.21234 18.1988 7.15396 18.2594Z" className="fill-current" />
                  <path d="M7.8978 18.5876C7.87367 18.6672 7.76147 18.7033 7.64839 18.6694C7.53551 18.6346 7.46163 18.5416 7.48443 18.4612C7.50788 18.3812 7.62063 18.3434 7.73451 18.3796C7.84721 18.4142 7.92129 18.5068 7.8978 18.5876Z" className="fill-current" />
                  <path d="M8.7147 18.6481C8.7175 18.7318 8.62166 18.8013 8.50296 18.8028C8.38362 18.8054 8.28708 18.7377 8.2858 18.6553C8.2858 18.5708 8.3795 18.502 8.49884 18.5C8.6175 18.4977 8.7147 18.5649 8.7147 18.6481Z" className="fill-current" />
                  <path d="M9.47502 18.5158C9.48924 18.5974 9.40677 18.6813 9.28891 18.7037C9.17303 18.7253 9.06577 18.6748 9.05107 18.5938C9.03669 18.5101 9.12065 18.4261 9.23636 18.4045C9.35436 18.3837 9.45998 18.4328 9.47502 18.5158Z" className="fill-current" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-4 p-4 md:p-6 rounded-xl border borderSecondary backdrop-blur backgroundTransparentCard shadow dark:shadow-none select-none h-fit justify-center items-center w-full md:w-auto">
          <DatePicker newTime={handleDateTimeChange} />
          <ResultList dateTime={dateTime.toISOString()} />
        </div>

      </main>

      <footer className='flex flex-col w-full mb-4 items-center gap-2 md:hidden'>
        <div className="flex gap-1">
          <a
            href="https://buymeacoffee.com/niklaspeterson"
            target="_blank"
            rel="noopener noreferrer"
            className="plainButton"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4827 11.239C11.7643 11.5465 10.949 11.8952 9.8924 11.8952C9.4504 11.8944 9.01053 11.8337 8.58478 11.715L9.31555 19.2178C9.34141 19.5313 9.48427 19.8237 9.71575 20.0369C9.94723 20.25 10.2504 20.3682 10.5651 20.3682C10.5651 20.3682 11.6012 20.422 11.947 20.422C12.3191 20.422 13.4349 20.3682 13.4349 20.3682C13.7495 20.3682 14.0526 20.2498 14.284 20.0367C14.5154 19.8236 14.6582 19.5313 14.6841 19.2178L15.4668 10.9269C15.117 10.8074 14.764 10.7281 14.3661 10.7281C13.6778 10.7278 13.1233 10.9648 12.4827 11.239Z" className="fill-current" />
              <path d="M18.8461 7.34556L18.7361 6.79048C18.6373 6.29245 18.4132 5.82187 17.902 5.64187C17.7381 5.58428 17.5522 5.55954 17.4266 5.44034C17.3009 5.32115 17.2638 5.13604 17.2347 4.96437C17.1809 4.6493 17.1303 4.33396 17.0752 4.01943C17.0275 3.74902 16.9899 3.44526 16.8658 3.19718C16.7044 2.86409 16.3694 2.66929 16.0363 2.54041C15.8656 2.47669 15.6915 2.42279 15.5146 2.37897C14.6824 2.15942 13.8074 2.0787 12.9513 2.03269C11.9237 1.97598 10.8933 1.99307 9.8681 2.08381C9.10506 2.15323 8.30137 2.23718 7.57626 2.50112C7.31124 2.59772 7.03813 2.71368 6.83662 2.91844C6.58934 3.17001 6.50862 3.55907 6.68916 3.87279C6.81751 4.09557 7.03491 4.25297 7.2655 4.3571C7.56584 4.49127 7.87951 4.59336 8.20129 4.66168C9.09725 4.85971 10.0252 4.93746 10.9406 4.97056C11.9551 5.0115 12.9713 4.97832 13.981 4.87127C14.2307 4.84383 14.4799 4.81091 14.7287 4.77254C15.0217 4.72759 15.2098 4.34445 15.1234 4.07754C15.0201 3.75845 14.7424 3.63468 14.4284 3.68284C14.3821 3.6901 14.3361 3.69682 14.2898 3.70355L14.2565 3.70839C14.1501 3.72186 14.0437 3.7344 13.9374 3.74606C13.7177 3.76974 13.4974 3.78911 13.2766 3.80419C12.782 3.83862 12.2862 3.85449 11.7906 3.85531C11.3036 3.85531 10.8163 3.84158 10.3304 3.80957C10.1087 3.79504 9.88748 3.77656 9.66685 3.75413C9.56649 3.74364 9.4664 3.73262 9.36632 3.72023L9.27106 3.70813L9.25036 3.70517L9.15161 3.69091C8.94981 3.6605 8.74801 3.62553 8.54837 3.58328C8.52823 3.57881 8.5102 3.56761 8.49729 3.55151C8.48437 3.53542 8.47733 3.5154 8.47733 3.49476C8.47733 3.47413 8.48437 3.45411 8.49729 3.43801C8.5102 3.42192 8.52823 3.41071 8.54837 3.40624H8.55214C8.72515 3.36938 8.89949 3.3379 9.07438 3.31046C9.13269 3.30131 9.19115 3.29234 9.24981 3.28355H9.25142C9.36093 3.27629 9.47098 3.25664 9.57994 3.24373C10.528 3.14511 11.4817 3.11149 12.4344 3.1431C12.8969 3.15655 13.3592 3.18373 13.8195 3.23054C13.9185 3.24077 14.017 3.25153 14.1155 3.26364C14.1532 3.26821 14.1911 3.27359 14.229 3.27817L14.3055 3.2892C14.5282 3.32239 14.7498 3.36265 14.9703 3.41001C15.2969 3.48104 15.7164 3.50418 15.8617 3.86203C15.908 3.97557 15.929 4.10176 15.9545 4.22095L15.9871 4.37297C15.9879 4.3757 15.9886 4.37849 15.989 4.38131C16.0659 4.74006 16.143 5.09881 16.2201 5.45755C16.2257 5.48406 16.2259 5.51144 16.2205 5.53799C16.2151 5.56456 16.2043 5.5897 16.1887 5.61191C16.1732 5.6341 16.1532 5.65285 16.1301 5.66698C16.107 5.68112 16.0812 5.69033 16.0543 5.69407H16.0522L16.0051 5.70052L15.9586 5.7067C15.8111 5.7259 15.6635 5.74384 15.5157 5.76052C15.2246 5.79371 14.933 5.8224 14.641 5.84662C14.0607 5.89486 13.4793 5.92653 12.8967 5.9416C12.5998 5.94948 12.303 5.95317 12.0063 5.95263C10.8254 5.9517 9.64554 5.88306 8.4725 5.74706C8.3455 5.732 8.21851 5.71585 8.0915 5.69945C8.18998 5.7121 8.01993 5.68975 7.9855 5.68492C7.90478 5.67361 7.82406 5.66187 7.74334 5.64967C7.47239 5.60903 7.20307 5.55899 6.93266 5.51513C6.60575 5.46132 6.29311 5.48823 5.99741 5.64967C5.75469 5.78249 5.55824 5.98617 5.43427 6.23353C5.30673 6.49721 5.26879 6.78429 5.21175 7.06762C5.15471 7.35094 5.06592 7.65578 5.09956 7.94663C5.17193 8.57436 5.61077 9.08449 6.24199 9.19858C6.8358 9.30619 7.43285 9.39337 8.0315 9.46763C10.3832 9.75565 12.759 9.7901 15.118 9.57041C15.3101 9.55248 15.502 9.53293 15.6935 9.51176C15.7534 9.50519 15.8139 9.51207 15.8708 9.53193C15.9276 9.55179 15.9792 9.58411 16.022 9.62652C16.0647 9.66893 16.0974 9.72036 16.1176 9.77703C16.1379 9.83371 16.1452 9.89421 16.1391 9.95409L16.0794 10.5347C15.959 11.708 15.8386 12.8812 15.7183 14.0543C15.5927 15.2862 15.4664 16.5181 15.3392 17.7498C15.3033 18.0968 15.2674 18.4436 15.2316 18.7903C15.1971 19.1318 15.1923 19.4839 15.1274 19.8214C15.0252 20.352 14.666 20.6778 14.1419 20.797C13.6617 20.9063 13.1711 20.9637 12.6787 20.9681C12.1328 20.971 11.5871 20.9468 11.0412 20.9498C10.4584 20.9531 9.74462 20.8993 9.29475 20.4655C8.89949 20.0846 8.84487 19.488 8.79106 18.9721C8.71932 18.2893 8.6482 17.6065 8.57769 16.9238L7.92631 10.6714C7.92199 10.6308 7.91769 10.5907 7.91366 10.5498C7.88298 10.2568 7.67554 9.96998 7.34862 9.98477C7.06881 9.99714 6.75078 10.235 6.78361 10.5498L7.36558 16.1376C7.47733 17.2076 7.58881 18.2777 7.70002 19.3481C7.72156 19.5531 7.74173 19.7587 7.76432 19.9637C7.88729 21.0841 8.7429 21.6878 9.80246 21.8578C10.4213 21.9574 11.0552 21.9779 11.6832 21.9881C12.4882 22.0011 13.3013 22.032 14.0932 21.8861C15.2665 21.6708 16.1469 20.8874 16.2725 19.6721C16.3084 19.3212 16.3443 18.9703 16.3802 18.6192C16.4995 17.4583 16.6186 16.2973 16.7375 15.1362L17.3049 9.60378C17.3138 9.51756 17.3502 9.4365 17.4088 9.37259C17.4673 9.30868 17.5449 9.2653 17.63 9.24888C17.9655 9.1835 18.2862 9.07184 18.5249 8.8165C18.9048 8.40996 18.9804 7.87991 18.8461 7.34556ZM6.22477 7.72063C6.22988 7.71821 6.22046 7.76205 6.21643 7.78251C6.21562 7.75156 6.21723 7.72412 6.22477 7.72063ZM6.25732 7.97247C6.26001 7.97057 6.26808 7.98135 6.27643 7.99427C6.26378 7.98241 6.25598 7.97355 6.25732 7.97247ZM6.28934 8.0147C6.3071 8.04673 6.30091 8.03434 6.28934 8.0147ZM6.35365 8.0669H6.35526C6.35526 8.06879 6.35822 8.07067 6.3593 8.07256C6.35751 8.07048 6.3558 8.06859 6.35365 8.0669ZM17.6144 7.98887C17.4938 8.10349 17.3122 8.15677 17.1327 8.18341C15.1202 8.48207 13.0783 8.63328 11.0436 8.56655C9.58748 8.51678 8.14667 8.35506 6.70504 8.15139C6.56378 8.13148 6.41069 8.10565 6.31356 8.00152C6.13059 7.8051 6.22046 7.40959 6.26808 7.17228C6.31167 6.95488 6.39508 6.6651 6.65365 6.63416C7.05724 6.58681 7.52593 6.75711 7.92523 6.81766C8.40595 6.89101 8.88847 6.94976 9.37276 6.99389C11.4397 7.18224 13.5413 7.15291 15.5991 6.87739C15.9742 6.82698 16.3479 6.76842 16.7203 6.7017C17.052 6.64223 17.4198 6.53058 17.6203 6.87416C17.7578 7.10825 17.7761 7.42143 17.7548 7.68592C17.7483 7.80115 17.6982 7.90953 17.6144 7.98887Z" className="fill-current" />
            </svg>
          </a>
          {/* <a
            href="https://x.com/AppTimestamps"
            target='_blank'
            rel="noopener noreferrer"
            className="plainButton"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.7512 2.96092H20.818L14.1179 10.6186L22 21.0391H15.8284L10.9946 14.7191L5.46359 21.0391H2.39494L9.5613 12.8483L2 2.96092H8.32828L12.6976 8.73759L17.7512 2.96092ZM16.6748 19.2034H18.3742L7.4049 4.70013H5.58133L16.6748 19.2034Z" className="fill-current" />
            </svg>
          </a> */}
          <a
            href='https://github.com/NiklasPeterson/timestamps'
            target='_blank'
            rel="noopener noreferrer"
            className="plainButton"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0001 2C6.47791 2 2 6.59036 2 12.2531C2 16.7833 4.86533 20.6266 8.83865 21.9824C9.33844 22.0773 9.5219 21.76 9.5219 21.489C9.5219 21.2446 9.51265 20.4369 9.50832 19.5802C6.72628 20.2004 6.13926 18.3704 6.13926 18.3704C5.68437 17.1853 5.02893 16.8702 5.02893 16.8702C4.12164 16.2338 5.09733 16.2469 5.09733 16.2469C6.1015 16.3192 6.63024 17.3036 6.63024 17.3036C7.52215 18.8709 8.96965 18.4178 9.54028 18.1558C9.63002 17.4932 9.8892 17.0409 10.1752 16.7848C7.95403 16.5256 5.61911 15.6464 5.61911 11.7176C5.61911 10.5982 6.00977 9.68357 6.64944 8.96557C6.54562 8.70732 6.20332 7.66444 6.74632 6.25216C6.74632 6.25216 7.58607 5.97661 9.49706 7.30316C10.2947 7.07599 11.1502 6.96203 12.0001 6.95816C12.8499 6.96203 13.7061 7.07599 14.5052 7.30316C16.4138 5.97661 17.2525 6.25216 17.2525 6.25216C17.7968 7.66444 17.4544 8.70732 17.3505 8.96557C17.9917 9.68357 18.3797 10.5982 18.3797 11.7176C18.3797 15.6557 16.0404 16.5228 13.8135 16.7766C14.1722 17.0948 14.4918 17.7188 14.4918 18.6754C14.4918 20.0473 14.4802 21.1514 14.4802 21.489C14.4802 21.762 14.6602 22.0817 15.1671 21.981C19.1384 20.6237 22 16.7817 22 12.2531C22 6.59036 17.5228 2 12.0001 2Z" className="fill-current" />
              <path d="M5.81695 16.6513C5.79497 16.7017 5.71695 16.7168 5.64587 16.6822C5.57349 16.649 5.53282 16.5804 5.55629 16.5297C5.57778 16.4778 5.65597 16.4633 5.72819 16.4981C5.80075 16.5313 5.84207 16.6006 5.81695 16.6513Z" className="fill-current" />
              <path d="M6.22126 17.1096C6.17363 17.1545 6.08058 17.1337 6.01744 17.0626C5.95215 16.992 5.93992 16.8973 5.98818 16.8517C6.03727 16.8068 6.12752 16.8278 6.19296 16.8986C6.25826 16.9702 6.271 17.0642 6.22126 17.1096Z" className="fill-current" />
              <path d="M6.61486 17.6949C6.55369 17.7381 6.45369 17.6976 6.3919 17.6073C6.33073 17.517 6.33073 17.4088 6.39319 17.3654C6.45519 17.322 6.55369 17.361 6.61635 17.4506C6.67735 17.5424 6.67735 17.6506 6.61486 17.6949Z" className="fill-current" />
              <path d="M7.15396 18.2594C7.09926 18.3209 6.98275 18.3044 6.89746 18.2206C6.81016 18.1388 6.78588 18.0226 6.84075 17.9613C6.89612 17.8997 7.0133 17.917 7.09926 18.0001C7.18588 18.0818 7.21234 18.1988 7.15396 18.2594Z" className="fill-current" />
              <path d="M7.8978 18.5876C7.87367 18.6672 7.76147 18.7033 7.64839 18.6694C7.53551 18.6346 7.46163 18.5416 7.48443 18.4612C7.50788 18.3812 7.62063 18.3434 7.73451 18.3796C7.84721 18.4142 7.92129 18.5068 7.8978 18.5876Z" className="fill-current" />
              <path d="M8.7147 18.6481C8.7175 18.7318 8.62166 18.8013 8.50296 18.8028C8.38362 18.8054 8.28708 18.7377 8.2858 18.6553C8.2858 18.5708 8.3795 18.502 8.49884 18.5C8.6175 18.4977 8.7147 18.5649 8.7147 18.6481Z" className="fill-current" />
              <path d="M9.47502 18.5158C9.48924 18.5974 9.40677 18.6813 9.28891 18.7037C9.17303 18.7253 9.06577 18.6748 9.05107 18.5938C9.03669 18.5101 9.12065 18.4261 9.23636 18.4045C9.35436 18.3837 9.45998 18.4328 9.47502 18.5158Z" className="fill-current" />
            </svg>
          </a>
        </div>
        <p className='flex items-center contentSecondary gap-1 text-sm'>Made by <a href="https://x.com/niklas_peterson" className='flex items-center font-semibold contentPrimary' target='_blank' rel="noopener noreferrer">Niklas Peterson</a>
        </p>

      </footer>
    </>
  );
}
