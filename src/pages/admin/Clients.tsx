import ClientList from "@/components/admin/clientList/ClientList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/clients";
import { deactivate, activate } from "@/redux/actions/users";
import { useEffect } from "react";

function Clients() {
  const dispatch = useAppDispatch();

  const clients = useAppSelector((state) => state.clients.clients);

  function loadAll() {
    dispatch(getAll());
  }

  useEffect(loadAll, [dispatch]);

  const handleRemove = (id: number) => {
    dispatch(deactivate(id));
  };

  const handleApprove = (id: number) => {
    dispatch(activate(id));
  };

  return (
    <ClientList clients={clients} handleRemove={(id) => handleRemove(id)} handleApprove={(id) => handleApprove(id)} />
  );
}

export default Clients;
