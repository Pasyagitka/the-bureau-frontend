import ToolsList from "@/components/admin/storage/tools/ToolsList";
import AccentButton from "@/elements/buttons/AccentButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, remove } from "@/redux/actions/storage/tools";
import { useEffect } from "react";

function Tools() {
  const limit = 10;
  const offset = 0;
  const dispatch = useAppDispatch();

  const tools = useAppSelector((state) => state.tools.tools);

  function loadTools() {
    dispatch(getAll({ limit, offset }));
  }

  useEffect(loadTools, [dispatch]);

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
              <AccentButton to="" title="Фильтр" />
              <AccentButton to="create" title="Добавить" />
            </form>
          </div>
        </div>
      </div>
      <ToolsList tools={tools} handleUpdate={(id) => handleUpdate(id)} handleRemove={(id) => handleRemove(id)} />
    </div>
  );
}

export default Tools;
