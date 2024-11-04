import React from 'react';

interface PlainButtonProps {
    onClick?: () => void;
    children: React.ReactNode; // Define the children prop
}

const PlainButton: React.FC<PlainButtonProps> = ({ onClick, children }) => {
    return (
        <button className="plainButton" onClick={onClick}>
            {children}
        </button>
    );
};

export default PlainButton;