import { useState, useEffect } from "react";
import TextInput from "@/components/client/leaveRequestForm/TextInput";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/storage/accessories";
import SubmitButton from "../buttons/SubmitButton";

function CreateInvoiceForm() {
  const dispatch = useAppDispatch();

  function loadAll() {
    dispatch(getAll({ limit: 10, offset: 0 }));
  }
  useEffect(loadAll, [dispatch]);

  const [invoiceAccessoryList] = useState(new Map());
  const accessoryList = useAppSelector((state) => state.accessories.accessories);
  const listItems = accessoryList.map((item) => (
    <TextInput
      key={item.id}
      placeholder={item.name}
      defaultValue={0}
      onChange={(e) => {
        if (e.target.value === "") invoiceAccessoryList.delete(item.id);
        if (!Number(e.target.value)) return;
        invoiceAccessoryList.set(item.id, e.target.value);
        console.log(invoiceAccessoryList);
      }}
    />
  ));
  return (
    <section className="w-full">
      <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-lime-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600">Запросить счет на комплектующие</h1>
            </div>
          </div>
        </div>
        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
          <h2 className="max-w-sm mx-auto md:w-1/3">Доступные для заказа комплектующие</h2>
          <div className="max-w-sm mx-auto space-y-5 md:w-2/3">{listItems}</div>
        </div>
        <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3" />
        <div className="space-y-6 bg-white">
          {/* <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className=" relative ">
                  <select
                    name="equipment"
                    defaultValue={equipmentId}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm text-gray-700 placeholder-gray-400"
                    onChange={(e) => handleEquipmentSelectChange(Number(e.currentTarget.value))}
                  >
                    {accessoryList}
                  </select>
                </div>
              </div>
            </div>
          </div> */}
          <hr />
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateInvoiceForm;