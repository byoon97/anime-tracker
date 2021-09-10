import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (URL) => fetch(URL).then((res) => res.json());
let URL =
  "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&sort=-average_rating";

function AnimePage() {
  const router = useRouter();
  const { data } = useSWR(URL, fetcher);
  console.log(router.query);
  return <div>hello</div>;
}

export default AnimePage;
