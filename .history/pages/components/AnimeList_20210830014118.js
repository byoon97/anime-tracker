import styled from "styled-components";

const DisplayAnimePosters = (props) => {
  for (const attributeName in props) {
    animeTitle = props[attributeName].attributes.canonicalTitle;
    animeArt = props[attributeName].attributes.posterImage.original;
  }
  const Container = styled.figure`
    background-image: url(animeArt);
  `;
};

function AnimeList(props) {
  getAnimeCoverPoster(props);
  return <DisplayAnimePosters>Hello</DisplayAnimePosters>;
}

export default AnimeList;
