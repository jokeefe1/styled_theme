import React from "react";
import Button from "../styled/Button";

export const CardButton = props => (
  <Button onClick={props.handleClick}>{props.title}</Button>
);
