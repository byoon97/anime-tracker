import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5rem;
  background-color: red;
  color: white;
`;

export const getStaticProps = async () => {
  //we can use await here because it is an asynchronous function
  const res = await fetch(
    "https://kitsu.io/api/edge/anime/?filter%5Bseason%5D=summer"
  );

  //turning the response into a json object
  const anime = await res.json();

  return {
    props: { anime: anime.data },
  };
};

function SeasonalAnime({ anime }) {
  console.log(anime);
  return <Container>Hello</Container>;
}

export default SeasonalAnime;
