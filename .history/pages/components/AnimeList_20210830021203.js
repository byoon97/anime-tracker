import styled from "styled-components";

// const DisplayAnimePosters = (props) => {
//   let animes = props.children;
//   for (const attributeName in animes) {
//     let animeTitle = animes[attributeName].attributes.canonicalTitle;
//     let animeArt = animes[attributeName].attributes.posterImage.original;
//     console.log("line11", animeTitle, animeArt);
//     const AnimeContainer = styled.figure`
//       background-image: url(animeArt);
//     `;
//     return <AnimeContainer />;
//   }
// };

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
      {(props) => {
        for (const attribute in props) {
          let animeTitle = animes[attributeName].attributes.canonicalTitle;
          let animeArt = animes[attributeName].attributes.posterImage.original;

          const AnimePosterDiv = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `;

          const Poster = styled.img`
            width: 100%;
            height: 100%;
          `;

          const AnimeTitleName = styled.h5``;

          return (
            <AnimePosterDiv>
              <Poster src={animeArt}>
                <AnimeTitleName>{animeTitle}</AnimeTitleName>
              </Poster>
            </AnimePosterDiv>
          );
        }
      }}
    </Container>
  );
}

export default AnimeList;

//I am trying to loop through props and for every child element in props, return/render the function DisplayAnimePosters
