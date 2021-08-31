import styled from "styled-components";
import Slider from "react-slick";

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

// const GetPosters = (props) => {
//   let animes = props.children.animes;
//   console.log(animes);
//   {
//     animes.map((anime) => (
//       <Poster key={anime.id} coverArt={anime.attributes.posterImage.medium} />
//     ));
//   }
//   return (
//     <AnimePosterDiv>
//       <Poster src={props.coverArt} />
//       {/* <AnimeTitleName>{animeTitle}</AnimeTitleName> */}
//     </AnimePosterDiv>
//   );
// };

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: 50%;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  SlidesToScroll: 1,
};

function AnimeList(props) {
  let animes = props.animes;
  return (
    <Container>
      <Slider {...settings}>
        {" "}
        {animes.map((anime) => {
          return (
            <AnimePosterDiv key={anime.id}>
              <Poster src={anime.attributes.posterImage.medium} />
              <AnimeTitleName>{anime.attributes.canonicalTitle}</AnimeTitleName>
            </AnimePosterDiv>
          );
        })}
      </Slider>
    </Container>
  );
}

export default AnimeList;

//I am trying to loop through props and for every child element in props, return/render the function DisplayAnimePosters
