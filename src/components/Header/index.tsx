import React from "react";

import logoImg from "@assets/logo.png";
import { BackButton, BackIcon, Container, Logo } from "./styles";

type IHeaderProps = {
  showBackButton?: boolean;
};

const Header: React.FC<IHeaderProps> = ({ showBackButton = false }) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
};

export default Header;
