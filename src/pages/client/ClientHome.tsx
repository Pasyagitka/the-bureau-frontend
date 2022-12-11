import RequestCTA from "@/components/request/requestCTA/RequestCTA";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getRequests } from "@/redux/actions/clients";
import { useEffect } from "react";
import ClientRequests from "./ClientRequests";

function ClientHome() {
  const id = 5;
  const dispatch = useAppDispatch();

  const requests = useAppSelector((state) => state.clients.requests);
  // const client = useAppSelector((state) => state.auth);

  function loadAll() {
    // dispatch()
    dispatch(getRequests(5));
  }

  useEffect(loadAll, [dispatch]);

  return (
    <>
      <RequestCTA />
      <ClientRequests requests={requests} />
    </>
  );
}

export default ClientHome;
