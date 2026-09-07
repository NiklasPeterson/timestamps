import React from 'react';
import { toast } from 'sonner'
import { CopyIcon } from './icons';

interface ResultItemProps {
  children: React.ReactNode;
  label: string;
  value: string;
}

const SuccessIcon: React.FC = () => (
  <svg aria-hidden="true" focusable="false" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const ResultItem: React.FC<ResultItemProps> = ({ children, label, value }) => {
  const handleButtonClick = () => {
    navigator.clipboard.writeText(value);

    toast.success('Timestamp copied to your clipboard!', {
      className: 'bg-white dark:bg-zinc-900 contentPrimary border-zinc-200 dark:border-zinc-700',
      icon: <SuccessIcon />,
    });
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      aria-label={`Copy ${label} timestamp`}
      className="flex w-full items-center gap-2 p-2 rounded-lg relative bg-white dark:bg-zinc-900 shadow-xs dark:shadow-none overflow-hidden backgroundHoverOverlay text-left cursor-pointer transition-transform duration-200 ease-out active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5865F2]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950"
    >
      <div className="flex-1 min-w-0">
        {children}
      </div>

      <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-lg contentPrimary">
        <CopyIcon />
      </span>
    </button>
  );
};

export default ResultItem;
