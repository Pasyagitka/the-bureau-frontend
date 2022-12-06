import ToolsList from "@/components/storage/tools/ToolsList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, remove } from "@/redux/actions/storage/tools";
import { RootState } from "@react-three/fiber";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Tools() {
  const dispatch = useAppDispatch();

  const tools = useAppSelector((state: RootState) => state.tools.tools);

  function loadTools() {
    dispatch(getAll());
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
                  placeholder="name"
                />
              </div>
              <button
                type="button"
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
              >
                Filter
              </button>
              <Link
                to="create"
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-lime-600 rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-lime-200"
              >
                Add
              </Link>
            </form>
          </div>
        </div>
      </div>
      <ToolsList tools={tools} handleUpdate={(id) => handleUpdate(id)} handleRemove={(id) => handleRemove(id)} />
    </div>
  );
}

export default Tools;