import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getItems } from "@/redux/actions/invoices";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "rsuite";
import SubmitButton from "@/elements/buttons/SubmitButton";
import PhotoGallery from "@/elements/photoGallery/PhotoGallery";

const { Column, HeaderCell, Cell } = Table;

function InvoiceDetailsPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const { invoiceItems } = useAppSelector((state) => state.invoices);
  const existingRequestReports = [];

  useEffect(() => {
    dispatch(getItems(Number(params.id)));
  }, [dispatch]);

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4 min-h-80vh container p-4 mb-5 mx-auto flex flex-col">
      <div className="px-4 py-5 sm:px-6 flex justify-between">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Содержимое счета</h3>
          {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">Редактировать счет</p> */}
        </div>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Комплектующие</h3>
      </div>
      <div className="items-center w-full h-full p-4 space-y-4 text-gray-500 md:space-y-0 mx-2">
        <Table data={invoiceItems} style={{ fontSize: "0.875rem" }}>
          <Column width={150}>
            <HeaderCell>Наименование</HeaderCell>
            <Cell>{(rowData) => <p>{rowData.accessory.name}</p>}</Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Артикул</HeaderCell>
            <Cell>{(rowData) => <p>{rowData.accessory.sku}</p>}</Cell>
          </Column>

          <Column flexGrow={1} align="center" fixed>
            <HeaderCell>Количество</HeaderCell>
            <Cell>{(rowData) => <p>{rowData.quantity}</p>}</Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Цена</HeaderCell>
            <Cell>{(rowData) => <p>{rowData.price}р/ед</p>}</Cell>
          </Column>
        </Table>
        <div className="items-center w-full p-4 space-y-4 text-gray-500  md:space-y-0">
          <h1 className="text-gray-600 w-full text-center">Чек по счету</h1>
          {existingRequestReports && existingRequestReports.length > 0 ? (
            <PhotoGallery images={existingRequestReports} />
          ) : (
            <dt className="text-sm font-medium text-gray-500">Отсутствует</dt>
          )}
        </div>
      </div>

      <div className="flex justify-center gap-5 ">
        <SubmitButton title="Назад" handleSubmit={() => navigate(-1)} />
      </div>
    </div>
  );
}

export default InvoiceDetailsPage;
