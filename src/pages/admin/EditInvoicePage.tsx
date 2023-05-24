import IconButton from "@/elements/buttons/IconButton";
import SubmitButton from "@/elements/buttons/SubmitButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getFile, getItems, uploadScan } from "@/redux/actions/invoices";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Table, Uploader } from "rsuite";
import checkIcon from "icons/check.png";
import deleteIcon from "icons/delete.png";
import downloadIcon from "icons/download.png";
import { toast } from "react-toastify";

const { Column, HeaderCell, Cell } = Table;

function EditInvoiceStatusPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const [brigadierId, setBrigadier] = useState<number | null>();
  const [statusId, setStatus] = useState<string | null>();

  const { invoiceItems } = useAppSelector((state) => state.invoices);
  const { invoice } = useAppSelector((state) => state.invoices);
  const [files, setFiles] = useState([]);

  const [fileInfo, setFileInfo] = useState(null);

  useEffect(() => {
    dispatch(getItems(Number(params.id)));
    dispatch(get(Number(params.id)));
  }, [dispatch]);

  useEffect(() => {
    setBrigadier(invoiceItems?.brigadier?.id);
    setStatus(invoiceItems?.status);
  }, [invoiceItems]);

  const handleSubmit = async () => {
    // TODO toast loading promise
    let updateScanResult = null;
    if (fileInfo?.length > 0) {
      const formData = new FormData();
      formData.append(`file`, fileInfo[0].blobFile, fileInfo[0].name);
      updateScanResult = await dispatch(uploadScan({ id: Number(params.id), file: formData }));
    } else {
      toast.error("Загрузите скан счета");
    }
    if (updateScanResult && !updateScanResult.error) {
      navigate(-1);
    }
  };

  const handleDownload = (id: number) => {
    dispatch(getFile(id));
  };

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4 min-h-80vh container p-4 mb-5">
      <div className="px-4 py-5 sm:px-6 flex justify-between">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Содержимое счета</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Редактировать счет</p>
        </div>
      </div>
      {/* <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
        <div className="max-w-sm mx-auto space-y-5 md:w-2/3">{listItems?.length > 0 ? listItems : "Нет"}</div>
      </div> */}
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Комплектующие</h3>
      </div>
      <div className="items-center w-full p-4 space-y-4 text-gray-500 md:space-y-0 mx-2">
        <Table data={invoiceItems} style={{ fontSize: "0.875rem" }} height={200}>
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
            <Cell>{(rowData) => <p>{rowData.quantity}</p>}</Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Количество на складе</HeaderCell>
            <Cell align="center">{(rowData) => <p>{rowData.accessory.quantity_in_stock}</p>}</Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Цена по счету</HeaderCell>
            <Cell>{(rowData) => <p>{rowData.price}р/ед</p>}</Cell>
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Цена сейчас</HeaderCell>
            <Cell>{(rowData) => <p>{rowData.accessory.price}р/ед</p>}</Cell>
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
        <div className="items-center w-full p-4 space-y-4 text-gray-500  md:space-y-0">
          <h1 className="text-gray-600 w-full text-center">Скачать счет для печати </h1>
          <IconButton
            icon={downloadIcon}
            alt="Download"
            isLink={false}
            onClick={() => handleDownload(Number(params.id))}
          />
        </div>
        <div className="items-center w-full p-4 space-y-4 text-gray-500  md:space-y-0">
          <h1 className="text-gray-600 w-full text-center">Текущий скан счета</h1>
          {invoice.scanUrl ? (
            <dt className="text-sm font-medium text-gray-500">Загружен</dt>
          ) : (
            <dt className="text-sm font-medium text-gray-500">Отсутствует</dt>
          )}
        </div>
        <div className="items-center w-full p-4 space-y-4 text-gray-500  md:space-y-0">
          <h1 className="text-gray-600 w-full text-center">Загрузить скан счета</h1>
          <div className="flex">
            <div className="inline-flex items-center space-x-4">
              <Uploader
                listType="picture-text"
                fileList={files}
                accept="application/pdf"
                onChange={setFileInfo}
                action=""
                defaultFileList={files}
                autoUpload={false}
                draggable
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly">
        <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
      </div>
    </div>
  );
}

export default EditInvoiceStatusPage;
