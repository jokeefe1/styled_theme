import React from "react";
import styled from "styled-components";

const Footer = props => (
  <Wrapper>
    <LightGrey>
      <Ul>
        <Li>Test</Li>
        <Li>Test</Li>
        <Li>Test</Li>
        <Li>Test</Li>
      </Ul>
    </LightGrey>
  </Wrapper>
);

export default Footer;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;
const LightGrey = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  background-color: ${props => props.theme.accent1};
`;
const DarkGrey = styled.div`
   background-color: ${props => props.theme.accent2};
   height: 20%;
 `;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding 8px;
`;
const Li = styled.li`
  text-decoration: none;
  color: lightgrey;
  padding: 0 24px;
`;
