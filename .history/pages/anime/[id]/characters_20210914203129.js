import styled from "styled-components";
import { useState, useEffect } from "react";

let animeChar = [];

export async function getServerSideProps(context) {
  const characters = await fetch(
    `https://kitsu.io/api/edge/anime/${context.query.id}/characters?page%5Blimit%5D=10&page%5Boffset%5D=0`
  )
    .then((r) => r.json())
    .then((r) => r.data);
  return {
    props: { characters },
  };
}

export function getChars(props, arr) {
  props.characters.forEach((chars) => {
    fetch(chars.relationships.character.links.related)
      .then((r) => r.json())
      .then((r) => arr.push(r.data));
  });
}

export default function Characters(props) {
  //   const [animeID, setAnimeID] = useState(queryID);
  useEffect(() => {
    return () => {
      getChars(props, animeChar);
    };
  }, []);
  console.log(animeChar);
  return <div>hello</div>;
}
