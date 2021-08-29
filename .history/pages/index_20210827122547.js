import styled from "styled-components";
import NavBar from "./components/NavBar";

const Container = styled.div``;

//Fetching Anime API Data through nextJS function getStaticProps

export const getStaticProps = async () => {
  const res = await fetch("https://kitsu.io/api/edge/anime");
  const anime = await res.json();

  const paths = anime.data.map((show) => ({
    params: { id: show.id },
  }));

  return { paths, fallback: true };
};

//we can destructure our props into { anime }
export default function Home({ anime }) {
  return (
    <Container>
      <NavBar />
    </Container>
  );
}
