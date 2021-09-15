import styled from "styled-components";
import { useState } from "react";

let queryID;

export async function getServerSideProps(context) {
  queryID = context.query.id;
  const characters = await fetch(
    `https://kitsu.io/api/edge/anime/${context.query.id}/characters?page%5Blimit%5D=10&page%5Boffset%5D=0`
  )
    .then((r) => r.json())
    .then((r) => r.data);
  return {
    props: { characters },
  };
}

// export function getChars(props, arr) {
//   props.characters.forEach((chars) => {
//     fetch(chars.relationships.character.links.related)
//       .then((r) => r.json())
//       .then((r) => arr.push(r.data));
//   });
// }

export default function Characters(props, queryID) {
  const [animeID, setAnimeID] = useState(queryID);
  console.log(animeID);
  //   console.log(props.characters[0]);
  return <div>hello</div>;
}
