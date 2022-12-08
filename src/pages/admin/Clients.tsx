import ClientList from "@/components/admin/clientList/ClientList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/clients";
import { useEffect } from "react";

function Clients() {
  const dispatch = useAppDispatch();

  const clients = useAppSelector((state) => state.clients.clients);

  function loadAll() {
    dispatch(getAll());
  }

  useEffect(loadAll, [dispatch]);

  return <ClientList clients={clients} />;
}

export default Clients;
