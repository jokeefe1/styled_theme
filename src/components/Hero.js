import React from "react";

import Navbar from "../components/Navbar";
import GridContainer from "../styled/GridContainer";
import Wrapper from "../styled/Wrapper";
import HeroImg from "../styled/HeroImg";

const Hero = props => (
  <Wrapper>
    <Navbar />
    <GridContainer>
      <HeroImg
        src="https://uploads.codesandbox.io/uploads/user/1911f3ca-9906-4f8d-93ca-14b764f7ae4b/ov95-papaya.jpg"
        alt="picture of papaya and other friut"
      />
    </GridContainer>
  </Wrapper>
);

export default Hero;
