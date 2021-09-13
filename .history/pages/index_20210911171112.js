import styled from "styled-components";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Trending from "../components/Trending";
import HighestRated from "../components/MostPopular";
import TopAiring from "../components/TopAiring";
import MostPopular from "../components/HighestRated";

const Container = styled.div`
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  text-align: left;
  position: relative;
  width: 1100px;
  height: 100%;
  background-color: rgb(32, 40, 50);
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <NavBar />
      <Trending />
      <HighestRated />
      <TopAiring />
      <MostPopular />
    </Container>
  );
}
