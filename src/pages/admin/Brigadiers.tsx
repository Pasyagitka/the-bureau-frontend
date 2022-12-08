import BrigadierList from "@/components/brigadierList/BrigadierList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, remove } from "@/redux/actions/brigadiers";
import { useEffect } from "react";

function Brigadiers() {
  const dispatch = useAppDispatch();

  const brigadiers = useAppSelector((state) => state.brigadiers.brigadiers);

  function loadAll() {
    dispatch(getAll());
  }
  useEffect(loadAll, [dispatch]);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return <BrigadierList brigadiers={brigadiers} handleRemove={(id) => handleRemove(id)} />;
}

export default Brigadiers;
