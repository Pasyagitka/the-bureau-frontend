import SubmitButton from "@/elements/buttons/SubmitButton";
import Input from "@/elements/inputs/Input";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { create } from "@/redux/actions/storage/accessories";
import { getAll } from "@/redux/actions/storage/equipment";
import { CreateAccessoryDto } from "@/types/dto/storage/accessories/createAccessoryDto";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccessoryForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const equipment = useAppSelector((state) => state.equipment.equipment);

  const [name, setName] = useState();
  const [equipmentId, setEquipmentId] = useState();
  const [sku, setSku] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const equipmentList = equipment.map((i) => <option value={i.id} label={i.type} />);

  const handleSubmit = async () => {
    const item: CreateAccessoryDto = {
      sku,
      name,
      price,
      quantity: Number(quantity),
      equipmentId: Number(equipmentId),
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
              <h1 className="text-gray-600">Добавить комплектующие</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <Input placeholder="артикул" onChange={(e) => setSku(event.target.value)} />
              <Input placeholder="наименование" onChange={(e) => setName(event.target.value)} />
              <Input placeholder="цена за единицу" onChange={(e) => setPrice(event.target.value)} />
              <Input placeholder="количество" onChange={(e) => setQuantity(event.target.value)} />
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
            <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateAccessoryForm;
