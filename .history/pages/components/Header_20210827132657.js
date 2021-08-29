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
  color: rgb(102, 252, 241);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogIn = styled.button`
  border-color: rgb(70, 162, 159);
  background-color: #0b0d10;
  color: rgb(70, 162, 159);
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  margin-left: 8px;
  padding: 4px 0;
  text-align: center;
  width: 90px;
`;

const SignUp = styled.button`
  background-color: rgb(70, 162, 159);
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  margin-left: 8px;
  padding: 4px 0;
  text-align: center;
  width: 90px;
`;

function Header() {
  return (
    <Container>
      <LogoContainer>Anime Tracker</LogoContainer>
      <ButtonContainer>
        <LogIn>Log In</LogIn>
        <SignUp>Sign Up</SignUp>
      </ButtonContainer>
    </Container>
  );
}

export default Header;
