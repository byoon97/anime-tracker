import { useRouter } from "next/router";
import useSWR from "swr";

function AnimePage(props) {
  const { anime } = props;
  console.log(anime);
  return <div>hello</div>;
}

export async function getServerSideProps() {
  const anime = await fetch("")
    .then((r) => r.json())
    .then((r) => r.data);
  return {
    props: { anime },
  };
}

export default AnimePage;
