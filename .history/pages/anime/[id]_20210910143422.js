import { useRouter } from "next/router";
import useSWR from "swr";
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

export default function AnimePage(props) {
  const { anime } = props;
  console.log(anime);
  return <div>hello</div>;
}
