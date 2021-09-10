import { useRouter } from "next/router";

function AnimePage(props) {
  const router = useRouter();

  console.log(router.query);
  return <div>hello</div>;
}

export default AnimePage;
