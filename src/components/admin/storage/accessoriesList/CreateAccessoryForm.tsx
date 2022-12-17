import { useAppDispatch, useAppSelector } from "@/hooks";
import { create } from "@/redux/actions/storage/accessories";
import { getAll } from "@/redux/actions/storage/equipment";
import { CreateAccessoryDto } from "@/types/dto/storage/accessories/createAccessoryDto";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccessoryForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [equipmentId, setEquipmentId] = useState();
  const [sku, setSku] = useState();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const equipmentList = useAppSelector((state) => state.equipment.equipment).map((i) => (
    <option selected value={i.id} label={i.type} />
  ));

  const handleSubmit = async () => {
    const item: CreateAccessoryDto = {
      sku,
      name,
      equipmentId,
    };
    const res = await dispatch(create(item));
    if (!res.error) {
      navigate(-1);
    }
  };

  const handleEquipmentSelectChange = (e: number) => {
    setEquipmentId(Number(e));
    console.log(equipmentId);
  };

  return (
    <section className="w-full">
      <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-lime-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600">Create accessory</h1>
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
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="sku"
                    onChange={(e) => setSku(event.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="Name"
                    onChange={(e) => setName(event.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className=" relative ">
                  <select
                    name="equipment"
                    defaultValue={equipmentId}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm text-gray-700 placeholder-gray-400"
                    onChange={(e) => handleEquipmentSelectChange(Number(e.currentTarget.value))}
                  >
                    {equipmentList}
                  </select>
                </div>
              </div>
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

export default CreateAccessoryForm;
