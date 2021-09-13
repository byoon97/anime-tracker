import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

export async function getServerSideProps(context) {
  const anime = await fetch(
    "https://kitsu.io/api/edge/anime/" + context.query.id
  )
    .then((r) => r.json())
    .then((r) => r.data);
  return {
    props: { anime },
  };
}

const Container = styled.div`
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  text-align: left;
  position: relative;
  width: 1060px;
  height: 100%;
  background-color: rgb(32, 40, 50);
`;

const TitleDiv = styled.div`
  display: flex;
`;

export default function AnimePage(props) {
  const { anime } = props;
  console.log(anime);
  return (
    <Container>
      <Header />
      <NavBar />
      <TitleDiv>{anime.attributes.canonicalTitle}</TitleDiv>
      <TitleDiv>{anime.attributes.titles.en}</TitleDiv>
      <TitleDiv>{anime.attributes.canonicalTitle}</TitleDiv>
    </Container>
  );
}
