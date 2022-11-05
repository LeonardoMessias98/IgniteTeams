import React from "react";

import { Container, Title, Subtitle } from "./styles";

type IHighLightProps = {
  title: string;
  subtitle: string;
};

const HighLight: React.FC<IHighLightProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default HighLight;
