import EquipmentList from "@/components/storage/equipment/EquipmentList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/storage/equipment";
import { useEffect } from "react";

function Equipment() {
  const dispatch = useAppDispatch();

  const equipment = useAppSelector((state) => state.equipment.equipment);

  function loadAll() {
    dispatch(getAll());
  }

  useEffect(loadAll, [dispatch]);

  return <EquipmentList equipment={equipment} />;
}

export default Equipment;
