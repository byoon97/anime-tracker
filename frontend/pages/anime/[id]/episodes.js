import styled from "styled-components";
import MainLayout from "../../../components/AnimePageComponents/MainLayout";

export async function getServerSideProps(context) {
  const anime = await fetch(
    "https://kitsu.io/api/edge/anime/" + context.query.id
  )
    .then((r) => r.json())
    .then((r) => r.data);
  return {
    props: { anime },
  };
}

export default function Episodes({ anime }) {
  return <MainLayout props={anime}></MainLayout>;
}
