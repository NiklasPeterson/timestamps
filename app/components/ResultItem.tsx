import React from 'react';
import PlainButton from './PlainButton';
import { toast } from 'sonner'

interface ResultItemProps {
  children: React.ReactNode;
  label: string;
  value: string;
}

const SuccessIcon: React.FC = ({ }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
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
    <div className="flex items-center shadow-xs dark:shadow-none gap-2 p-2 rounded-lg relative bg-white dark:bg-zinc-900 overflow-hidden backgroundHoverOverlay cursor-pointer" onClick={handleButtonClick}>
      <div className="flex-1">
        {children}
        <input readOnly type="text" aria-label={label} value={value} className="hidden" />
      </div>

      <PlainButton>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" className="fill-current"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
      </PlainButton>
    </div>
  );
};

export default ResultItem;
