import { useRouter } from "next/router";
import useSWR from "swr";

function AnimePage() {
  const router = useRouter();
  sessionStorage.setItem("id", router.query.id);
  let data = sessionStorage.getItem("id");
  console.log(data);
  // let URL = "https://kitsu.io/api/edge/anime/" + id;
  // const fetcher = (URL) => fetch(URL).then((res) => res.json());
  // const { data, error } = useSWR(URL, fetcher);
  // if (error) return <div>Failed to load...</div>;
  // if (!data) return <div></div>;
  return <div>hello</div>;
}

export default AnimePage;
