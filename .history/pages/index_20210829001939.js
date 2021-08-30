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

//we can destructure our props into { anime }
export default function Home() {
  return (
    <Container>
      <Header />
      <NavBar />
      <SeasonalAnime />
    </Container>
  );
}
