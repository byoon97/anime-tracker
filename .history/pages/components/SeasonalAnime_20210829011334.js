import React from "react";
import styled from "styled-components";
import useSWR from "swr";
import AnimeList from "./AnimeList";

//Make seasonal anime dynamic by adding dates
//implement slideshow of animes so users can scroll through them in one section
//add a view more link that links to a page that shows all the seasonal anime, and all previous season animes

let URL = "https://kitsu.io/api/edge/anime/?filter%5Bseason%5D=summer";

const Container = styled.div`
  width: 100%;
  height: 10rem;
  background-color: rgb(70, 162, 159);
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  margin-bottom: 8rem;
`;

const SeasonContainer = styled.div``;

const fetcher = (URL) => fetch(URL).then((res) => res.json());

function SeasonalAnime() {
  const { data, error } = useSWR(URL, fetcher);
  if (error) return <div>Failed to load...</div>;
  if (!data) return <div>Loading...</div>;
  const animes = data.data;

  return (
    <Container>
      <Title>Summer 2021 Anime</Title>
      <AnimeList {...animes} />
    </Container>
  );
}

export default SeasonalAnime;
