import styled from "styled-components";
import NavBar from "./components/NavBar";

const Container = styled.div``;

//Fetching Anime API Data through nextJS function getStaticProps
export const getStaticProps = async () => {
  //we can use await here because it is an asynchronous function
  const res = await fetch("https://kitsu.io/api/edge");

  //turning the response into a json object
  const data = await res.json();
};

export default function Home() {
  return (
    <Container>
      <NavBar />
    </Container>
  );
}
