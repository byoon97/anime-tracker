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
  const res = await fetch(
    "https://kitsu.io/api/edge/anime/?filter%5Bseason%5D=summer"
  );

  //turning the response into a json object
  const seasonal = await res.json();

  return {
    props: { seasonal: seasonal.data },
  };
};

//we can destructure our props into { anime }
export default function Home({ seasonal }) {
  console.log(seasonal);
  return (
    <Container>
      <Header />
      <NavBar />
      <SeasonalAnime />
    </Container>
  );
}
