import styled from 'styled-components';
import toast from 'react-hot-toast';

const Timestamp = ({ label, value }) => {
  const copyText = () => {
    navigator.clipboard.writeText(value);
    toast.success(`Copied to clipboard: ${value}`, {
      style: {
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <ScTimestamp>    
      <ScInput 
        type="text"
        value={value}
        readOnly 
        aria-label={label}
      />
      <ScButton onClick={copyText}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
      </ScButton>
    </ScTimestamp>
  );
};

export default Timestamp;

const ScTimestamp = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 812px) {
      justify-content: flex-end;
    }
`;

const ScInput = styled.input`
	background-color: transparent;
	box-shadow: none;
	border: none;
	color: var(--color-text);
	font-family: monospace;
	outline: none;
  font-size: 16px;
  width: 160px;
  pointer-events: none;
  
  @media (max-width: 812px) {
    display: none;
  }
`;

const ScButton = styled.button`
  background-color: transparent;
	box-shadow: none;
	border: none;
  height: 32px;
display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 812px) {
    height: 48px;
  }
  :hover {
    cursor: pointer;
      opacity: 0.64;
  }

  svg {
    path {
      fill: var(--color-text);
    }
  }
`;