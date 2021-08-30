import styled from "styled-components";

function AnimeList(props) {
  for (const attributeName in props) {
    console.log(props[attributeName].attributes.canonicalTitle);
  }
  //   console.log(props);
  return <div>Hello</div>;
}

export default AnimeList;
