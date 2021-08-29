import styled from "styled-components";
import NavBar from "./components/NavBar";

const Container = styled.div``;

//Fetching Anime API Data through nextJS function getStaticProps

// export const getStaticProps = async () => {
//   const res = await fetch("https://kitsu.io/api/edge/anime");
//   const anime = await res.json();

//   //creating a series of calls to the API requesting the next page to get the data we need to render ->
//   //the static pages we need to build ahead of time
//   //static generation is the process of compiling and rendering a website or app at build time ->
//   //such as HTML, JS, and CSS files
//   const paths = anime.data.map((show) => ({
//     params: { id: show.id },
//   }));

//   return { paths, fallback: true };
// };

export const getStaticPaths = async () => {
  const res = await fetch("https://kitsu.io/api/edge/anime");
  const anime = await res.json();

  // you can make a series of calls to the API requesting
  // the next page to get the desired amount of data (100 or 1000)
  // how many ever static pages you want to build ahead of time

  const paths = anime.data.map((show) => ({
    params: { id: show.id },
  }));

  // this will generate 10(resource limit if you make 1 call because your API returns only 10 resources)
  // pages ahead of time  and rest of the pages will be fallback
  return { paths, fallback: true };
};

//we can destructure our props into { anime }
export default function Home({ paths }) {
  console.log(paths);
  return (
    <Container>
      <NavBar />
    </Container>
  );
}
