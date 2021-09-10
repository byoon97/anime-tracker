import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (URL) => fetch(URL).then((res) => res.json());
let URL =
  "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&sort=-average_rating";

function AnimePage() {
  const router = useRouter();
  const { data } = useSWR(URL, fetcher);
  if (error) return <div>Failed to load...</div>;
  if (!data) return <div></div>;
  const id = router.query.id;
  let URL = "https://kitsu.io/api/edge/anime/" + id;
  const fetcher = (URL) => fetch(URL).then((res) => res.json());
  return <div>hello</div>;
}

export default AnimePage;
