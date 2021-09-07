import styled from "styled-components";
import React, { useState } from "react";

const AnimePosterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const AnimeTitleName = styled.h5``;

const TooltipBox = styled.div`
   position: "relative",
  display: "inline-block",
  borderBottom: "1px dotted black",
  ":hover span": {
    visibility: "visible"
  }
`;

const TooltipCard = styled.div`
  position: relative;
  & ${AnimePosterDiv}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 230px;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`;

const ToolTipTitle = styled.div``;

const ToolTipRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Synopsis = styled.div``;

function AnimeList(props) {
  const [synopsisShow, setSynopsisShow] = useState({ id: null, obj: null });
  let animes = props.animes;

  return (
    <>
      {animes.map((anime) => {
        return (
          <AnimePosterDiv key={anime.id}>
            <TooltipCard>
              <Poster
                src={anime.attributes.posterImage.medium}
                onMouseEnter={() =>
                  setSynopsisShow({ id: anime.id, obj: anime })
                }
                onMouseLeave={() => setSynopsisShow({ id: null, obj: null })}
              />

              <AnimeTitleName>{anime.attributes.canonicalTitle}</AnimeTitleName>
              {synopsisShow.id !== null ? (
                <TooltipBox>
                  <ToolTipTitle>
                    {synopsisShow.obj.attributes.canonicalTitle}
                  </ToolTipTitle>
                  <ToolTipRating>
                    {synopsisShow.obj.attributes.averageRating}{" "}
                    {synopsisShow.obj.attributes.popularityRank}
                  </ToolTipRating>
                  <Synopsis>Synopsis goes here</Synopsis>
                </TooltipBox>
              ) : null}
            </TooltipCard>
          </AnimePosterDiv>
        );
      })}
    </>
  );
}

export default AnimeList;
