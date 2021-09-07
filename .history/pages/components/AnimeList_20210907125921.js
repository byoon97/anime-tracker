import styled from "styled-components";
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

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

const ToolTip = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToolTipTitle = styled.div``;

const ToolTipPercent = styled.div``;

const ToolTipRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Synopsis = styled.div``;

function AnimeList(props) {
  let animes = props.animes;

  return (
    <>
      {animes.map((anime) => {
        console.log(animes);
        return (
          <AnimePosterDiv key={anime.id} data-tip data-for={anime.id}>
            <ReactTooltip id={anime.id} place="right" effect="solid">
              <ToolTip>
                <ToolTipTitle>{anime.attributes.canonicalTitle}</ToolTipTitle>
                <ToolTipPercent>
                  %{anime.attributes.averageRating}
                </ToolTipPercent>
                <ToolTipRating>
                  #{anime.attributes.popularityRank} Most Popular #
                  {anime.attributes.ratingRank} Highest Rated
                </ToolTipRating>
                <Synopsis>{anime.attributes.synopsis}</Synopsis>
              </ToolTip>
            </ReactTooltip>
            <Poster src={anime.attributes.posterImage.medium} />
            <AnimeTitleName>{anime.attributes.canonicalTitle}</AnimeTitleName>
          </AnimePosterDiv>
        );
      })}
    </>
  );
}

export default AnimeList;
