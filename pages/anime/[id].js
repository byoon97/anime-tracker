import styled from "styled-components";
import LeftColumn from "../../components/AnimePageComponents/LeftColumn";
import RightColumn from "../../components/AnimePageComponents/RightColumn";

//To Do List..
//add lines seperating components
//create links for Episodes, Characters
//Clean up Page

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
  width: 1100px;
  height: 100%;
  background-color: rgb(32, 40, 50);
`;

const TitleDiv = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: rgb(70, 162, 159);
  padding-top: 0.5rem;
  flex-direction: row;
  align-items: center;
`;

const JpTitle = styled.div`
  padding-bottom: 0.5;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

export default function AnimePage(props) {
  const { anime } = props;
  // console.log(anime);
  return (
    <Container>
      <TitleDiv>
        {anime.attributes.canonicalTitle}...
        <JpTitle>{anime.attributes.titles.ja_jp}</JpTitle>
      </TitleDiv>
      <TitleDiv>{anime.attributes.titles.en}</TitleDiv>
      <PageContainer>
        <LeftColumn props={anime} />
        <RightColumn props={anime} />
      </PageContainer>
    </Container>
  );
}
