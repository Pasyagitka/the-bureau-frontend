import AccessoriesList from "@/components/storage/accessoriesList/AccessoriesList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/storage/accessories";
import { useEffect } from "react";

function Accessories() {
  const dispatch = useAppDispatch();

  const accessories = useAppSelector((state: RootState) => state.accessories.accessories);

  function loadAccessories() {
    dispatch(getAll());
  }

  useEffect(loadAccessories, [dispatch]);
  return <AccessoriesList accessories={accessories} />;
}

export default Accessories;