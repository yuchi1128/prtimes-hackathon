import { BBDataType } from "@/types/type";
import { Article } from "@/types/type";
import BBCard from "./BBCard";

interface BBAllDataProps {
  bbData: Article[];
}

const CardList = ({ bbData }: BBAllDataProps) => {
  return (
    <div className="p-10">
      {bbData.map((bbData) => (
        <BBCard key={bbData.id} bbData={bbData} />
      ))}
    </div>
  );
};

export default CardList;
