import styled from "styled-components";

let chars = [];

export async function getServerSideProps(context) {
  const anime = await fetch(
    `https://kitsu.io/api/edge/castings?filter%5Bmedia_id%5D=${context.query.id}&filter%5Bmedia_type%5D=Anime&filter%5Bis_character%5D=true&filter%5Blanguage%5D=Japanese&include=character&page%5Blimit%5D=4&sort=-featured`
  )
    .then((r) => r.json())
    .then((r) => r.data);
  return {
    props: { anime },
  };
}

const getChars = function (props) {
  props.forEach((char) => console.log(char));
};

export default function Characters(props) {
  getChars();
  return <div>hello</div>;
}
