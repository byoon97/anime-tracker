import styled from "styled-components";

let animeTitle;
let animeArt;
let AnimePoster;

const getAnimeCoverPoster = function () {
  for (const attributeName in props) {
    animeTitle = props[attributeName].attributes.canonicalTitle;
    animeArt = props[attributeName].attributes.posterImage.original;

    let animePoster = styled.figure`
      background-image: url(animeArt);
    `;
  }
};

function AnimeList(props) {
  getAnimeCoverArt(props);
  return <AnimePoster>Hello</AnimePoster>;
}

export default AnimeList;
