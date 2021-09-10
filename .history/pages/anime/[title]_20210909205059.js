// export const getStaticPaths = async () => {
//   const res = await fetch("https://kitsu.io/api/edge/anime");
//   const data = await res.json();

//   const paths = data.data.map((anime) => {
//     return {
//       params: { title: anime.attributes.canonicalTitle },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async (context) => {
//   console.log(context.params);
//   //   const title = context.params.attributes.canonicalTitle;
//   //   const res = await fetch("https://kitsu.io/api/edge/anime/" + title);
//   //   const data = await res.json();

//   //   return {
//   //     props: { anime: data },
//   //   };
// };

function AnimePage(props) {
  console.log(props);
  return <div>hello</div>;
}

export default AnimePage;
