import EquipmentList from "@/components/admin/storage/equipment/EquipmentList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, remove } from "@/redux/actions/storage/equipment";
import { useEffect } from "react";
import importIcon from "icons/import.png";
import AccentButton from "@/elements/buttons/AccentButton";
import ButtonWithIcon from "@/elements/buttons/ButtonWithIcon";

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

  return (
    <div className="container w-full">
      <div className="py-8">
        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <div className="text-end">
            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-full md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                  placeholder="Наименование"
                />
              </div>
              <AccentButton to="" title="Фильтр" />
              <AccentButton to="create" title="Добавить" />
              <ButtonWithIcon to="" alt="Импорт" icon={importIcon} />
            </form>
          </div>
        </div>
      </div>
      <EquipmentList equipment={equipment} handleRemove={(id) => handleRemove(id)} />
    </div>
  );
}

export default Equipment;
