import styled from "styled-components";
import NavBar from "./components/NavBar";

const Container = styled.div``;

export const getStaticProps = async () => {
  const res = await fetch("https://kitsu.io/api/edge");
  const data = await res.json();
};

export default function Home() {
  return (
    <Container>
      <NavBar />
    </Container>
  );
}
