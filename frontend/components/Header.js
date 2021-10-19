import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import { destroyCookie } from "nookies";

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
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LogInOut = styled.button`
  border-color: rgb(102, 252, 241);
  background-color: #0b0d10;
  color: rgb(102, 252, 241);
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
  background-color: rgb(102, 252, 241);
  border-color: rgb(102, 252, 241);
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  margin-left: 8px;
  padding: 4px 0;
  text-align: center;
  width: 90px;
`;

function Header(props) {
  async function handleLogOut() {
    destroyCookie(null, "jwt");
    props.handleClick(false);

    Router.push("/login");
  }

  return (
    <Container>
      <Link href="/" passHref>
        <LogoContainer>Anime Tracker</LogoContainer>
      </Link>
      <ButtonContainer>
        {props.prop ? (
          <LogInOut onClick={() => handleLogOut()}>Sign Out</LogInOut>
        ) : (
          <Link href="/login" passHref>
            <LogInOut>Log In</LogInOut>
          </Link>
        )}
        {props.prop ? <SignUp>My Profile</SignUp> : <SignUp>Sign Up</SignUp>}
      </ButtonContainer>
    </Container>
  );
}

export default Header;
