import Image from 'next/image';
import AppCard from './components/AppCard';
import ServerCount from './components/ServerCount';
import TimestampGenerator from './components/TimestampGenerator';
import {
  CoffeeIcon,
  DiscordIcon,
  GithubIcon,
  TimestampIcon,
} from './components/icons';

const DISCORD_AUTH_URL = 'https://discord.com/oauth2/authorize?client_id=1031598414280015915';

export default function Home() {
  return (
    <>
      <aside className="flex w-full pr-sa md:top-0 md:absolute" aria-label="Other apps by Niklas Peterson">
        <div className="flex w-full mx-4 mt-4 gap-2 justify-end flex-col md:flex-row">
          <AppCard
            href="https://apps.apple.com/app/titls/id1579078964"
            imageSrc="/titls.png"
            imageAlt="App icon of Titls iOS app"
            title="Titls"
            description="Organize & categorize your home screens."
          />
          <AppCard
            href="https://apps.apple.com/app/hydrify/id6450311759"
            imageSrc="/hydrify.png"
            imageAlt="App icon of Hydrify iOS app"
            title="Hydrify"
            description="Your optimal iOS hydration companion."
          />
        </div>
      </aside>

      <main id="main-content" className="flex w-full max-w-6xl px-4 flex-wrap py-20 gap-16 md:gap-14 md:justify-between md:items-center md:py-32">
        <header className="max-w-lg flex flex-col gap-4 md:gap-6 h-fit md:flex-1">
          <h1 className="font-semibold text-5xl md:text-7xl">Timestamps Generator</h1>
          <div>
            <p className="text-xl">
              <span className="mr-2">Generate and format</span>
              <span className="inline-block mr-2">
                <span className="inline-block h-5.25">
                  <span className="block h-7 w-7 p-1 mr-2 rounded-md shadow-md dark:shadow-none rotate-12 bg-black border border-zinc-50/20 icon-motion icon-motion-positive">
                    <TimestampIcon className="size-4.5 text-white" />
                  </span>
                </span>
                timestamps
              </span>
              <span className="mr-2">for</span>
              <span className="inline-block mr-2">
                <span className="inline-block h-5.25">
                  <span className="block h-7 w-7 p-1 mr-2 rounded-md shadow-md dark:shadow-none -rotate-12 bg-[#5865F2] border border-zinc-50/20 icon-motion icon-motion-negative">
                    <DiscordIcon className="size-4.5 text-white" />
                  </span>
                </span>
                Discord
              </span>
              and other services that support timestamp format.
            </p>

            <p className="items-center mt-2 hidden md:flex">
              Made by
              <a href="https://niklaspeterson.com" className="group plainButton w-fit min-h-10! h-fit p-2 pr-3 ml-1 gap-2 rounded-full" target="_blank" rel="noopener noreferrer">
                <Image src="/niklaspeterson.jpg" width={24} height={24} alt="Profile picture of Niklas Peterson" className="rounded-full" />
                Niklas Peterson
              </a>
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-row gap-4 items-center">
              <a href={DISCORD_AUTH_URL} target="_blank" rel="noopener noreferrer" className="primaryButton">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.9556 5.66765C18.9497 5.65666 18.94 5.64819 18.9283 5.64384C17.6326 5.04924 16.2653 4.62509 14.8605 4.38198C14.8478 4.37967 14.8348 4.38138 14.8232 4.38687C14.8116 4.39237 14.802 4.40137 14.7958 4.4126C14.6095 4.75078 14.4404 5.09815 14.2891 5.45337C12.774 5.22341 11.2329 5.22341 9.7178 5.45337C9.56587 5.09727 9.39441 4.74981 9.20421 4.4126C9.19765 4.4017 9.18801 4.39298 9.17652 4.38754C9.16502 4.38209 9.15217 4.38016 9.13959 4.38198C7.73235 4.624 6.36261 5.04818 5.0649 5.64384C5.05352 5.64867 5.04398 5.65701 5.03769 5.66765C2.44595 9.54166 1.73509 13.317 2.08202 17.0482C2.083 17.0576 2.08593 17.0667 2.09061 17.0749C2.09529 17.0831 2.10163 17.0902 2.10923 17.0958C3.61891 18.2125 5.30725 19.0647 7.10224 19.6161C7.11514 19.6201 7.12897 19.62 7.14178 19.6157C7.15459 19.6114 7.16574 19.6033 7.17367 19.5923C7.5588 19.068 7.90008 18.5129 8.19404 17.9325C8.19796 17.9245 8.20018 17.9158 8.20057 17.9069C8.20096 17.8981 8.19952 17.8892 8.19633 17.8809C8.19313 17.8726 8.18826 17.865 8.18202 17.8587C8.17577 17.8524 8.16829 17.8474 8.16003 17.8441C7.62077 17.6374 7.09874 17.3884 6.59886 17.0992C6.59003 17.0938 6.58262 17.0864 6.57727 17.0775C6.57192 17.0686 6.56878 17.0586 6.56811 17.0483C6.56745 17.0379 6.56927 17.0276 6.57344 17.0181C6.57761 17.0086 6.58399 17.0003 6.59206 16.9938C6.6975 16.9155 6.80294 16.8339 6.90157 16.7523C6.91027 16.7446 6.92097 16.7396 6.9324 16.7378C6.94384 16.736 6.95556 16.7375 6.96619 16.7421C10.2382 18.2352 13.7823 18.2352 17.0169 16.7421C17.0272 16.737 17.0387 16.735 17.0501 16.7362C17.0616 16.7374 17.0724 16.7418 17.0815 16.7489C17.1801 16.8305 17.2856 16.9155 17.391 16.9938C17.3991 17.0003 17.4054 17.0086 17.4096 17.0181C17.4138 17.0276 17.4156 17.0379 17.4149 17.0483C17.4143 17.0586 17.4111 17.0686 17.4058 17.0775C17.4004 17.0864 17.393 17.0938 17.3842 17.0992C16.8856 17.3899 16.3634 17.6379 15.823 17.8407C15.8148 17.844 15.8073 17.849 15.801 17.8553C15.7948 17.8616 15.7899 17.8692 15.7867 17.8775C15.7835 17.8858 15.7821 17.8947 15.7825 17.9035C15.7829 17.9124 15.7851 17.9211 15.789 17.9291C16.0881 18.5066 16.4291 19.0613 16.8094 19.5889C16.8173 19.5999 16.8285 19.608 16.8413 19.6123C16.8541 19.6166 16.8679 19.6167 16.8808 19.6127C18.681 19.0638 20.3742 18.2114 21.8874 17.0924C21.8952 17.087 21.9016 17.0799 21.9063 17.0716C21.911 17.0634 21.9139 17.0542 21.9146 17.0448C22.3296 12.7354 21.214 8.99066 18.9556 5.66765ZM8.68382 14.7762C7.69746 14.7762 6.88797 13.8714 6.88797 12.7626C6.88797 11.6538 7.68386 10.7457 8.68382 10.7457C9.69399 10.7457 10.4967 11.6572 10.4797 12.7592C10.4797 13.8714 9.68378 14.7762 8.68382 14.7762ZM15.3298 14.7762C14.3435 14.7762 13.534 13.8714 13.534 12.7626C13.534 11.6538 14.3265 10.7457 15.3298 10.7457C16.34 10.7457 17.1427 11.6572 17.1257 12.7592C17.1257 13.8714 16.3366 14.7762 15.3298 14.7762Z" fill="white" />
                </svg>
                Add to your server
              </a>
              <ServerCount />
            </div>

            <SocialLinks className="hidden md:flex" />
          </div>
        </header>

        <TimestampGenerator />
      </main>

      <footer className="flex flex-col w-full mb-4 items-center gap-2 md:hidden">
        <SocialLinks />
        <p className="flex items-center contentSecondary gap-1 text-sm">
          Made by <a href="https://niklaspeterson.com" className="focusLinkInline flex items-center font-semibold contentPrimary" target="_blank" rel="noopener noreferrer">Niklas Peterson</a>
        </p>
      </footer>
    </>
  );
}

function SocialLinks({ className = 'flex' }: { className?: string }) {
  return (
    <nav className={`${className} gap-1`} aria-label="Support and source links">
      <a href="https://buymeacoffee.com/niklaspeterson" target="_blank" rel="noopener noreferrer" aria-label="Buy Niklas Peterson a coffee" className="plainButton rounded-lg">
        <CoffeeIcon className="size-6" />
      </a>
      <a href="https://github.com/NiklasPeterson/timestamps" target="_blank" rel="noopener noreferrer" aria-label="Open the timestamps GitHub repository" className="plainButton rounded-lg">
        <GithubIcon className="size-6" />
      </a>
    </nav>
  );
}
