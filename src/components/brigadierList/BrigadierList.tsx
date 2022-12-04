import SearchInput from "@/elements/searchInput/SearchInput";
import BrigadierItem from "./BrigadierItem";

const brigadierTest = {
  id: 1,
  surname: "string",
  firstname: "string",
  patronymic: "string",
  email: "",
  contactPhone: 123,
};
// { brigadiers = [] }: { brigadiers: Array<BrigadierDto> }
function BrigadierList() {
  // const listItems = brigadiers.map((brigadier) => <BrigadierItem key={brigadier.id} brigadier={brigadier} />);

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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <BrigadierItem brigadier={brigadierTest} />
        <BrigadierItem brigadier={brigadierTest} />
        <BrigadierItem brigadier={brigadierTest} />
        <BrigadierItem brigadier={brigadierTest} />
        <BrigadierItem brigadier={brigadierTest} />
        <BrigadierItem brigadier={brigadierTest} />
      </div>
    </div>
  );
}

export default BrigadierList;
