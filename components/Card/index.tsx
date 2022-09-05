import React from "react";
import Contador from "../Contador";
import { Container } from "./style";

const Card = () => {
  return (
    <Container>
      <Contador />
      <Contador />
      <Contador />
    </Container>
  );
};

export default Card;
