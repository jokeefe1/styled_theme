import React from "react";
import { NavLink } from "react-router-dom";

import Wrapper from "../styled/Wrapper";
import Nav from "../styled/Nav";

const Navbar = props => (
  <Nav>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/portfolio" activeClassName="is-active">
      Portfolio
    </NavLink>
    <NavLink to="/contact" activeClassName="is-active">
      Contact
    </NavLink>
  </Nav>
);

export default Navbar;
