import styled from "styled-components";

export default styled.div`
  height: 16px;
  padding: 8px 0 16px 0;
  background-color: ${props => props.theme.color1};
  border-top: 2px solid ${props => props.theme.color2};
`;
