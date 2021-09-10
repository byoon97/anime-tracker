import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://kitsu.io/api/edge/anime");
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

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = fetch("https://kitsu.io/api/edge/anime" + id);
  const data = await res.json();
};

function AnimePage() {
  return <div>hello</div>;
}

export default AnimePage;
