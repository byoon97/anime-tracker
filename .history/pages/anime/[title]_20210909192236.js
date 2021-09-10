// import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://kitsu.io/api/edge/anime");
  const data = await res.json().data;

  const paths = data.map((anime) => {
    return {
      params: { title: anime.attributes.canonicalTitle },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log(context.params);
  //   const title = context.params.attributes.canonicalTitle;
  //   const res = await fetch("https://kitsu.io/api/edge/anime/" + title);
  //   const data = await res.json();

  //   return {
  //     props: { anime: data },
  //   };
};

function AnimePage({ anime }) {
  console.log(anime);
  return <div>hello</div>;
}

export default AnimePage;
