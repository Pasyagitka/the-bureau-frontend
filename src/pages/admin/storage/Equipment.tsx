import EquipmentList from "@/components/storage/equipment/EquipmentList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/storage/actions/storage/equipment";
import { RootState } from "@react-three/fiber";
import { useEffect } from "react";

function Equipment() {
  const dispatch = useAppDispatch();

  const equipment = useAppSelector((state: RootState) => state.equipment.equipment);

  function loadAll() {
    dispatch(getAll());
  }

  useEffect(loadAll, [dispatch]);

  return <EquipmentList equipment={equipment} />;
}

export default Equipment;
