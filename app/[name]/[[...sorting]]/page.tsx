import getStarWarsMetadata from "@/app/helpers/getStarWarsMetadata";
import StarWarsHeader from "@/app/components/StaWarsHeader/StarWarsHeader";
import StarWarsDataGrid from "@/app/components/StatWarsDataGrid/StarWarsDataGrid";
import styles from "./page.module.css";
import fetchStarWarsData from "@/app/helpers/fetchStarWarsData";

export interface StaticDataParams {
  name: string;
  sorting: string[];
}

export const generateStaticParams = () => {
  const mapping = getStarWarsMetadata();
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

export default async function starWarsPage({
  params,
}: {
  params: StaticDataParams;
}) {
  const data = await fetchStarWarsData(params.name);
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
  const mapping = getStarWarsMetadata();
  const metadata = mapping.get(params.name);

  return (
    <div className={styles.container}>
      <StarWarsHeader selectedItem={params.name} sortBy={params.sorting} />
      <StarWarsDataGrid fetchedData={data} metadata={metadata!} />
    </div>
  );
}
