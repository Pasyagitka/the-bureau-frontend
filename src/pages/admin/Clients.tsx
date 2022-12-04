import ClientList from "@/components/clientList/ClientList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/storage/actions/clients";
import { RootState } from "@react-three/fiber";
import { useEffect } from "react";

function Clients() {
  const dispatch = useAppDispatch();

  const clients = useAppSelector((state: RootState) => state.clients.clients);

  function loadAll() {
    dispatch(getAll());
  }

  useEffect(loadAll, [dispatch]);

  return <ClientList clients={clients} />;
}

export default Clients;
