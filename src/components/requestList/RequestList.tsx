import SearchInput from "@/elements/searchInput/SearchInput";
import RequestSmall from "./RequestSmall";

function RequestList() {
  return (
    <div className="w-full bg-white p-12 container rounded">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Requests</p>
          <p className="text-2xl font-light text-gray-400">Description...</p>
        </div>
        <div className="text-end">
          <SearchInput />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <RequestSmall />
        <RequestSmall />
        <RequestSmall />
      </div>
    </div>
  );
}

export default RequestList;
