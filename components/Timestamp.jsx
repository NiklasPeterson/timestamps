import styled from 'styled-components';
import toast from 'react-hot-toast';
const Timestamp = props => {

  const copyText = e => {
    navigator.clipboard.writeText(props.value);
    toast.success(`Copied to clipboard: `+ props.value,
      {
        style: {
          background: '#333',
          color: '#fff',
        },
      }
    );
  }

  return (
    <ScTimestamp>    
        <ScInput 
        label={props.label}
        value={props.value}
        variant="outlined"
        readOnly 
        >
      </ScInput>
      <ScButton onClick={copyText}>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="copy" className="svg-inline--fa fa-copy fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path></svg>
      </ScButton>
      
    </ScTimestamp>
  );
}

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
	border-radius: 5px;
  font-size: 12px;
  text-transform: uppercase;
	box-shadow: none;
	border: none;
  @media (max-width: 812px) {
    height: 48px;
  }
  :hover {
    cursor: pointer;
      opacity: 0.64;
  }

  svg {
    width: 16px;
    height: 18px;

    path {
      fill: var(--color-text);
    }
  }
`;