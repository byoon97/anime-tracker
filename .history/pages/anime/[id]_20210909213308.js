import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (URL) => fetch(URL).then((res) => res.json());
let URL =
  "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&sort=-average_rating";

function AnimePage() {
  const router = useRouter();
  // const { data } = useSWR(URL, fetcher);
  // if (error) return <div>Failed to load...</div>;
  // if (!data) return <div></div>;
  console.log(router.query.id);
  return <div>hello</div>;
}

export default AnimePage;
