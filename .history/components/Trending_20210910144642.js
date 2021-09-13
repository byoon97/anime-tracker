import React from "react";
import styled from "styled-components";
import useSWR from "swr";
import AnimeList from "./AnimeList";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

//Make seasonal anime dynamic by adding dates
//implement slideshow of animes so users can scroll through them in one section
//add a view more link that links to a page that shows all the seasonal anime, and all previous season animes

const Container = styled.div`
  width: 100%;
  height: 20rem;
  background-color: rgb(70, 162, 159);
  margin-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3``;

const PosterList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 5,
//   slidesToScroll: 2,
// };

function Trending() {
  return (
    <Container>
      <Title>Top Trending Animes</Title>
      <PosterList>
        <AnimeList list="trending" />
      </PosterList>
    </Container>
  );
}

export default Trending;
