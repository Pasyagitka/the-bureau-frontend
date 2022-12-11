import AccessoriesList from "@/components/admin/storage/accessoriesList/AccessoriesList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, remove } from "@/redux/actions/storage/accessories";
import { useEffect } from "react";

function Accessories() {
  const dispatch = useAppDispatch();

  const accessories = useAppSelector((state) => state.accessories.accessories);

  function loadAccessories() {
    dispatch(getAll());
  }

  useEffect(loadAccessories, [dispatch]);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return <AccessoriesList accessories={accessories} handleRemove={(id) => handleRemove(id)} />;
}

export default Accessories;
