import styled from "styled-components";

const DisplayAnimePosters = (props) => {
  console.log(props);
  const Container = styled.figure`
    background-image: url(animeArt);
  `;

  return <Container></Container>;
};

function AnimeList(props) {
  console.log(props);
  return <DisplayAnimePosters>Inside Grid</DisplayAnimePosters>;
}

export default AnimeList;
