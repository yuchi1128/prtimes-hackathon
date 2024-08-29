import CardList from "@/components/elements/CardList";
import { getAllData } from "@/actions/post";

export default async function Home() {
  const bbData = await getAllData();

  const testData = ["aaa", "bbb", "ccc", "ddd", "eee", "fff"]

  return (
    <main>
      <div className="min-h-screen grid grid-cols-8 mt-12">
        <div className="flex justify-center col-span-2">
          <div className="w-full">
            {
              testData.map((item) => {
                return(
                  <div key={item} className="flex items-center border-b h-10 mx-6 hover:bg-[#9ba88d] hover:text-white text-[#9ba88d]">
                    <div className="ml-2 font-semibold">カテゴリ1</div>
                  </div>
                )
              })
            }

          </div>
        </div>
        <div className="flex justify-center col-span-6 bg-red-500">

        </div>
      </div>
    </main>
  );
}
