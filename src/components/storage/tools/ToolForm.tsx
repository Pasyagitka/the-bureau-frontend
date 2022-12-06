import Select from "@/elements/select/Select";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { create } from "@/storage/actions/storage/tools";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ToolForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [stageId, setStageId] = useState(1);

  const stages = useAppSelector((state) => state.stages);
  // const error = useAppSelector((state) => state.tools.error);
  // function loadAll() { Stages?
  //   dispatch(getAll());
  // }

  // useEffect(loadAll, [dispatch]);

  const handleSubmit = async () => {
    const res = await dispatch(create({ name, stageId }));
    if (!res.error) {
      navigate(-1);
    }
  };

  return (
    <section className="w-full">
      <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-lime-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600">Create tool</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    id="user-info-name"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="Name"
                    onChange={(e) => setName(event.target.value)}
                  />
                </div>
              </div>
              <Select
                title="Stage"
                values={[
                  { id: 1, name: "Clean" },
                  { id: 2, name: "Rough" },
                  { id: 3, name: "Both" },
                ]}
              />
            </div>
          </div>
          <hr />
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button
              type="button"
              onClick={() => handleSubmit()}
              className="py-2 px-4  bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolForm;
