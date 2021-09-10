import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch();
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

function AnimePage() {
  return <div>hello</div>;
}

export default AnimePage;
