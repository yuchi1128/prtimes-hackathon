import { BBDataType } from "@/types/type";
import { Article } from "@/types/type";
import BBCard from "./BBCard";

interface BBAllDataProps {
  bbData: Article[];
}

const CardList = ({ bbData }: BBAllDataProps) => {
  return (
    <div className="px-4 py-4 gap-4 bg-slate-200">
      {bbData.map((bbData) => (
        <BBCard key={bbData.id} bbData={bbData} />
      ))}
    </div>
  );
};

export default CardList;
