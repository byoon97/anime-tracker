import styled from "styled-components";

export async function getServerSideProps(context) {
  const characters = await fetch(
    `https://kitsu.io/api/edge/castings?filter%5Bmedia_id%5D=${context.query.id}&filter%5Bmedia_type%5D=anime&filter%5Bis_character%5D=true&filter%5Blanguage%5D=Japanese&include=character&page%5Blimit%5D=4&sort=-featured`
  )
    .then((r) => r.json())
    .then((r) => r.data);
  return {
    props: { characters },
  };
}

export default function Characters(props) {
  console.log(props);
  return <div>hello</div>;
}
