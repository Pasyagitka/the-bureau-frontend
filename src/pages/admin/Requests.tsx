import RequestList from "@/components/request/requestList/RequestList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/requests";
import { useEffect } from "react";

function Requests() {
  const dispatch = useAppDispatch();

  const requests = useAppSelector((state) => state.requests.requests);

  function loadAll() {
    dispatch(getAll());
  }

  useEffect(loadAll, [dispatch]);
  return <RequestList requests={requests} />;
}

export default Requests;
