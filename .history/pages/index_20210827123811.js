import styled from "styled-components";
import NavBar from "./components/NavBar";

const Container = styled.div``;

//Fetching Anime API Data through nextJS function getStaticProps

export const getStaticProps = async ({ params }) => {
  const [anime, animeCharacters, categories, streaming, reviews] =
    await Promise.all([
      fetch(`https://kitsu.io/api/edge/anime/${params.id}`),
      fetch(`https://kitsu.io/api/edge/anime/${params.id}/characters`),
      fetch(`https://kitsu.io/api/edge/anime/${params.id}/categories`),
      fetch(`https://kitsu.io/api/edge/anime/${params.id}/streaming-links`),
      fetch(`https://kitsu.io/api/edge/anime/${params.id}/reviews`),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .catch((e) => console.log(e, "There was an error retrieving the data"));

  return { props: { anime, animeCharacters, categories, streaming, reviews } };
};

export default function Home({ props }) {
  console.log(props);
  return (
    <Container>
      <NavBar />
    </Container>
  );
}
