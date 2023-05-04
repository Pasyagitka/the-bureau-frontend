import BrigadierList from "@/components/admin/brigadierList/BrigadierList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/brigadiers";
import { activate, deactivate } from "@/redux/actions/users";
import { useEffect } from "react";

function BrigadiersPage() {
  const dispatch = useAppDispatch();

  const brigadiers = useAppSelector((state) => state.brigadiers.brigadiers);

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
    <BrigadierList
      brigadiers={brigadiers}
      handleRemove={(id) => handleRemove(id)}
      handleApprove={(id) => handleApprove(id)}
    />
  );
}

export default BrigadiersPage;
