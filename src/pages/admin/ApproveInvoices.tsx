import IconButton from "@/elements/buttons/IconButton";
import SubmitButton from "@/elements/buttons/SubmitButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getItems } from "@/redux/actions/invoices";
import { updateByAdmin } from "@/redux/actions/requests";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InputNumber, Table } from "rsuite";
import checkIcon from "icons/check.png";
import deleteIcon from "icons/delete.png";

const { Column, HeaderCell, Cell } = Table;

function ApproveInvoices() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const [brigadierId, setBrigadier] = useState();
  const [statusId, setStatus] = useState();

  const { invoiceItems } = useAppSelector((state) => state.invoices);

  useEffect(() => {
    dispatch(getItems(params.id));
  }, [dispatch]);

  useEffect(() => {
    setBrigadier(invoiceItems?.brigadier?.id);
    setStatus(invoiceItems?.status);
  }, [invoiceItems]);

  const handleSubmit = async () => {
    const updateRequestByAdminDto =
      brigadierId === null || brigadierId === undefined
        ? { status: statusId }
        : { brigadier: brigadierId === -1 ? null : brigadierId, status: statusId };
    const updateDto = {
      id: params.id,
      updateRequestByAdminDto,
    };
    const res = await dispatch(updateByAdmin(updateDto));
    if (!res.error) {
      navigate(-1);
    }
  };

  const listItems = invoiceItems?.map((item) => (
    <>
      <h1 className="block mb-2 text-sm font-medium text-gray-900">{`${item.accessory.name} ${
        item.sku ? `(${item.sku})` : ""
      } (${item.price} р/ед)`}</h1>
      <InputNumber
        key={item.id}
        placeholder={item.accessory.name}
        defaultValue={item.quantity}
        max={item.accessory.quantity_in_stock}
        min={0}
        // onChange={(value) => {
        //   console.log(value);
        //   if (Number(value) === 0) invoiceItems.delete(item.id);
        //   // if (!Number(e.target.value)) return;
        //   else invoiceItems.set(item.id, value);
        //   console.log(invoiceAccessoryList);
        // }}
      />
      <p>
        Количество на складе: {item.accessory.quantity_in_stock} (цена сейчас {item.accessory.price}р)
      </p>
      {item.accessory.quantity_in_stock >= item.quantity ? (
        <IconButton icon={checkIcon} alt="Ok" isLink={false} />
      ) : (
        <IconButton icon={deleteIcon} alt="Error" isLink={false} />
      )}
    </>
  ));

  // const [invoiceAccessoryList] = useState(
  //   new Map(
  //     invoiceItems.map((x) => {
  //       x.id;
  //       x;
  //     })
  //   )
  // );

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4 min-h-80vh container p-4 mb-5">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Содержимое счета</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Редактировать счет</p>
      </div>
      {/* <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
        <div className="max-w-sm mx-auto space-y-5 md:w-2/3">{listItems?.length > 0 ? listItems : "Нет"}</div>
      </div> */}
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Комплектующие</h3>
      </div>
      <div className="items-center w-full p-4 space-y-4 text-gray-500 md:space-y-0 mx-2">
        <Table data={invoiceItems} height={400}>
          <Column width={150}>
            <HeaderCell>Наименование</HeaderCell>
            <Cell style={{ padding: "6px" }}>{(rowData) => <p>{rowData.accessory.name}</p>}</Cell>
          </Column>

          <Column width={150}>
            <HeaderCell>Артикул</HeaderCell>
            <Cell style={{ padding: "6px" }}>{(rowData) => <p>{rowData.accessory.sku}</p>}</Cell>
          </Column>

          <Column width={150} align="center" fixed>
            <HeaderCell>Количество по счету</HeaderCell>
            <Cell style={{ padding: "6px" }}>
              {(rowData) => (
                <InputNumber
                  key={rowData.id}
                  placeholder={rowData.accessory.name}
                  defaultValue={rowData.quantity}
                  max={rowData.accessory.quantity_in_stock}
                  min={0}
                  // onChange={(value) => {
                  //   if (Number(value) === 0) invoiceAccessoryList.delete(rowData.id);
                  //   else invoiceAccessoryList.set(rowData.id, value);
                  //   console.log(invoiceAccessoryList);
                  // }}
                />
              )}
            </Cell>
          </Column>

          <Column width={150}>
            <HeaderCell>Количество на складе</HeaderCell>
            <Cell style={{ padding: "6px" }}>{(rowData) => <p>{rowData.accessory.quantity_in_stock}</p>}</Cell>
          </Column>

          <Column width={150}>
            <HeaderCell>Цена по счету</HeaderCell>
            <Cell style={{ padding: "6px" }}>{(rowData) => <p>{rowData.price}р/ед</p>}</Cell>
          </Column>

          <Column width={150}>
            <HeaderCell>Цена сейчас</HeaderCell>
            <Cell style={{ padding: "6px" }}>{(rowData) => <p>{rowData.accessory.price}р/ед</p>}</Cell>
          </Column>

          <Column width={150} fixed="right">
            <HeaderCell>Наличие</HeaderCell>

            <Cell style={{ padding: "6px" }}>
              {(rowData) =>
                rowData.accessory.quantity_in_stock >= rowData.quantity ? (
                  <IconButton icon={checkIcon} alt="Ok" isLink={false} />
                ) : (
                  <IconButton icon={deleteIcon} alt="Error" isLink={false} />
                )
              }
            </Cell>
          </Column>
        </Table>
      </div>
      <div className="flex justify-evenly">
        <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
      </div>
    </div>
  );
}

export default ApproveInvoices;
