import { TypeMetadata } from "../types/TypeMetadata";

export default function getStarWarsMetadata(): Map<string, TypeMetadata> {
  const films: TypeMetadata = {
    fields: [
      { key: "title", displayName: "Title", isSortable: true },
      { key: "episode_id", displayName: "Episode Number" },
      { key: "director", displayName: "Director" },
      { key: "producer", displayName: "Producer" },
      { key: "release_date", displayName: "Release Date" },
      { key: "opening_crawl", displayName: "Opening Crawl" },
    ],
  };

  const vehiclesAndStarShips: TypeMetadata = {
    fields: [
      { key: "name", displayName: "Name", isSortable: true },
      { key: "model", displayName: "Model" },
      { key: "manufacturer", displayName: "Manufacturer" },
      { key: "cost_in_credits", displayName: "Cost in credits" },
      { key: "length", displayName: "Length" },
      { key: "crew", displayName: "Crew" },
      { key: "passengers", displayName: "Passengers" },
      { key: "cargo_capacity", displayName: "Cargo Capacity" },
    ],
  };
  const mapping = new Map<string, TypeMetadata>();
  mapping.set("vehicles", vehiclesAndStarShips);
  mapping.set("starships", vehiclesAndStarShips);
  mapping.set("films", films);
  return mapping;
}
