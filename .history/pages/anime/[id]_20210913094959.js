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
const RightColumn = styled.div`
  height: 100%;
  width: 65%;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 35%;
  height: 100%;
`;

const AnimeCover = styled.img`
  height: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const AddToList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ListActionButtons = styled.button`
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  cursor: pointer;
  ${"" /* color: rgb(70, 162, 159); */}
  color: rgb(102, 252, 241);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direciton: row;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const Information = styled.div`
  display: flex;
  flex-direciton: column;
  align-items: flex-start;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  color: rgb(70, 162, 159);
`;

const Statistics = styled.div`
  display: flex;
  flex-direciton: column;
  align-items: flex-start;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const HorizontalLine = styled.hr`
  border-top: 2px rgb(70, 162, 159);
`;

export default function AnimePage(props) {
  const { anime } = props;
  console.log(anime);
  return (
    <Container>
      <Header />
      <NavBar />
      <TitleDiv>
        {anime.attributes.canonicalTitle}...
        <JpTitle>{anime.attributes.titles.ja_jp}</JpTitle>
      </TitleDiv>
      <TitleDiv>{anime.attributes.titles.en}</TitleDiv>
      <PageContainer>
        <LeftColumn>
          <AnimeCover src={anime.attributes.posterImage.small} />
          <AddToList>
            <ButtonContainer>
              <ListActionButtons>Add to Watch List</ListActionButtons>
              <ListActionButtons>Add to Watched List</ListActionButtons>
            </ButtonContainer>
            <ButtonContainer>
              <ListActionButtons>Add to Want to Watch List</ListActionButtons>
              <ListActionButtons>Add to Favorites</ListActionButtons>
            </ButtonContainer>
          </AddToList>
          <Information>Information</Information>
          <HorizontalLine />
          <Statistics>hello</Statistics>
        </LeftColumn>
        <RightColumn></RightColumn>
      </PageContainer>
    </Container>
  );
}
