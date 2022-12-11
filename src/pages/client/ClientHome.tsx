import RequestCTA from "@/components/request/requestCTA/RequestCTA";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getRequests } from "@/redux/actions/clients";
import { useEffect } from "react";
import ClientRequests from "./ClientRequests";

function ClientHome() {
  const id = 3;
  const dispatch = useAppDispatch();

  const requests = useAppSelector((state) => state.clients.requests);

  function loadAll() {
    dispatch(getRequests(id));
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
