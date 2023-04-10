import SubmitButton from "@/elements/buttons/SubmitButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, update } from "@/redux/actions/storage/accessories";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditAccessoryForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const accessory = useAppSelector((state) => state.accessories.accessory);

  const [name, setName] = useState();
  const [equipmentId, setEquipmentId] = useState();
  const [quantity, setQuantity] = useState();
  const [sku, setSku] = useState();

  useEffect(() => {
    dispatch(get(params.id));
  }, [dispatch]);

  useEffect(() => {
    setName(accessory.name);
    setEquipmentId(accessory.equipment?.id);
    setQuantity(accessory.quantity_in_stock);
    setSku(accessory.sku);
  }, [accessory]);

  const handleSubmit = async () => {
    const updateAccessoriesDto: UpdateAccessoryDto = {
      name,
      equipmentId: +equipmentId,
      quantity: Number(quantity),
      sku: sku === "" ? null : sku,
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
              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="Name"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="sku"
                    defaultValue={sku}
                    onChange={(e) => {
                      console.log(sku);
                      setSku(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="quantity"
                    defaultValue={quantity}
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value.replace(/\D/g, ""));
                    }}
                  />
                </div>
              </div>
              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    id="user-info-name"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="Equipment Id"
                    defaultValue={equipmentId}
                    value={equipmentId || ""}
                    onChange={(e) => {
                      setEquipmentId(e.target.value.replace(/\D/g, ""));
                    }}
                  />
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

export default EditAccessoryForm;
