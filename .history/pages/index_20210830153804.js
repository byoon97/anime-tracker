import styled from "styled-components";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SeasonalAnime from "./components/SeasonalAnime";
import TrendingAnime from "./components/TrendingAnime";

const Container = styled.div`
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  text-align: left;
  position: relative;
  width: 1060px;
  height: 100vh;
  background-color: rgb(32, 40, 50);
`;

//we can destructure our props into { anime }
export default function Home() {
  return (
    <Container>
      <Header />
      <NavBar />
      <SeasonalAnime />
      <TrendingAnime />
    </Container>
  );
}
