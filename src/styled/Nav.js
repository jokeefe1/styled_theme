import styled from "styled-components";

export default styled.div`
  height: 16px;
  padding: 8px;
  background-color: ${props => props.theme.color1};
  border-bottom: 4px solid ${props => props.theme.color2};
`;
