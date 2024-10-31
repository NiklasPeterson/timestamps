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
    <div className='relative overflow-hidden flex px-2 py-2 w-full rounded-xl gap-3 items-center backgroundSecondary border borderSecondary backgroundHoverOverlay md:w-fit'>
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
      <svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L13.5 7.56066V13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25V5.75C15 5.33579 14.6642 5 14.25 5H6.75C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5H12.4393L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803Z"/>
      </svg>
    </div>
  </a>
);

export default AppCard;