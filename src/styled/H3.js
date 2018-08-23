import styled from "styled-components";

export default styled.h3`
  font-family: ${props => props.theme.font};
  font-weight: 100;
  font-size: 2rem;
  color: ${props => (props.primary ? props.theme.color2 : props.theme.color1)}
`;
