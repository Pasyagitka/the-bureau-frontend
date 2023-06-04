import SubmitButton from "@/elements/buttons/SubmitButton";
import PhotoGallery from "@/elements/photoGallery/PhotoGallery";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { clearBrigadierState, getAll } from "@/redux/actions/brigadiers";
import { clearState as clearRequestState, get, updateByAdmin } from "@/redux/actions/requests";
import { clearRequestReportsState, getAll as getAllReports } from "@/redux/actions/requestReports";
import { RequestStatus, requestStatusesTitles } from "@/types/enum/request-statuses.enum";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Select from "@/elements/select/Select";
import BrigadierItem from "../../components/admin/brigadierList/BrigadierItem";

function ApproveRequestStatusAdminPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const [brigadierId, setBrigadier] = useState<number | null>();
  const [statusId, setStatus] = useState<string | null>();

  const request = useAppSelector((state) => state.requests.request);
  const { requestReports } = useAppSelector((state) => state.requestReports);
  const { brigadier } = request;

  const statuses = Object.values(RequestStatus).map((i) => ({ value: i, label: requestStatusesTitles[i] }));
  console.log(statuses);

  useEffect(() => {
    dispatch(clearRequestState());
    dispatch(clearRequestReportsState());
    dispatch(clearBrigadierState());
    dispatch(get(Number(params.id)));
    dispatch(getAll());
    dispatch(getAllReports(Number(params.id)));
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

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4 min-h-[80vh] container p-4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-700">
          Контроль качества и подтверждение выполнения заявки
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Редактировать заявку</p>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-700 pb-2">Исполнитель</h3>
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
        <h3 className="text-lg font-medium leading-6 text-gray-700 pb-2">Отчетность по заявке</h3>
        {requestReports && requestReports.length > 0 ? (
          <PhotoGallery images={requestReports} />
        ) : (
          <dt className="text-sm font-medium text-gray-500">Отсутствует</dt>
        )}
      </div>
      <div className="px-4 py-5 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Статус</dt>
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

export default ApproveRequestStatusAdminPage;
