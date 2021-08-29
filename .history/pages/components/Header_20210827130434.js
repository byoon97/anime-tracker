import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 2.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  font-size: 2em;
`;

const ButtonContainer = styled.div``;

function Header() {
  return (
    <Container>
      <LogoContainer>Anime Tracker</LogoContainer>
    </Container>
  );
}

export default Header;
