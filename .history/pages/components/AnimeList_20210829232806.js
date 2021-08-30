import styled from "styled-components";

function AnimeList(props) {
  for (const attribute in props) {
    console.log(props[attribute]);
  }
  return <div>Hello</div>;
}

export default AnimeList;
