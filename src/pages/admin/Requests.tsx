import RequestList from "@/components/requestList/RequestList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/requests";
import { useEffect } from "react";

function Requests() {
  const dispatch = useAppDispatch();

  const requests = useAppSelector((state: RootState) => state.requests.requests);

  function loadAll() {
    dispatch(getAll());
  }

  useEffect(loadAll, [dispatch]);
  return <RequestList requests={requests} />;
}

export default Requests;
