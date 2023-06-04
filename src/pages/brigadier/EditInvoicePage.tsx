import IconButton from "@/elements/buttons/IconButton";
import SubmitButton from "@/elements/buttons/SubmitButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getItems, updateItems } from "@/redux/actions/invoices";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InputNumber, Table } from "rsuite";
import checkIcon from "icons/check.png";
import deleteIcon from "icons/delete.png";
import { getAvailableForInvoice } from "@/redux/actions/storage/accessories";

const { Column, HeaderCell, Cell } = Table;

function EditInvoicePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const { invoiceItems } = useAppSelector((state) => state.invoices);
  const invoiceItemsAccessoriesIds = invoiceItems.map((x) => x.accessory.id);
  const accessoryList = useAppSelector((state) => state.accessories.accessories);

  const [invoiceAccessoryList, setInvoiceAccessoryList] = useState(new Map());
  useEffect(() => {
    dispatch(getItems(Number(params.id)));
    dispatch(getAvailableForInvoice());
  }, [dispatch]);

  useEffect(() => {
    setInvoiceAccessoryList(new Map(invoiceItems.map((obj) => [obj.accessory.id, obj.quantity])));
  }, [invoiceItems]);

  const handleSubmit = async () => {
    const newInvoiceItems = Array.from(invoiceAccessoryList, (item) => ({ accessoryId: item[0], quantity: +item[1] }));
    const res = await dispatch(updateItems({ id: Number(params.id), updateInvoiceDto: { items: newInvoiceItems } }));
    if (!res.error) {
      navigate(-1);
    }
  };

  const listItems = accessoryList
    .filter((x) => !invoiceItemsAccessoriesIds.includes(x.id))
    .map((item) => (
      <>
        <div className="flex justify-between">
          <p className="block mb-2 text-sm font-medium text-gray-700">{`${item.name} ${
            item.sku ? `(арт. ${item.sku})` : ""
          }`}</p>
          <p className="text-right text-sm font-medium text-gray-700">{item.price}р/ед</p>
        </div>
        <InputNumber
          key={item.id}
          placeholder={item.name}
          defaultValue={0}
          max={item.quantity_in_stock}
          min={0}
          onChange={(value) => {
            console.log(value);
            if (Number(value) === 0) invoiceAccessoryList.delete(item.id);
            // if (!Number(e.target.value)) return;
            else invoiceAccessoryList.set(item.id, value);
            console.log(invoiceAccessoryList);
          }}
          style={{ marginTop: 0 }}
        />
        <p className="text-right text-sm" style={{ margin: 0 }}>
          на складе {item.quantity_in_stock}ед
        </p>
      </>
    ));

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg md:w-3/4 min-h-80vh container md:p-4 md:mb-5 mx-auto">
      <div className="px-4 py-5 sm:px-6 flex justify-between">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-700">Содержимое счета</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Редактировать счет</p>
        </div>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-700">Комплектующие по счету</h3>
      </div>
      <div className="items-center w-full h-full md:p-4 space-y-4 text-gray-500 md:space-y-0 mx-2">
        <Table data={invoiceItems} style={{ fontSize: "0.875rem" }} autoHeight>
          <Column width={150}>
            <HeaderCell>Наименование</HeaderCell>
            <Cell>{(rowData) => <p>{rowData.accessory.name}</p>}</Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Артикул</HeaderCell>
            <Cell>{(rowData) => <p>{rowData.accessory.sku}</p>}</Cell>
          </Column>

          <Column flexGrow={1} align="center" fixed>
            <HeaderCell>Количество по счету</HeaderCell>
            <Cell style={{ padding: "5px" }}>
              {(rowData) => (
                <InputNumber
                  key={rowData.id}
                  placeholder={rowData.accessory.name}
                  defaultValue={rowData.quantity}
                  max={rowData.accessory.quantity_in_stock}
                  min={0}
                  onChange={(value) => {
                    if (Number(value) === 0) invoiceAccessoryList.delete(rowData.accessory.id);
                    else invoiceAccessoryList.set(rowData.accessory.id, value);
                    console.log(invoiceAccessoryList);
                  }}
                />
              )}
            </Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Количество на складе</HeaderCell>
            <Cell align="center">{(rowData) => <p>{rowData.accessory.quantity_in_stock}</p>}</Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Цена по счету</HeaderCell>
            <Cell>{(rowData) => <p>{rowData.price} руб./ед.</p>}</Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Цена сейчас</HeaderCell>
            <Cell>{(rowData) => <p>{rowData.accessory.price} руб./ед.</p>}</Cell>
          </Column>

          <Column flexGrow={1} fixed="right">
            <HeaderCell>Наличие</HeaderCell>

            <Cell>
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
      {listItems?.length > 0 ? (
        <>
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-700">Добавить комплектующие в счет</h3>
          </div>
          <div className="max-w-sm mx-auto space-y-5 md:w-2/3 mb-4 text-gray-500">{listItems}</div>
        </>
      ) : null}
      <div className="flex justify-center gap-5">
        <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
        <SubmitButton title="Отменить" handleSubmit={() => navigate(-1)} />
      </div>
    </div>
  );
}

export default EditInvoicePage;
