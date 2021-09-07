import styled from "styled-components";
import React, { useState } from "react";

const AnimePosterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

const AnimeTitleName = styled.h5``;

function AnimeList(props) {
  const [synopsisShow, setSynopsisShow] = useState(false);
  let animes = props.animes;

  return (
    <>
      {animes.map((anime) => {
        return (
          <AnimePosterDiv
            key={anime.id}
            onMouseEnter={() => setSynopsisShow(true)}
            onMouseLeave={() => setSynopsisShow(false)}
          >
            <Poster src={anime.attributes.posterImage.medium} />
            {synopsisShow && <div>{anime.attributes.rating}</div>}
            <AnimeTitleName>{anime.attributes.canonicalTitle}</AnimeTitleName>
          </AnimePosterDiv>
        );
      })}
    </>
  );
}

export default AnimeList;

//I am trying to loop through props and for every child element in props, return/render the function DisplayAnimePosters
