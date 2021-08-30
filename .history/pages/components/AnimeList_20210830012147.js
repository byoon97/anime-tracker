import styled from "styled-components";

function AnimeList(props) {
  for (const attributeName in props) {
    let animeTitle = props[attributeName].attributes.canonicalTitle;
    let animeArt = props[attributeName].attributes.posterImage.original;
    console.log(animeTitle, animeArt);
  }
  //   console.log(props);
  return <div>Hello</div>;
}

export default AnimeList;
