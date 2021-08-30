import styled from "styled-components";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SeasonalAnime from "./components/SeasonalAnime";

const Container = styled.div`
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: left;
  width: 1060px;
  height: 100%;
  background-color: rgb(32, 40, 50);
`;

export const getStaticProps = async () => {
  //we can use await here because it is an asynchronous function
  const res = await fetch("https://kitsu.io/api/edge/anime");

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
      <Header />
      <NavBar />
      <SeasonalAnime />
    </Container>
  );
}
