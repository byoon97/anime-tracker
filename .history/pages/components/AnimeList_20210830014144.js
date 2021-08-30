import styled from "styled-components";

const DisplayAnimePosters = (props) => {
  for (const attributeName in props) {
    let animeTitle = props[attributeName].attributes.canonicalTitle;
    let animeArt = props[attributeName].attributes.posterImage.original;
  }
  const Container = styled.figure`
    background-image: url(animeArt);
  `;
};

function AnimeList(props) {
  return <DisplayAnimePosters>Hello</DisplayAnimePosters>;
}

export default AnimeList;
