import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = props => (
  <Container>
    <LogoDiv>
      <Img
        src="https://uploads.codesandbox.io/uploads/user/1911f3ca-9906-4f8d-93ca-14b764f7ae4b/wKvb-papaya.svg"
        alt="papaya logo"
      />
    </LogoDiv>
    <Nav>
      <Span>
        <StyledNavLink to="/" activeClassName="is-active" exact={true}>
          Home
        </StyledNavLink>
      </Span>
      <Span>
        <StyledNavLink to="/portfolio" activeClassName="is-active">
          Portfolio
        </StyledNavLink>
      </Span>
      <Span>
        <StyledNavLink to="/contact" activeClassName="is-active">
          Contact
        </StyledNavLink>
      </Span>
    </Nav>
  </Container>
);

export default Navbar;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const LogoDiv = styled.div`
  grid-column: 1 / 2;
  background-color: ${props => props.theme.color1};
  border-top: 3px solid ${props => props.theme.color2};
  padding: 8px;
  z-index: 1;
`;
const Img = styled.img`
  height: 24px;
`;
const Nav = styled.div`
  grid-column: 2 / 5;
  background-color: ${props => props.theme.color1};
  border-top: 3px solid ${props => props.theme.color2};
  padding: 8px;
`;
const Span = styled.span`
  padding: 16px;
`;
const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme.color2}

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
