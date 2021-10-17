const ResultRow = props => {
  return (
    <div style={{padding: "20px", margin:"20px 0"}}>
      <div style={{display: "flex"}}>
        {props.children.map( (child, i) => 
            <div key={i} item>
              {child}
            </div>
        )}
      </div>
    </div>
  );
}

export default ResultRow;