import styled from "styled-components";

function AnimeList(props) {
  for (const attributeName in props) {
    console.log(typeof props[attributeName]);
  }
  return <div>Hello</div>;
}

export default AnimeList;