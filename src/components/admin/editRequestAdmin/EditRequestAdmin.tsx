import SubmitButton from "@/elements/buttons/SubmitButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAll, getRecommended } from "@/redux/actions/brigadiers";
import { get, getScheduleForRequest, updateByAdmin } from "@/redux/actions/requests";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatepickerRange from "@/elements/datepickerRange/DatepickerRange";
import dayjs from "dayjs";
import BrigadierHistory from "./BrigadierHistory";

function EditRequestAdmin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const [brigadierId, setBrigadier] = useState();
  const [statusId, setStatus] = useState();
  const [dates, setValue] = useState({
    startDate: null,
  });

  const history = useAppSelector((state) => state.requests.brigadierHistory);
  const { recommended } = useAppSelector((state) => state.brigadiers);
  const request = useAppSelector((state) => state.requests.request);
  // const brigadiersList = useAppSelector((state) => state.brigadiers.brigadiers).map((i) => (
  //   <option selected={brigadierId === i.id} value={i.id} label={`${i.surname} ${i.firstname} ${i.patronymic}`} />
  // ));
  const brigadiersList = recommended.map((i) => (
    <option selected={brigadierId === i.id} value={i.id} label={i.full_name} />
  ));
  brigadiersList.push(<option value={-1} selected={!brigadierId} label="Не назначен" />);

  useEffect(() => {
    dispatch(get(params.id));
    dispatch(getAll());
    dispatch(getRecommended(request?.mountingDate));
  }, [dispatch]);

  useEffect(() => {
    setBrigadier(request?.brigadier?.id);
    setStatus(request?.status);
    setValue({ startDate: request?.mountingDate });
    dispatch(getRecommended(request?.mountingDate));
    dispatch(getScheduleForRequest(request?.id));
  }, [request]);

  useEffect(() => {
    dispatch(getRecommended(dates?.startDate || request?.mountingDate));
  }, [dates]);

  const handleSubmit = async () => {
    const updateRequestByAdminDto =
      brigadierId === null || brigadierId === undefined
        ? { status: statusId }
        : { brigadier: brigadierId === -1 ? null : brigadierId, status: statusId };
    const updateDto = {
      id: params.id,
      updateRequestByAdminDto: {
        ...updateRequestByAdminDto,
        mountingDate:
          dayjs(dates.startDate).startOf("date") === dayjs(request.mountingDate).startOf("date")
            ? null
            : dates.startDate,
      },
    };
    console.log(
      dayjs(dates.startDate).startOf("date"),
      dayjs(request.mountingDate).startOf("date"),
      dayjs(dates.startDate).startOf("date") === dayjs(request.mountingDate).startOf("date"),
      updateDto.mountingDate
    );
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

  const availableBrigadiers = recommended?.map((item) => (
    <li className="flex flex-row h-full">
      <div className="flex justify-between p-2 gap-5 w-full">
        <div className="text-sm">{item.id}</div>
        <div className="text-sm">{item.full_name}</div>
        <div className="text-gray-600 text-sm">заявок на этой неделе: {item.week_request_count}</div>
      </div>
    </li>
  ));

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4 min-h-80vh container p-4 mb-12 h-80vh">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Редактировать заявку</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Полная информация о заявке</p>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Перенести дату монтажа</dt>
        <div className="px-10n w-1/4 my-4">
          <DatepickerRange value={dates} handleValueChange={handleDateChange} />
        </div>
        <dt className="text-sm font-medium text-gray-500">
          Перед сохранением согласуйте новую дату с клиентом звонком: +{request?.client?.contactNumber},{" "}
          {request?.client?.firstname} {request?.client?.patronymic} {request?.client?.surname}
        </dt>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Бригадир</dt>
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
      {history && history.length > 0 && (
        <div className="px-4 py-5 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">История работы над заявкой</dt>
          <BrigadierHistory history={history} />
        </div>
      )}
      <div className="px-4 py-5 sm:px-6">
        {availableBrigadiers && availableBrigadiers.length > 0 ? (
          <>
            <dt className="text-sm font-medium text-gray-500">Свободные бригадиры на выбранную дату монтажа:</dt>
            <div className="container flex flex-col w-1/2 items-center justify-center bg-white rounded-lg shadow p-2 my-2">
              <ul className="flex flex-col divide divide-y w-full">{availableBrigadiers}</ul>
            </div>
          </>
        ) : (
          <dt className="text-sm font-medium text-gray-500">
            Свободных бригадиров на дату монтажа нет, необходимо выбрать другую дату монтажа.
          </dt>
        )}
      </div>

      <div className="flex justify-evenly">
        <SubmitButton title="Сохранить" handleSubmit={() => handleSubmit()} />
      </div>
    </div>
  );
}

export default EditRequestAdmin;
