import React from "react";
import styled from "styled-components";

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

const Container = styled.div`
  width: 100%;
`;

function SeasonalAnime() {
  return <div></div>;
}

export default SeasonalAnime;
