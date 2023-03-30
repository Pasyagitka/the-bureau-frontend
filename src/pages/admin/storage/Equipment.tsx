import EquipmentList from "@/components/admin/storage/equipment/EquipmentList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, remove } from "@/redux/actions/storage/equipment";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Equipment() {
  const limit = 10;
  const offset = 0;
  const dispatch = useAppDispatch();

  const equipment = useAppSelector((state) => state.equipment.equipment);

  function loadAll() {
    dispatch(getAll({ limit, offset }));
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
            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                  placeholder="Наименование"
                />
              </div>
              <button
                type="button"
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
              >
                Фильтр
              </button>
              <Link
                to="create"
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
              >
                Добавить
              </Link>
            </form>
          </div>
        </div>
      </div>
      <EquipmentList equipment={equipment} handleRemove={(id) => handleRemove(id)} />
    </div>
  );
}

export default Equipment;
