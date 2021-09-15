import styled from "styled-components";
import TitleContainer from "../../components/AnimePageComponents/TitleContainer";
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
    <div>
      <TitleContainer props={anime} />
      <PageContainer>
        <LeftColumn props={anime} />
        <RightColumn props={anime} />
      </PageContainer>
    </div>
  );
}
