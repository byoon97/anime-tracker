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

const AnimeBubble = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  display: block;
  position: absolute;
  overflow: hidden;
  background-color: white;
  color: black;
  width: 10rem;
  height: 10rem;
`;

const BubbleTitle = styled.div``;

const Rating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Synopsis = styled.div``;

const ToolTip = styled.div`
  position: relative;
  display: inline-block;
  border: 1rem;
`;

function AnimeList(props) {
  const [synopsisShow, setSynopsisShow] = useState({ id: null, obj: null });
  let animes = props.animes;

  return (
    <>
      {animes.map((anime) => {
        return (
          <AnimePosterDiv key={anime.id}>
            <Poster
              src={anime.attributes.posterImage.medium}
              onMouseEnter={() => setSynopsisShow({ id: anime.id, obj: anime })}
              onMouseLeave={() => setSynopsisShow({ id: null, obj: null })}
            />

            <AnimeTitleName>{anime.attributes.canonicalTitle}</AnimeTitleName>
          </AnimePosterDiv>
        );
      })}
      {console.log(synopsisShow.obj)}
      {synopsisShow.obj !== null ? (
        <AnimeBubble>
          <BubbleTitle>
            {synopsisShow.obj.attributes.canonicalTitle}
          </BubbleTitle>
          <Rating>
            {synopsisShow.obj.attributes.averageRating}{" "}
            {synopsisShow.obj.attributes.popularityRank}
          </Rating>
          <Synopsis>{synopsisShow.obj.attributes.synopsis}</Synopsis>
        </AnimeBubble>
      ) : null}
    </>
  );
}

export default AnimeList;

//I am trying to loop through props and for every child element in props, return/render the function DisplayAnimePosters
