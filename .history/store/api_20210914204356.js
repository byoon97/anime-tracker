const URLS = {
  highestRated:
    "https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating",
  mostPopular:
    "https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-user_count",
  topAiring:
    "https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%10Blimit%5D=5&sort=-userCount",
  trending: "https://kitsu.io/api/edge/trending/anime?page%5Blimit%5D=5",
};
export async function loadAnimes(key) {
  const url = URLS[key];

  const animes = await fetch(url)
    .then((r) => r.json())
    .then((r) => r.data);

  return animes;
}
