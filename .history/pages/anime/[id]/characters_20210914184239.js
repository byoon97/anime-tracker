import styled from "styled-components";

let charArr = [];

export async function getServerSideProps(context) {
  const characters = await fetch(
    `https://kitsu.io/api/edge/castings?filter%5Bmedia_id%5D=${context.query.id}&filter%5Bmedia_type%5D=Anime&filter%5Bis_character%5D=true&filter%5Blanguage%5D=Japanese&include=character&page%5Blimit%5D=4&sort=-featured`
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

export default function Characters() {
  getChars(props, charArr);
  console.log(charArr);
  return <div>hello</div>;
}
