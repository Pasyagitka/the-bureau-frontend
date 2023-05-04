import RequestList from "@/components/admin/requestList/RequestList";
import SearchInput from "@/elements/inputs/SearchInput";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, getFullReport } from "@/redux/actions/requests";
import { useEffect, useState } from "react";
import { Drawer } from "rsuite";
import Map from "@/elements/map/Map";
import { Fab } from "@mui/material";
import mapIcon from "icons/map.png";
import { RequestStatus } from "@/types/enum/request-statuses.enum";

function RequestsPage() {
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

  const filteredRequests = requests.filter(
    (item) =>
      (item.client.surname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.address.street.toLowerCase().includes(searchQuery.toLowerCase())) &&
      item.status.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full bg-white p-12 container rounded">
      <div className="header flex items-end justify-between">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">Заявки</p>
          <p className="text-2xl font-light text-gray-400">Описание...</p>
        </div>
      </div>
      <div className="flex items-end justify-between mb-12">
        <div className="flex gap-5">
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
            type="button"
            onClick={() => setFilterQuery(RequestStatus.INPROCESSING)}
          >
            В обработке
          </button>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
            type="button"
            onClick={() => setFilterQuery(RequestStatus.ACCEPTED)}
          >
            Принята бригадиром
          </button>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
            type="button"
            onClick={() => setFilterQuery(RequestStatus.COMPLETED)}
          >
            Выполнена
          </button>
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
            type="button"
            onClick={() => setFilterQuery(RequestStatus.APPROVED)}
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
          {/* <Button>Открыть карту</Button> */}

          <div className="fixed bottom-0 right-0 mx-12 my-6">
            <Fab variant="extended" onClick={() => setOpen(true)}>
              Показать карту с заявками
              <img src={mapIcon} width="30px" alt="" />
            </Fab>
          </div>
        </div>
        <div className="text-end">
          <SearchInput searchQuery={searchQuery} commitInputChanges={commitInputChanges} />
        </div>
      </div>
      <RequestList requests={filteredRequests} handleDownload={(id) => handleDownload(id)} />
      {/* <Input onClick={setOpen(true)} /> */}
      {/* <Map requests={filteredRequests} /> */}
      {/* <SlideOver content={<Map requests={filteredRequests} />} isOpen={isOpen} setOpen={setOpen} /> */}
      <Drawer open={isOpen} onClose={() => setOpen(false)} size="lg">
        <Drawer.Body>
          <Map requests={filteredRequests} />
        </Drawer.Body>
      </Drawer>
    </div>
  );
}

export default RequestsPage;
