import SubmitButton from "@/elements/buttons/SubmitButton";
import InputWithLabel from "@/elements/inputs/InputWithLabel";
import Select from "@/elements/select/Select";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, update } from "@/redux/actions/storage/accessories";
import { getAll as getAllEquipment } from "@/redux/actions/storage/equipment";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditAccessoryPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const accessory = useAppSelector((state) => state.accessories.accessory);
  const { equipment } = useAppSelector((state) => state.equipment);

  const [name, setName] = useState<string | null>();
  const [equipmentId, setEquipmentId] = useState<number | null>();
  const [quantity, setQuantity] = useState<number | null>();
  const [sku, setSku] = useState<string | null>();
  const [price, setPrice] = useState<number | null>();

  const equipmentList = equipment.map((i) => ({ label: i.type, value: i.id }));

  useEffect(() => {
    dispatch(get(Number(params.id)));
    dispatch(getAllEquipment());
  }, [dispatch]);

  useEffect(() => {
    setName(accessory.name);
    setEquipmentId(accessory.equipment?.id);
    setQuantity(accessory.quantity_in_stock);
    setSku(accessory.sku);
    setPrice(accessory.price);
  }, [accessory]);

  const handleSubmit = async () => {
    const updateAccessoriesDto: UpdateAccessoryDto = {
      name,
      equipmentId: Number(equipmentId),
      quantity: Number(quantity),
      sku: sku === "" ? null : sku,
      price,
    };
    console.log(updateAccessoriesDto, "update");
    const res = await dispatch(update({ id: params.id, updateAccessoriesDto }));
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
              <h1 className="text-gray-600">Обновить комплектующие</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <InputWithLabel
                placeholder="наименование"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputWithLabel placeholder="артикул" defaultValue={sku} onChange={(e) => setSku(e.target.value)} />
              <InputWithLabel
                placeholder="цена за единицу"
                defaultValue={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <InputWithLabel
                placeholder="количество"
                defaultValue={quantity}
                onChange={(e) => setQuantity(e.target.value.replace(/\D/g, ""))}
              />
              <Select data={equipmentList} value={equipmentId} onChange={setEquipmentId} label="оборудование" />
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

export default EditAccessoryPage;
