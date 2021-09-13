import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const animeFetcher = (id) =>
  fetch(`https://kitsu.io/api/edge/anime/${id}`)
    .then((r) => r.json())
    .then((r) => r.data);

function AnimePage(props) {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(id, animeFetcher);
  console.log(data);
  return <div>hello</div>;
}

// export async function getServerSideProps(context) {
//   const anime = await fetch(
//     "https://kitsu.io/api/edge/anime/" + context.query.id
//   )
//     .then((r) => r.json())
//     .then((r) => r.data);
//   return {
//     props: { anime },
//   };
// }

export default AnimePage;
