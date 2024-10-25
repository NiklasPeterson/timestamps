import React from 'react';
import PlainButton from './PlainButton';
import { toast } from 'sonner'

interface ResultItemProps {
  children: React.ReactNode;
  label: string;
  value: string;
}

const ResultItem: React.FC<ResultItemProps> = ({ children, label, value }) => {
  const handleButtonClick = () => {
    navigator.clipboard.writeText(value);
    toast.success(`Copied to clipboard: ${value}`, {
      className: 'backgroundSecondary contentPrimary borderSecondary',
      // icon: <MyIcon />,
    }
    );
  };

  return (
    <div className="flex items-center backgroundPrimary shadow-sm gap-2 px-3 py-2 rounded-lg">
      <div className="flex-1">
        {children}
        <input readOnly type="text" aria-label={label} value={value} className="hidden" />
      </div>
      <PlainButton onClick={handleButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" className="fill-current"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
      </PlainButton>
    </div>
  );
};

export default ResultItem;
