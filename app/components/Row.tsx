import React from 'react';
import PlainButton from './PlainButton';

interface RowProps {
    children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => {
    return (
        <div className="flex items-center backgroundPrimary shadow-sm gap-1 px-3 py-2 rounded-lg">
        {children}
        <PlainButton>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" className="fill-current"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
        </PlainButton>
      </div>
    );
};

export default Row;