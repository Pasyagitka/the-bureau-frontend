/* eslint-disable consistent-return */
import SubmitButton from "@/elements/buttons/SubmitButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, updateByBrigadier } from "@/redux/actions/requests";
import { RequestStatus, requestStatusesTitles } from "@/types/enum/request-statuses.enum";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Uploader } from "rsuite";
import CameraRetroIcon from "@rsuite/icons/legacy/CameraRetro";
import { getAll as getAllRequestReports, patch } from "@/redux/actions/requestReports";
import PhotoGallery from "@/elements/photoGallery/PhotoGallery";
import Select from "@/elements/select/Select";

function EditRequestByBrigadierPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const request = useAppSelector((state) => state.requests.request);
  const existingRequestReports = useAppSelector((state) => state.requestReports.requestReports);

  const [statusId, setStatus] = useState<string | null>();
  const [files, setFiles] = useState([]);

  const statuses = Object.values(RequestStatus).flatMap((i) =>
    i !== RequestStatus.APPROVED && i !== RequestStatus.INPROCESSING
      ? [{ value: i, label: requestStatusesTitles[i] }]
      : []
  );
  console.log(statuses);

  useEffect(() => {
    dispatch(get(Number(params.id)));
    dispatch(getAllRequestReports(Number(params.id)));
  }, [dispatch]);

  useEffect(() => {
    setStatus(request?.status);
  }, [request]);

  // useEffect(() => {
  //   async function fetchData() {
  //     setFiles(existingRequestReports?.map((i) => getBlob(i)));
  //     const res = await Promise.all(existingRequestReports?.map((i) => getBlob(i.url)));
  //     console.log(res);
  //   }
  //   fetchData();
  // }, [existingRequestReports]);

  // useEffect(() => {
  //   setFiles(existingRequestReports.map((i) => ({ ...i })));
  // }, [existingRequestReports]);

  const getBlob = async (url: string) => (await fetch(url)).blob();

  const handleSubmit = async () => {
    console.log("statusId", statusId);
    let isSuccess = true;
    if (statusId !== RequestStatus.APPROVED) {
      const updateDto = {
        id: params.id,
        updateRequestByBrigadierDto: {
          status: statusId,
        },
      };
      const updateResponse = await dispatch(updateByBrigadier(updateDto));
      isSuccess = isSuccess && !updateResponse.error;
    }
    console.log(files);
    if (files?.length > 0) {
      const formData = new FormData();
      files.forEach((file, i) => {
        formData.append(`files`, file.blobFile, file.name);
      });
      console.log(formData);
      const updateFiles = await dispatch(patch({ requestId: params.id, files: formData }));
      isSuccess = isSuccess && !updateFiles.error;
    }
    if (isSuccess) {
      navigate(-1);
    }
  };

  return (
    <section className="w-full">
      <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-lime-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600 text-center">Обновить статус заявки</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          {statusId === RequestStatus.APPROVED ? (
            <h1 className="text-gray-600 w-full text-center">Нельзя сменить статус заявки</h1>
          ) : (
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                <Select
                  data={statuses}
                  value={statusId}
                  defaultValue={statusId}
                  onChange={setStatus}
                  searchable={false}
                  label="статус заявки"
                />
              </div>
            </div>
          )}
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500  md:space-y-0">
            <h1 className="text-gray-600 w-full text-center">Отчетность по заявке</h1>
            {existingRequestReports && existingRequestReports.length > 0 ? (
              <PhotoGallery images={existingRequestReports} />
            ) : (
              <dt className="text-sm font-medium text-gray-500">Отсутствует</dt>
            )}
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500  md:space-y-0">
            <h1 className="text-gray-600 w-full text-center">Изменить отчетность</h1>
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

export default EditRequestByBrigadierPage;
