// import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://kitsu.io/api/edge/anime");
  const data = await res.json();

  const paths = data.data.map((anime) => {
    return {
      params: { title: anime.attributes.canonicalTitle },
    };
  });

  return {
    paths,
  };
};

export const getStaticProps = async (context) => {
  console.log(context.params);
  const title = context.params.attributes.canonicalTitle;
  const res = await fetch("https://kitsu.io/api/edge/anime/" + title);
  const data = await res.json();

  return {
    props: { anime: data },
  };
};

// export const getServerSideProps = async (context) => {
//     console.log(context.query)
//     // returns { id: episode.itunes.episode, title: episode.title}

//     //you can make DB queries using the data in context.query
//     return {
//         props: {
//            title: context.query.id //pass it to the page props
//         }
//     }
// }

function AnimePage({ anime }) {
  console.log(anime);
  return <div>hello</div>;
}

export default AnimePage;
