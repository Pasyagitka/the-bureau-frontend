/* eslint-disable consistent-return */
import SubmitButton from "@/elements/buttons/SubmitButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get, uploadReceipt } from "@/redux/actions/invoices";
import { toast } from "react-toastify";
import Avatar from "@/elements/avatar/Avatar";
import PhotoItem from "@/elements/photoGallery/PhotoReportItem";

function CommitPaidInvoicePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    dispatch(get(Number(params.id)));
    // dispatch(getAllRequestReports(Number(params.id)));
  }, [dispatch]);

  const existingInvoiceReceipts = useAppSelector((state) => state.invoices.invoice);
  // const [files, setFiles] = useState([]);
  const [fileInfo, setFileInfo] = useState(null);

  const handleSubmit = async () => {
    let updateReceiptResult = null;
    if (fileInfo?.length > 0) {
      const formData = new FormData();
      formData.append(`file`, fileInfo[0].blobFile, fileInfo[0].name);
      updateReceiptResult = await dispatch(uploadReceipt({ id: Number(params.id), file: formData }));
    } else {
      toast.error("Загрузите чек");
    }
    if (updateReceiptResult && !updateReceiptResult.error) {
      navigate(-1);
    }
  };

  return (
    <section className="w-full">
      <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-lime-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600 text-center">Обновить чек по счету</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500  md:space-y-0">
            <h1 className="text-gray-600 w-full text-center">Чек по счету</h1>
            {existingInvoiceReceipts?.receiptUrl ? (
              <PhotoItem src={existingInvoiceReceipts.receiptUrl} />
            ) : (
              <dt className="text-sm font-medium text-gray-500">Отсутствует</dt>
            )}
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500  md:space-y-0">
            <h1 className="text-gray-600 w-full text-center">Обновить чек</h1>
            <div className="flex">
              <div className="inline-flex items-center space-x-4">
                <Avatar fileInfo={fileInfo} setFileInfo={setFileInfo} />
                {/* <Uploader
                  multiple
                  listType="picture"
                  fileList={files}
                  onChange={setFiles}
                  action=""
                  defaultFileList={files}
                  autoUpload={false}
                  draggable
                >
                  <button type="button">
                    <CameraRetroIcon />
                  </button>
                </Uploader> */}
              </div>
            </div>
          </div>
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommitPaidInvoicePage;
