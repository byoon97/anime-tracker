import { useRouter } from "next/router";
import useSWR from "swr";

function AnimePage(props) {
  const router = useRouter();
  const { id } = router.query;
  const { anime } = props;
  console.log(anime);
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
