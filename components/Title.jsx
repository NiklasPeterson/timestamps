import styled from 'styled-components'

const ScTitle = styled.h1`
  font-size: 64px;
`

const Title = (props) => (
<ScTitle>{props.children}</ScTitle>
);

export default Title;