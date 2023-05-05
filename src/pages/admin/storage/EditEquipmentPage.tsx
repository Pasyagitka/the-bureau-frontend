import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get, update } from "@/redux/actions/storage/equipment";
import { Mounting } from "@/types/enum/mounting.enum";
import SubmitButton from "@/elements/buttons/SubmitButton";
import Select from "@/elements/select/Select";

function EditEquipmentPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const [type, setType] = useState();
  const [mounting, setMounting] = useState();

  const equipment = useAppSelector((state) => state.equipment.equipmentItem);

  // const mountingsList = Object.values(Mounting).map((i) => <option value={i} label={i} />);
  const mountingsList = Object.values(Mounting).map((i) => ({ label: i, value: i }));

  useEffect(() => {
    dispatch(get(params.id));
  }, [dispatch]);

  useEffect(() => {
    setType(equipment.type);
    setMounting(equipment.mounting);
  }, [equipment]);

  const handleSubmit = async () => {
    console.log(type, mounting);
    const res = await dispatch(update({ id: params.id, updateEquipmentDto: { type, mounting } }));
    if (!res.error) {
      navigate(-1);
    }
  };

  const handleMountingSelectChange = (e: string) => {
    setMounting(e);
  };

  return (
    <section className="w-full">
      <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-lime-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600">Обновить оборудование</h1>
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
                    placeholder="Type"
                    defaultValue={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                </div>
              </div>
              <Select
                data={mountingsList}
                value={mounting}
                defaultValue={mounting}
                onChange={setMounting}
                searchable={false}
                label="способ монтажа"
              />
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

export default EditEquipmentPage;
