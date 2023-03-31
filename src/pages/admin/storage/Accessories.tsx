import AccessoriesList from "@/components/admin/storage/accessoriesList/AccessoriesList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, remove } from "@/redux/actions/storage/accessories";
import { useEffect, useState } from "react";
import importIcon from "icons/import.png";
import AccentButton from "@/elements/buttons/AccentButton";
import ButtonWithIcon from "@/elements/buttons/ButtonWithIcon";

function Accessories() {
  const dispatch = useAppDispatch();
  const [activePage, setActivePage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const { accessories, total } = useAppSelector((state) => state.accessories);

  function loadAccessories() {
    dispatch(getAll({ limit, offset }));
  }
  useEffect(loadAccessories, [dispatch]);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    const newOffset = (value - 1) * limit;
    setActivePage(value);
    setOffset(newOffset);
    dispatch(getAll({ limit, offset: newOffset }));
  };

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
              <ButtonWithIcon to="" alt="Импорт" icon={importIcon} />
              <AccentButton to="" title="Фильтр" />
              <AccentButton to="create" title="Добавить" />
            </form>
          </div>
        </div>
      </div>
      <AccessoriesList
        accessories={accessories}
        handleRemove={(id) => handleRemove(id)}
        handlePageChange={handleChangePage}
        total={total || 10}
        pageSize={limit}
        page={activePage}
      />
    </div>
  );
}

export default Accessories;
