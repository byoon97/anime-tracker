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

const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
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

const BubbleTitle = styled.div``;

const Rating = styled.div`
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
              <TooltipBox>Hello</TooltipBox>
            </TooltipCard>
          </AnimePosterDiv>
        );
      })}
    </>
  );
}

export default AnimeList;

//I am trying to loop through props and for every child element in props, return/render the function DisplayAnimePosters
//   <BubbleTitle>
//     {synopsisShow.obj.attributes.canonicalTitle}
//   </BubbleTitle>
//   <Rating>
//     {synopsisShow.obj.attributes.averageRating}{" "}
//     {synopsisShow.obj.attributes.popularityRank}
//   </Rating>
//   <Synopsis>{synopsisShow.obj.attributes.synopsis}</Synopsis>
