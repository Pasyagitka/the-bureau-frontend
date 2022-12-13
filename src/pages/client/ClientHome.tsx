import RequestCTA from "@/components/request/requestCTA/RequestCTA";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getRequests } from "@/redux/actions/clients";
import { useEffect } from "react";
import ClientRequests from "./ClientRequests";

function ClientHome() {
  const dispatch = useAppDispatch();
  const requests = useAppSelector((state) => state.clients.requests);
  const user = useAppSelector((state) => state.auth.user);

  function loadAll() {
    dispatch(getRequests(user?.client.id));
  }
  useEffect(loadAll, [user]);

  return (
    <>
      <RequestCTA />
      <ClientRequests requests={requests} />
    </>
  );
}

export default ClientHome;
