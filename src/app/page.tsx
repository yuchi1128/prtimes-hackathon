import CardList from "@/components/elements/CardList";
import { getAllData } from "@/actions/post";

export default async function Home() {
  const bbData = await getAllData();
  return (
    <main>
      <CardList bbData={bbData} />
    </main>
  );
}
