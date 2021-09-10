import { useRouter } from "next/router";

function AnimePage() {
  const router = useRouter(props);

  console.log(router.query, props);
  return <div>hello</div>;
}

export default AnimePage;
