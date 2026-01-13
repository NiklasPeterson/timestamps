import Image from 'next/image'

interface AppCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const AppCard: React.FC<AppCardProps> = ({ href, imageSrc, imageAlt, title, description }) => (
  <a
    href={href}
    target='_blank'
    rel="noopener noreferrer"
  >
    <div className='relative overflow-hidden flex px-2 py-2 w-full rounded-xl gap-3 items-center bg-zinc-50 dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700/50 shadow-xs dark:shadow-none md:w-fit backgroundHoverOverlay'>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={36}
        height={36}
        className='rounded-lg'
      />
      <div className='w-full'>
        <div className='text-sm font-semibold contentPrimary'>{title}</div>
        <div className='text-xs contentSecondary'>{description}</div>
      </div>
      <svg width={24} height={24} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.22001 14.78C5.36064 14.9205 5.55126 14.9993 5.75001 14.9993C5.94876 14.9993 6.13939 14.9205 6.28001 14.78L13.5 7.56V13.25C13.5 13.4489 13.579 13.6397 13.7197 13.7803C13.8603 13.921 14.0511 14 14.25 14C14.4489 14 14.6397 13.921 14.7803 13.7803C14.921 13.6397 15 13.4489 15 13.25V5.75C15 5.55109 14.921 5.36032 14.7803 5.21967C14.6397 5.07902 14.4489 5 14.25 5H6.75001C6.5511 5 6.36033 5.07902 6.21968 5.21967C6.07903 5.36032 6.00001 5.55109 6.00001 5.75C6.00001 5.94891 6.07903 6.13968 6.21968 6.28033C6.36033 6.42098 6.5511 6.5 6.75001 6.5H12.44L5.22001 13.72C5.07956 13.8606 5.00067 14.0512 5.00067 14.25C5.00067 14.4488 5.07956 14.6394 5.22001 14.78Z" />
      </svg>
    </div>
  </a>
);

export default AppCard;