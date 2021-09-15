import styled from "styled-components";

let charArr = [];

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

// export function getChars(props, arr) {
//   props.characters.forEach((chars) => {
//     fetch(chars.relationships.character.links.related)
//       .then((r) => r.json())
//       .then((r) => arr.push(r.data));
//   });
// }

export default function Characters(props) {
  console.log(props.characters);
  return <div>hello</div>;
}
