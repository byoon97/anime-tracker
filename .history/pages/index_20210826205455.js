import styled from "styled-components";
import NavBar from "./components/NavBar";

const Container = styled.div``;

export default function Home() {
  return (
    <Container>
      <NavBar />
      <h1>Hello World</h1>
    </Container>
  );
}
