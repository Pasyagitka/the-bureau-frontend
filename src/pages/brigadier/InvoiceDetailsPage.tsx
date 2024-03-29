import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getItems } from "@/redux/actions/invoices";
import { useNavigate, useParams } from "react-router-dom";
import SubmitButton from "@/elements/buttons/SubmitButton";
import PhotoGallery from "@/elements/photoGallery/PhotoGallery";
import downloadIcon from "icons/download.png";
import IconButton from "@/elements/buttons/IconButton";
import { Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

function InvoiceDetailsPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const { invoice, invoiceItems } = useAppSelector((state) => state.invoices);
  const existingRequestReports = [];

  useEffect(() => {
    dispatch(getItems(Number(params.id)));
    dispatch(get(Number(params.id)));
  }, [dispatch]);

  const handleInvoiceDownload = (url: string) => {
    window.open(url);
  };

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg min-h-80vh container md:p-4 md:mb-5 mx-auto">
      <div className="px-4 py-5 sm:px-6 flex justify-between">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-700">Содержимое счета</h3>
          {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">Редактировать счет</p> */}
        </div>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-700">Комплектующие</h3>
      </div>
      <div className="items-center w-full h-full p-4 space-y-4 text-gray-500 md:space-y-0 mx-2">
        <Table data={invoiceItems} style={{ fontSize: "0.875rem" }}>
          <Column width={150}>
            <HeaderCell>Наименование</HeaderCell>
            <Cell>{(rowData) => <p>{rowData.accessory?.name}</p>}</Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Артикул</HeaderCell>
            <Cell>{(rowData) => <p>{rowData.accessory?.sku}</p>}</Cell>
          </Column>

          <Column flexGrow={1} align="center" fixed>
            <HeaderCell>Количество</HeaderCell>
            <Cell>{(rowData) => <p>{rowData?.quantity}</p>}</Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Цена</HeaderCell>
            <Cell>{(rowData) => <p>{rowData?.price} руб./ед.</p>}</Cell>
          </Column>
        </Table>
        <div className="items-center w-full p-4 space-y-4 text-gray-500  md:space-y-0">
          <h1 className="text-gray-600 w-full text-center">Просмотреть скан счета</h1>
          <IconButton
            icon={downloadIcon}
            alt="Download"
            isLink={false}
            onClick={() => handleInvoiceDownload(invoice?.scanUrl)}
          />
        </div>
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
