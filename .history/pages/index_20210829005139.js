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
  height: 100vh;
  background-color: rgb(32, 40, 50);
`;

const BgImage = styled.img`
  z-index: -1;
  position: absolute;
`;

//we can destructure our props into { anime }
export default function Home() {
  return (
    <Container>
      <BgImage src="/kaisen.jpeg" />
      <Header />
      <NavBar />
      <SeasonalAnime />
    </Container>
  );
}
