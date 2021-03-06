import React, { useState } from "react";
import styled from "styled-components";
import Router from "next/router";
import { setCookie } from "nookies";
import Link from "next/link";

//ADD ERROR HANDLING

//CSS

const Container = styled.div`
  margin: auto;
  padding-top: 2rem;
  background-color: rgb(32, 40, 50);
  height: 1060px;
  width: 654.5px;
`;

const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(70, 162, 159);
  border-color: rgb(70, 162, 159);
  box-shadow: 0 0 20px rgb(102, 252, 241);
  height: 510px;
  width: 564px;
`;

const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(70, 162, 159);
`;

const Input = styled.input``;

const SignIn = styled.button``;

const SignUp = styled.button``;

export default function Login(props) {
  console.log("login", props);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  //Log In logic
  async function handleLogin() {
    const loginInfo = {
      identifier: username,
      password: password,
    };

    const login = await fetch(`http://localhost:1337/auth/local`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });

    const loginResponse = await login.json();

    if (loginResponse.error) {
      setError(loginResponse.message[0].messages[0].message);
    } else {
      setCookie(null, "jwt", loginResponse.jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      // props.handleClick(true);

      Router.push("/");
    }
  }

  return (
    <Container>
      <LogInContainer>
        <InputFields>
          Username{" "}
          <Input
            type="email"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </InputFields>
        <InputFields>
          Password{" "}
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputFields>
        <SignIn onClick={() => handleLogin()}>Sign In</SignIn>
        <Link href="/Register" passHref>
          <SignUp>Sign Up</SignUp>
        </Link>
        {error ? error : null}
      </LogInContainer>
    </Container>
  );
}
