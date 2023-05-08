/* eslint-disable consistent-return */
import SubmitButton from "@/elements/buttons/SubmitButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get } from "@/redux/actions/requests";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAll as getAllRequestReports } from "@/redux/actions/requestReports";
import PhotoGallery from "@/elements/photoGallery/PhotoGallery";
import { Uploader } from "rsuite";
import CameraRetroIcon from "@rsuite/icons/legacy/CameraRetro";

function CommitPaidInvoicePage() {
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(get(Number(params.id)));
    dispatch(getAllRequestReports(Number(params.id)));
  }, [dispatch]);

  const handleSubmit = async () => {};
  const existingRequestReports = useAppSelector((state) => state.requestReports.requestReports);
  const [files, setFiles] = useState([]);

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
            {existingRequestReports && existingRequestReports.length > 0 ? (
              <PhotoGallery images={existingRequestReports} />
            ) : (
              <dt className="text-sm font-medium text-gray-500">Отсутствует</dt>
            )}
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500  md:space-y-0">
            <h1 className="text-gray-600 w-full text-center">Обновить чек</h1>
            <div className="flex">
              <div className="inline-flex items-center space-x-4">
                <Uploader
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
                </Uploader>
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
