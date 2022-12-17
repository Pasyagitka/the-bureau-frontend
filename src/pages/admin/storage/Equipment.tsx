import EquipmentList from "@/components/admin/storage/equipment/EquipmentList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, remove } from "@/redux/actions/storage/equipment";
import { useEffect } from "react";

function Equipment() {
  const dispatch = useAppDispatch();

  const equipment = useAppSelector((state) => state.equipment.equipment);

  function loadAll() {
    dispatch(getAll());
  }

  useEffect(loadAll, [dispatch]);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return <EquipmentList equipment={equipment} handleRemove={(id) => handleRemove(id)} />;
}

export default Equipment;
