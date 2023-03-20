import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, updateByBrigadier } from "@/redux/actions/requests";
import { RequestStatus } from "@/types/enum/request-statuses.enum";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditRequestBrigadier() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const request = useAppSelector((state) => state.requests.request);

  const [statusId, setStatus] = useState();

  const statuses = Object.values(RequestStatus).map((i) => <option selected={statusId === i} value={i} label={i} />);

  useEffect(() => {
    dispatch(get(params.id));
  }, [dispatch]);

  useEffect(() => {
    setStatus(request?.status);
  }, [request]);

  const handleSubmit = async () => {
    const updateDto = { id: params.id, updateRequestByBrigadierDto: { status: statusId } };
    const res = await dispatch(updateByBrigadier(updateDto));
    if (!res.error) {
      navigate(-1);
    }
  };

  const handleStatusSelectChange = (e: string) => {
    setStatus(e);
  };

  return (
    <section className="w-full">
      <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 bg-gray-100 border-t-2 border-lime-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <h1 className="text-gray-600">Обновить статус заявки</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
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
          <hr />
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button
              type="button"
              onClick={() => handleSubmit()}
              className="py-2 px-4  bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditRequestBrigadier;
