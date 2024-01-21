import fetchStarWarsData from "@/app/helpers/fetchStarWarsData";
import StarWarsHeader from "@/app/components/StaWarsHeader/StarWarsHeader";
import StarWarsDataGrid from "@/app/components/StatWarsDataGrid/StarWarsDataGrid";
import styles from "./page.module.css";

export interface StaticDataParams {
  name: string;
  sorting: string[];
}

export const generateStaticParams = () => {
  const mapping = fetchStarWarsData();
  const staticRoutes: StaticDataParams[] = [];
  const keys = Array.from(mapping.keys());
  keys.forEach((key) => {
    staticRoutes.push({ name: key, sorting: [] });
    const metadata = mapping.get(key);
    metadata?.fields.forEach((field) => {
      staticRoutes.push({ name: key, sorting: [field.key, "asc"] });
      staticRoutes.push({ name: key, sorting: [field.key, "desc"] });
    });
  });

  return staticRoutes;
};

export const getStarWarsData = async (infoAbout: string) => {
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

export default async function starWarsPage({
  params,
}: {
  params: StaticDataParams;
}) {
  const data = await getStarWarsData(params.name);
  if (params.sorting?.length === 2) {
    if (params.sorting[1] === "asc") {
      data.sort((a, b) =>
        a[params.sorting[0]].localeCompare(b[params.sorting[0]])
      );
    } else if (params.sorting[1] === "desc") {
      data.sort((a, b) =>
        b[params.sorting[0]].localeCompare(a[params.sorting[0]])
      );
    }
  }
  const mapping = fetchStarWarsData();
  const metadata = mapping.get(params.name);

  return (
    <div className={styles.container}>
      <StarWarsHeader selectedItem={params.name} sortBy={params.sorting} />
      <StarWarsDataGrid fetchedData={data} metadata={metadata!} />
    </div>
  );
}
