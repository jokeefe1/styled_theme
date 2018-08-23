import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "../styled/Wrapper";
import H3 from "../styled/H3";
import P from "../styled/P";

export const PageNotFound = props => (
  <Wrapper>
    <H3>Whoops... the page you are looking for does not exist.</H3>
    <P>
      Click <Link to="/">here</Link> to return to the home page.
    </P>
  </Wrapper>
);
