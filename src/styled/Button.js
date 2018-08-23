import styled from "styled-components";

export default styled.button`
  margin: 8px;
  padding: 8px;
  background-color: ${props =>
    props.primary ? "papayawhip" : "palevioletred"};
  color: ${props => (props.primary ? "palevioletred" : "papayawhip")};
  border: solid 1px ${props =>
    props.primary ? "palevioletred" : "papayawhip"};
  border-radius: 3px;

  :hover {
    background-color: ${props =>
      props.primary ? "palevioletred" : "papayawhip"}
    color: ${props => (props.primary ? "papayawhip" : "palevioletred")};
    border: 1px solid ${props =>
      props.primary ? "papayawhip" : "palevioletred"};
  }
`;
