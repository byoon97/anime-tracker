import { useState } from "react";
import styled from "styled-components";
import TitleContainer from "./TitleContainer";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import Links from "./Links";
import CharacterList from "./CharacterList";
import EpisodeList from "./EpisodeList";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

const RightContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem;
`;

export default function MainLayout(props) {
  const [currentLink, setCurrentLink] = useState("details");

  //Creating a callback function to change currentLink

  const getCurrentLink = (linkType) => {
    setCurrentLink(linkType);
    console.log(linkType);
  };

  const anime = props.props;
  const charList = props.character;

  return (
    <div>
      <TitleContainer props={anime} />
      <PageContainer>
        <LeftColumn props={anime} />
        <RightContainer>
          <Links props={anime} handleClick={getCurrentLink} />
          {currentLink === "details" ? <RightColumn props={anime} /> : null}
          {currentLink === "characters" ? (
            <CharacterList props={charList} />
          ) : null}
          {currentLink === "episodes" ? <EpisodeList /> : null}
        </RightContainer>
      </PageContainer>
    </div>
  );
}
