import React from "react";
import styled from "styled-components";
import useSWR from "swr";
import AnimeList from "./AnimeList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Make seasonal anime dynamic by adding dates
//implement slideshow of animes so users can scroll through them in one section
//add a view more link that links to a page that shows all the seasonal anime, and all previous season animes

let URL = "https://kitsu.io/api/edge/trending/anime/?filter%5Bseason%5D=summer";

const Container = styled.div`
  width: 100%;
  height: 13rem;
  background-color: rgb(70, 162, 159);
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  margin-top: 8rem;
`;

const PosterList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const fetcher = (URL) => fetch(URL).then((res) => res.json());

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

function SeasonalAnime() {
  const { data, error } = useSWR(URL, fetcher);
  if (error) return <div>Failed to load...</div>;
  if (!data) return <div>Loading...</div>;
  const animes = data.data;

  return (
    <Container>
      <Title>Summer 2021 Anime</Title>
      <PosterList>
        <Slider {...settings}>
          <AnimeList animes={animes} />
        </Slider>
      </PosterList>
    </Container>
  );
}

export default SeasonalAnime;
