import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CharacterName = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(102, 252, 241);
  padding-top: 0.5rem;
`;

const DescriptionToolTip = styled.div``;

export default function CharacterList({ props }) {
  console.log("1", props);

  return (
    <Container>
      {props.map((char) => {
        return (
          <CharacterContainer data-tip data-for={char.id} key={char.id}>
            <ReactTooltip id={char.id} place="right" effect="solid">
              <DescriptionToolTip>
                {char.attributes.description}
              </DescriptionToolTip>
            </ReactTooltip>
            <CharacterImage src={char.attributes.image.original} />
            <CharacterName>{char.attributes.canonicalName}</CharacterName>
          </CharacterContainer>
        );
      })}
    </Container>
  );
}
