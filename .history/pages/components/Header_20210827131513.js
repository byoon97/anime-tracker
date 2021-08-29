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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogIn = styled.button`
  border-color: rgb(70, 162, 159);
  color: rgb(70, 162, 159);
  border-radius: 2px;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  margin-left: 8px;
`;

const SignUp = styled.button`
  background-color: rgb(70, 162, 159);
`;

function Header() {
  return (
    <Container>
      <LogoContainer>Anime Tracker</LogoContainer>
      <ButtonContainer>
        <LogIn />
        <SignUp />
      </ButtonContainer>
    </Container>
  );
}

export default Header;
