import SubmitButton from "@/elements/buttons/SubmitButton";
import PhotoGallery from "@/elements/photoGallery/PhotoGallery";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/brigadiers";
import { get, updateByAdmin } from "@/redux/actions/requests";
import { getAll as getAllReports } from "@/redux/actions/requestReports";
import { RequestStatus, requestStatusesTitles } from "@/types/enum/request-statuses.enum";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BrigadierItem from "../brigadierList/BrigadierItem";

function ApproveRequestStatusAdmin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const [brigadierId, setBrigadier] = useState();
  const [statusId, setStatus] = useState();

  const request = useAppSelector((state) => state.requests.request);
  const { requestReports } = useAppSelector((state) => state.requestReports);
  const { brigadier } = request;
  // const brigadier = useAppSelector((state) => state.brigadiers.brigadier);
  const statuses = Object.values(RequestStatus).map((i) => (
    <option selected={statusId === i} value={i} label={requestStatusesTitles[i]} />
  ));

  useEffect(() => {
    dispatch(get(params.id));
    dispatch(getAll());
    dispatch(getAllReports(params.id));
  }, [dispatch]);

  useEffect(() => {
    setBrigadier(request?.brigadier?.id);
    setStatus(request?.status);
  }, [request]);

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

  const handleBrigadierSelectChange = (e: number) => {
    setBrigadier(Number(e));
    console.log(brigadierId);
  };

  const handleStatusSelectChange = (e: string) => {
    setStatus(e);
  };

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4 min-h-80vh container p-4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Контроль качества и подтверждение выполнения заявки
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Редактировать заявку</p>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 pb-2">Исполнитель</h3>
        <div className="flex grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {brigadier ? (
            <>
              <BrigadierItem key={brigadier?.id} brigadier={brigadier} clickTitle="" />
              {/* <dt className="text-sm font-medium text-gray-500 py-5">Примечание бригадира:</dt> */}
            </>
          ) : (
            <dt className="text-sm font-medium text-gray-500">Исполнитель не назначен</dt>
          )}
        </div>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 pb-2">Отчетность по заявке</h3>
        {requestReports && requestReports.length > 0 ? (
          <PhotoGallery images={requestReports} />
        ) : (
          <dt className="text-sm font-medium text-gray-500">Отсутствует</dt>
        )}
      </div>
      <div className="px-4 py-5 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Статус</dt>
        <div className="col-span-6 sm:col-span-3">
          <select
            name="status"
            defaultValue={statusId}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm text-gray-700 placeholder-gray-400"
            onChange={(e) => handleStatusSelectChange(e.currentTarget.value)}
          >
            {statuses}
          </select>
        </div>
      </div>
      <div className="flex justify-evenly">
        <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
      </div>
    </div>
  );
}

export default ApproveRequestStatusAdmin;
