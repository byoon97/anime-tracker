import styled from "styled-components";
import { useState, useEffect } from "react";
import MainLayout from "../../../components/AnimePageComponents/MainLayout";

let charList = [];

// Fetching Anime and Character Data

export async function getServerSideProps(context) {
  const characters = await fetch(
    `https://kitsu.io/api/edge/anime/${context.query.id}/characters?page%5Blimit%5D=10&page%5Boffset%5D=0`
  )
    .then((r) => r.json())
    .then((r) => r.data);

  const anime = await fetch(
    "https://kitsu.io/api/edge/anime/" + context.query.id
  )
    .then((r) => r.json())
    .then((r) => r.data);

  return {
    props: { anime, characters },
  };
}

// Function to loop through json data and fetch individual character data

export function getChars(props, arr) {
  props.characters.forEach((chars) => {
    fetch(chars.relationships.character.links.related)
      .then((r) => r.json())
      .then((r) => arr.push(r.data));
  });
}

// CSS -------------------------------

export default function Characters(props) {
  useEffect(() => {
    charList.length = 0;
    getChars(props, charList);
  });

  return <MainLayout props={props.anime} character={charList}></MainLayout>;
}
