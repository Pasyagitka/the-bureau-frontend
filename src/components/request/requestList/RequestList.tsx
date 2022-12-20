import SearchInput from "@/elements/searchInput/SearchInput";
import { RequestDto } from "@/types/dto/requestDto";
import { useState } from "react";
import RequestSmall from "./RequestSmall";

function RequestList({ requests = [] }: { requests: RequestDto[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  const commitInputChanges = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full bg-white p-12 container rounded">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Requests</p>
          <p className="text-2xl font-light text-gray-400">Description...</p>
        </div>
        <div className="flex gap-5">
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
            type="button"
            onClick={() => setFilterQuery("Completed")}
          >
            Completed
          </button>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
            type="button"
            onClick={() => setFilterQuery("InProcessing")}
          >
            InProcessing
          </button>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
            type="button"
            onClick={() => setFilterQuery("Approved")}
          >
            Approved
          </button>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
            type="button"
            onClick={() => setFilterQuery("")}
          >
            All
          </button>
        </div>
        <div className="text-end">
          <SearchInput searchQuery={searchQuery} commitInputChanges={commitInputChanges} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {requests
          .filter(
            (item) =>
              item.client.surname.toLowerCase().includes(searchQuery.toLowerCase()) &&
              item.status.toLowerCase().includes(filterQuery.toLowerCase())
          )
          .map((request) => (
            <RequestSmall key={request.id} request={request} />
          ))}
      </div>
    </div>
  );
}

export default RequestList;
