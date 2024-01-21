import StarWarsHeader from "./components/StaWarsHeader/StarWarsHeader";

export default function Home() {
  return (
    <div>
      <StarWarsHeader selectedItem={""} sortBy={[""]} />
    </div>
  );
}
