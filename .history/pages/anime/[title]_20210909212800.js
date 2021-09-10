import { useRouter } from "next/router";

function AnimePage(props) {
  const router = useRouter();

  console.log(router.query, props);
  return <div>hello</div>;
}

export default AnimePage;
