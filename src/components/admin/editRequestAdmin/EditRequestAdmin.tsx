import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/brigadiers";
import { get, updateByAdmin } from "@/redux/actions/requests";
import { RequestStatus } from "@/types/enum/request-statuses.enum";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditRequestAdmin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const [brigadierId, setBrigadier] = useState();
  const [statusId, setStatus] = useState();

  const request = useAppSelector((state) => state.requests.request);
  const brigadiersList = useAppSelector((state) => state.brigadiers.brigadiers).map((i) => (
    <option selected={brigadierId === i.id} value={i.id} label={`${i.surname} ${i.firstname} ${i.patronymic}`} />
  ));
  brigadiersList.push(<option value={-1} selected={!brigadierId} label="No brigadier" />);

  const statuses = Object.values(RequestStatus).map((i) => <option selected={statusId === i} value={i} label={i} />);

  useEffect(() => {
    dispatch(get(params.id));
    dispatch(getAll());
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
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4 h-80vh container p-4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Edit request</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">All request details.</p>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Status</dt>
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
      <div className="px-4 py-5 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Brigadier</dt>
        <div className="col-span-6 sm:col-span-3">
          <select
            name="brigadier"
            defaultValue={brigadierId}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm text-gray-700 placeholder-gray-400"
            onChange={(e) => handleBrigadierSelectChange(Number(e.currentTarget.value))}
          >
            {brigadiersList}
          </select>
        </div>
      </div>
      <div className="flex justify-evenly">
        <button
          type="button"
          onClick={() => handleSubmit()}
          className="py-2 px-4  bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-blue-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditRequestAdmin;
