import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://kitsu.io/api/edge/anime");
  const data = await res.json();
  const animeArr = Object.keys(data);
  console.log(data, animeArr);
  const paths = animeArr.map((anime) => {
    return {
      params: { id: anime.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = fetch("https://kitsu.io/api/edge/anime" + id);
  const data = await res.json();

  return {
    props: { anime: data },
  };
};

function AnimePage({ anime }) {
  console.log(anime);
  return <div>hello</div>;
}

export default AnimePage;
