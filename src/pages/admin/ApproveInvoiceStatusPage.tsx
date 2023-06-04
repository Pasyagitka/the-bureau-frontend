import SubmitButton from "@/elements/buttons/SubmitButton";
import PhotoItem from "@/elements/photoGallery/PhotoReportItem";
import Select from "@/elements/select/Select";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getItems, updateStatus } from "@/redux/actions/invoices";
import { InvoiceStatus, invoiceStatusesTitles } from "@/types/enum/invoice-statuses.enum";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ApproveInvoiceStatusPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const [statusId, setStatus] = useState<string | null>();

  const statuses = Object.values(InvoiceStatus).map((i) => ({ value: i, label: invoiceStatusesTitles[i] }));
  const { invoice } = useAppSelector((state) => state.invoices);
  const { requestReports } = useAppSelector((state) => state.requestReports);
  const existingInvoiceReceipts = useAppSelector((state) => state.invoices.invoice);

  useEffect(() => {
    dispatch(getItems(Number(params.id)));
    dispatch(get(Number(params.id)));
  }, [dispatch]);

  useEffect(() => {
    setStatus(invoice?.status);
  }, [invoice]);

  const handleSubmit = async () => {
    const res = await dispatch(updateStatus({ id: params.id, updateInvoiceDto: { status: statusId } }));
    if (!res.error) {
      navigate(-1);
    }
  };

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4 min-h-[80vh] container p-4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-700">Проверка оплаты счета</h3>
        {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">Редактировать заявку</p> */}
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-700 pb-2">Чек для счета</h3>
        {existingInvoiceReceipts?.receiptUrl ? (
          <PhotoItem src={existingInvoiceReceipts.receiptUrl} />
        ) : (
          <dt className="text-sm font-medium text-gray-500">Отсутствует</dt>
        )}
      </div>
      <div className="px-4 py-5 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Статус счёта</dt>
        <div className="col-span-6 sm:col-span-3">
          <Select data={statuses} value={statusId} defaultValue={statusId} onChange={setStatus} searchable={false} />
        </div>
      </div>
      <div className="flex justify-evenly">
        <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
      </div>
    </div>
  );
}

export default ApproveInvoiceStatusPage;
