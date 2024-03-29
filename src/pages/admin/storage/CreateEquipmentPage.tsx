import { useAppDispatch } from "@/hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "@/redux/actions/storage/equipment";
import { CreateEquipmentDto } from "@/types/dto/storage/equipment/createEquipmentDto";
import { Mounting } from "@/types/enum/mounting.enum";
import SubmitButton from "@/elements/buttons/SubmitButton";
import InputWithLabel from "@/elements/inputs/InputWithLabel";
import Select from "@/elements/select/Select";

function CreateEquipmentPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [type, setType] = useState();

  const mountingsList = Object.values(Mounting).map((i) => ({ label: i, value: i }));

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
              <InputWithLabel placeholder="Наименование" onChange={(e) => setType(e.target.value)} />
              <Select
                data={mountingsList}
                value={mounting}
                onChange={setMounting}
                searchable={false}
                label="Способ монтажа"
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

export default CreateEquipmentPage;
