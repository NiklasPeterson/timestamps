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
  background:var(--color-secondary);
  padding: 8px 16px;
  border-radius: 8px;
`;

const ScResultColumn = styled.div`
  display: flex;
  flex: 1.5;
  padding: 4px;

  :last-child {
    flex: 1;
    @media (max-width: 812px) {
      flex: 0;
    }
  }
`;