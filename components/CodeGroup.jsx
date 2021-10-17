const CodeGroup = props => {

  const copyText = e => {
    navigator.clipboard.writeText(props.value);
  }

  return (
    <div style={{display: "flex", position: "relative"}}>
      <input 
        label={props.label}
        value={props.value} 
        variant="outlined">
      </input>
      <button onClick={copyText}>Copy</button>

    </div>
  );
}

export default CodeGroup;