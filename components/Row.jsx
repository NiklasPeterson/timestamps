import styled from 'styled-components';

const Row = props => {
  return (
    <ScRow>
        {props.children.map( (child, i) => 
            <ScColumn key={i} item>
              {child}
            </ScColumn>
        )}
    </ScRow>
  );
}

export default Row;

const ScRow = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  background:var(--color-secondary);
  padding: 8px 16px;
  border-radius: 8px;
`;

const ScColumn = styled.div`
  display: flex;
  flex: 1.5;
  padding: 4px;

  &:last-child {
    flex: 1;
    @media (max-width: 812px) {
      flex: 0;
    }
  }
`;