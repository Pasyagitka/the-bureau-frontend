import { useAppDispatch } from "@/hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "@/redux/actions/storage/equipment";
import { CreateEquipmentDto } from "@/types/dto/storage/equipment/createEquipmentDto";
import { Mounting } from "@/types/enum/mounting.enum";
import SubmitButton from "@/elements/buttons/SubmitButton";

function CreateEquipmentForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [type, setType] = useState();

  const mountingsList = Object.values(Mounting).map((i) => <option value={i} label={i} />);

  const [mounting, setMounting] = useState(Mounting.FLOOR);

  const handleSubmit = async () => {
    const item: CreateEquipmentDto = {
      type,
      mounting,
    };
    const res = await dispatch(create(item));
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
              <h1 className="text-gray-600">Добавить оборудование</h1>
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
                    onChange={(e) => setType(event.target.value)}
                  />
                </div>
              </div>
              <select
                name="Mounting"
                defaultValue={mounting}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm text-gray-700 placeholder-gray-400"
                onChange={(e) => {
                  setMounting(e.currentTarget.value);
                }}
              >
                {mountingsList}
              </select>
            </div>
          </div>
          <hr />
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateEquipmentForm;
