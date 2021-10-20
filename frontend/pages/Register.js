import React, { useState } from "react";
import styled from "styled-components";
import Router from "next/router";
import { setCookie } from "nookies";

//ADD ERROR HANDLING

//CSS

const Container = styled.div`
  margin: auto;
  padding-top: 2rem;
  background-color: rgb(32, 40, 50);
  height: 1060px;
  width: 654.5px;
`;

const RegisterContainer = styled.div`
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

const SignUp = styled.button``;

export default function Register(props) {
  console.log("login", props);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  //Log In logic
  async function handleRegister() {
    const registerInfo = {
      username: username,
      email: email,
      password: password,
    };

    const register = await fetch(`http://localhost:1337/auth/local/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInfo),
    });

    const registerResponse = await register.json();

    if (registerResponse.error) {
      setError(registerResponse.message[0].messages[0].message);
    } else {
      setCookie(null, "jwt", registerResponse.jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      // props.handleClick(true);

      Router.push("/");
    }
  }

  return (
    <Container>
      <RegisterContainer>
        <InputFields>
          Username{" "}
          <Input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
          />
        </InputFields>
        <InputFields>
          Email{" "}
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
        </InputFields>
        <InputFields>
          Password{" "}
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
        </InputFields>
        <SignUp onClick={() => handleRegister()}>Register</SignUp>
        {error ? error : null}
      </RegisterContainer>
    </Container>
  );
}
