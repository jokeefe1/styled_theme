import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import EmptyDiv from "../styled/EmptyDiv";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../containers/Card";
import { PageNotFound } from "../components/PageNotFound";

export const Router = () => (
  <BrowserRouter>
    <EmptyDiv>
      <Hero />
      <Switch>
        <Route exact path="/" component={Card} />
        <Route component={PageNotFound} />
      </Switch>
    </EmptyDiv>
  </BrowserRouter>
);
