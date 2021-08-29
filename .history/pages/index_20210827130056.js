import styled from "styled-components";
import NavBar from "./components/NavBar";

const Container = styled.div`
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: left;
`;

//Fetching Anime API Data through nextJS function getStaticProps

export const getStaticProps = async () => {
  //we can use await here because it is an asynchronous function
  const res = await fetch("https://kitsu.io/api/edge/trending/anime");

  //turning the response into a json object
  const anime = await res.json();

  return {
    props: { anime: anime.data },
  };
};

//we can destructure our props into { anime }
export default function Home({ anime }) {
  console.log(anime);
  return (
    <Container>
      <NavBar />
    </Container>
  );
}
