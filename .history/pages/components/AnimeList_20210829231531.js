import styled from "styled-components";

function AnimeList(props) {
  for (const [key, value] of Object.entries(props)) {
    console.log(`${key}: ${value}`);
  }

  return <div>Hello</div>;
}

export default AnimeList;
