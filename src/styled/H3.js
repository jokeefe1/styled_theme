import styled from "styled-components";

export default styled.h3`
  font-family: Colibri;
  font-weight: 100;
  font-size: 2rem;
  color: ${props => (props.primary ? "palevioletred" : "darkblue")}
`;
