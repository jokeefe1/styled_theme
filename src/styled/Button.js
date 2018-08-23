import styled from "styled-components";

export default styled.button`
  margin: 8px;
  padding: 8px;
  background-color: ${props =>
    props.primary ? props.theme.color1 : props.theme.color2};
  color: ${props => (props.primary ? props.theme.color2 : props.theme.color1)};
  border: solid 1px ${props =>
    props.primary ? props.theme.color2 : props.theme.color1};
  border-radius: 3px;

  :hover {
    background-color: ${props =>
      props.primary ? props.theme.color2 : props.theme.color1}
    color: ${props =>
      props.primary ? props.theme.color1 : props.theme.color2};
    border: 1px solid ${props =>
      props.primary ? props.theme.color1 : props.theme.color2};
  }
`;
