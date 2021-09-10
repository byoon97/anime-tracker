import { useRouter } from "next/router";

function AnimePage() {
  const router = useRouter();

  console.log(router.query);
  return <div>hello</div>;
}

export default AnimePage;
