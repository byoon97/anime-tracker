import styled from "styled-components";

const DisplayAnimePosters = (props) => {
  let animes = props.children;
  for (const attributeName in animes) {
    let animeTitle = animes[attributeName].attributes.canonicalTitle;
    let animeArt = animes[attributeName].attributes.posterImage.original;
    console.log("line11", animeTitle, animeArt);
    const AnimeContainer = styled.figure`
      background-image: url(animeArt);
    `;
    return <AnimeContainer></AnimeContainer>;
  }
};

const Container = styled.div`
  display: flex;
`;

function AnimeList(props) {
  //Below I am calling the function DisplayAnimePosters which should render all the poster art and log props
  //Whatever I put between the tags will be passed as props to the function
  return <DisplayAnimePosters>{props}</DisplayAnimePosters>;
}

export default AnimeList;
