import RequestList from "@/components/request/requestList/RequestList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, getFullReport } from "@/redux/actions/requests";
import { useEffect } from "react";

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

  return <RequestList requests={requests} handleDownload={(id) => handleDownload(id)} />;
}

export default Requests;
