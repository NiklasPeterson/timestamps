import styled from 'styled-components';

const ResultRow = props => {
  return (
    <ScResultRow>
        {props.children.map( (child, i) => 
            <ScResultColumn key={i} item>
              {child}
            </ScResultColumn>
        )}
    </ScResultRow>
  );
}

export default ResultRow;

const ScResultRow = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
`;

const ScResultColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;