import styled from "styled-components";

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

const GetPosters = (props) => {
  console.log(props);

  return (
    <AnimePosterDiv>
      {/* <Poster src={animeArt} />
        <AnimeTitleName>{animeTitle} </AnimeTitleName> */}
    </AnimePosterDiv>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: 50%;
`;

function AnimeList(props) {
  return (
    <Container>
      <GetPosters>{props}</GetPosters>
    </Container>
  );
}

export default AnimeList;

//I am trying to loop through props and for every child element in props, return/render the function DisplayAnimePosters
