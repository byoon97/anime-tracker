import styled from "styled-components";

const getAnimeCoverPoster = function() {
  for (const attributeName in props) {
    let animeTitle = props[attributeName].attributes.canonicalTitle;
    let animeArt = props[attributeName].attributes.posterImage.original;

    return (
        const AnimePoster = styled.figure`
      background-image: url(animeArt);
    `
    )
  }
}

function AnimeList(props) {
    getAnimeCoverArt(props)
  return <AnimePoster>Hello</AnimePoster>;
}

export default AnimeList;
