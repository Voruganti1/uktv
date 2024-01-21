const fetchStarWarsData = async (infoAbout: string) => {
  let res = await fetch("https://swapi.dev/api/" + infoAbout);
  let response = await res.json();
  const data: any[] = response.results;
  while (response.next !== null) {
    res = await fetch(response.next);
    response = await res.json();
    data.push(...response.results);
  }
  return data;
};
export default fetchStarWarsData;
