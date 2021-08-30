import styled from "styled-components";

function getAnimeCoverArt() {
  for (const attributeName in props) {
    let animeTitle = props[attributeName].attributes.canonicalTitle;
    let animeArt = props[attributeName].attributes.posterImage.original;

    const AnimePoster = styled.figure`
      background-image: url(animeArt);
    `;
  }
}

function AnimeList(props) {
  return <div>Hello</div>;
}

export default AnimeList;
