import React from 'react';

interface PlainButtonProps {
    children: React.ReactNode; // Define the children prop
}

const PlainButton: React.FC<PlainButtonProps> = ({ children }) => {
    return (
        <button className="plainButton">
            {children}
        </button>
    );
};

export default PlainButton;
