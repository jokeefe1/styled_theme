import React from "react";
import { NavLink } from "react-router-dom";

import Wrapper from "../styled/Wrapper";

const Navbar = props => (
  <Wrapper>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/portfolio" activeClassName="is-active">
      Portfolio
    </NavLink>
    <NavLink to="/contact" activeClassName="is-active">
      Contact
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </Wrapper>
);

export default Navbar;
