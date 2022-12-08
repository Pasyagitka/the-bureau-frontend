import SearchInput from "@/elements/searchInput/SearchInput";
import { BrigadierDto } from "@/types/dto/brigadier/brigadierDto";
import BrigadierItem from "./BrigadierItem";

function BrigadierList({
  brigadiers = [],
  handleRemove,
}: {
  brigadiers: Array<BrigadierDto>;
  handleRemove: () => void;
}) {
  const listItems = brigadiers.map((brigadier) => (
    <BrigadierItem key={brigadier.id} brigadier={brigadier} handleRemove={() => handleRemove(brigadier.id)} />
  ));

  return (
    <div className="w-full bg-white p-12 container  rounded">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Brigadiers</p>
          <p className="text-2xl font-light text-gray-400">Description...</p>
        </div>
        <div className="text-end">
          <SearchInput />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">{listItems}</div>
    </div>
  );
}

export default BrigadierList;
