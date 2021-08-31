import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AnimePosterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

const AnimeTitleName = styled.h5``;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

function AnimeList(props) {
  let animes = props.animes;

  return (
    <>
      <Slider {...settings}>
        {animes.map((anime) => {
          return (
            <AnimePosterDiv key={anime.id}>
              <Poster src={anime.attributes.posterImage.medium} />
              <AnimeTitleName>{anime.attributes.canonicalTitle}</AnimeTitleName>
            </AnimePosterDiv>
          );
        })}
      </Slider>
    </>
  );
}

export default AnimeList;

//I am trying to loop through props and for every child element in props, return/render the function DisplayAnimePosters