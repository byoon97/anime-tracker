import styled from "styled-components";

const Container = styled.div`
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
  justify-content: space-evenly;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0.25rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`;

const Attribute = styled.div`
  color: rgb(70, 162, 159);
  margin-top: 1rem;
`;

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-top: 1px;
`;

const Line = styled.hr`
  color: white;
  margin-left: -100px;
`;

export default function LeftColumn() {
  return (
    <Container>
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
      <Information>
        <Attribute></Attribute>
        Information
        <br />
        {/* Age Rating, AgeRatingGuide, startDate, endDate, episodeCount, status */}
        <Attribute>English:</Attribute>
        <Attribute>Japanese:</Attribute>
        <Attribute>Japanese-Romaji:</Attribute>
        <Attribute>Type:</Attribute>
        <Attribute>Episode count:</Attribute>
        <Attribute>Aired:</Attribute>
        <Attribute>Status:</Attribute>
        <Attribute>Rating:</Attribute>
        <Attribute>Producers:</Attribute>
        <Attribute>Licensors:</Attribute>
        <Attribute>Studios:</Attribute>
      </Information>
      {/* <HorizontalLine /> */}
      <Line />
      <Statistics>
        <Attribute>Popularity Rank:</Attribute>
        <Attribute>Rating Rank:</Attribute>
        <Attribute>Users Favorited:</Attribute>
      </Statistics>
    </Container>
  );
}
