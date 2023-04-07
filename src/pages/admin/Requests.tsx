import RequestList from "@/components/request/requestList/RequestList";
import Map from "@/elements/map/Map";
import SearchInput from "@/elements/searchInput/SearchInput";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, getFullReport } from "@/redux/actions/requests";
import { useEffect, useState } from "react";

function Requests() {
  const dispatch = useAppDispatch();

  const requests = useAppSelector((state) => state.requests.requests);

  function loadAll() {
    dispatch(getAll());
  }
  useEffect(loadAll, [dispatch]);

  const handleDownload = (id: number) => {
    dispatch(getFullReport(id));
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  const commitInputChanges = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full bg-white p-12 container rounded">
      <div className="header flex items-end justify-between">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Заявки</p>
          <p className="text-2xl font-light text-gray-400">Описание...</p>
        </div>
      </div>
      <Map requests={requests} />
      <div className="flex items-end justify-between mb-12">
        <div className="flex gap-5">
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
            type="button"
            onClick={() => setFilterQuery("InProcessing")}
          >
            В обработке
          </button>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
            type="button"
            onClick={() => setFilterQuery("Completed")}
          >
            Выполнена
          </button>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
            type="button"
            onClick={() => setFilterQuery("Approved")}
          >
            Подтверждена
          </button>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
            type="button"
            onClick={() => setFilterQuery("")}
          >
            Все
          </button>
        </div>
        <div className="text-end">
          <SearchInput searchQuery={searchQuery} commitInputChanges={commitInputChanges} />
        </div>
      </div>
      <RequestList
        requests={requests}
        handleDownload={(id) => handleDownload(id)}
        searchQuery={searchQuery}
        filterQuery={filterQuery}
      />
    </div>
  );
}

export default Requests;
