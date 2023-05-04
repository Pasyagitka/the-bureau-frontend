import ClientProfileInfo from "@/components/client/clientProfileInfo/ClientProfileInfo";
import RequestCTA from "@/components/client/requestCTA/RequestCTA";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getRequests } from "@/redux/actions/clients";
import { useEffect } from "react";
import ClientRequests from "../../components/client/clientRequestsList/ClientRequests";

function ClientHomePage() {
  const dispatch = useAppDispatch();
  const requests = useAppSelector((state) => state.clients.requests);
  const user = useAppSelector((state) => state.auth.user);
  const client = useAppSelector((state) => state.clients.client);

  function loadAll() {
    dispatch(getRequests(user?.client.id));
    dispatch(get(user?.client?.id));
  }
  useEffect(loadAll, [user]);

  return (
    <>
      <RequestCTA />
      <ClientProfileInfo client={client} />
      <ClientRequests requests={requests} />
    </>
  );
}

export default ClientHomePage;
