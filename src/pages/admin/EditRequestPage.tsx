import SubmitButton from "@/elements/buttons/SubmitButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { clearBrigadierState, getAll, getRecommended } from "@/redux/actions/brigadiers";
import { clearState, get, getScheduleForRequest, updateByAdmin } from "@/redux/actions/requests";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import Loader from "@/elements/loader/Loader";
import useDidMountEffect from "@/hooks/useDidMountEffect";
import CustomDatepicker from "@/elements/customDatepicker/CustomDatepicker";
import Select from "@/elements/select/Select";
import BrigadierHistory from "../../components/admin/requestWorkHistory/BrigadierHistory";

function EditRequestAdminPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  const request = useAppSelector((state) => state.requests.request);

  const [isLoading, setLoading] = useState(true);

  const [brigadierId, setBrigadier] = useState<number | null>();
  const [statusId, setStatus] = useState<string | null>();

  const [newMountingDate, setNewMountingDate] = useState<Date | null>(null);

  const history = useAppSelector((state) => state.requests.brigadierHistory);
  const { recommended } = useAppSelector((state) => state.brigadiers);
  const { brigadiers } = useAppSelector((state) => state.brigadiers);
  // const brigadiersList = useAppSelector((state) => state.brigadiers.brigadiers).map((i) => (
  //   <option selected={brigadierId === i.id} value={i.id} label={`${i.surname} ${i.firstname} ${i.patronymic}`} />
  // ));
  // const brigadiersList = recommended.map((i) => (
  //   <option selected={brigadierId === i.id} value={i.id} label={i.full_name} />
  // ));
  // brigadiersList.push(<option value={-1} selected={!brigadierId} label="Не назначен" />);

  const brigadiersList = brigadiers.map((i) => ({ label: `${i.surname} ${i.firstname} ${i.patronymic}`, value: i.id }));
  const recommendesIds = recommended.map((i) => i.id);
  const disabledList = brigadiers.filter((i) => !recommendesIds.includes(i.id)).map((i) => i.id);

  useEffect(() => {
    async function fetchData() {
      await dispatch(clearState());
      await dispatch(clearBrigadierState());
      await dispatch(get(Number(params.id)));
      await dispatch(getAll());
      await dispatch(getScheduleForRequest(Number(params.id)));
      // await dispatch(getRecommended(request?.mountingDate));
      // setLoading(false);
    }
    fetchData();
  }, [dispatch]);

  useDidMountEffect(() => {
    dispatch(getRecommended(request?.mountingDate));
    setBrigadier(request?.brigadier?.id);
    setStatus(request?.status);
    setNewMountingDate(dayjs(request?.mountingDate).toDate());
    setLoading(false);
  }, [request]);

  useEffect(() => {
    dispatch(getRecommended(newMountingDate || request?.mountingDate));
  }, [newMountingDate]);

  const handleSubmit = async () => {
    const updateRequestByAdminDto = { brigadier: brigadierId, status: statusId };
    console.log(updateRequestByAdminDto);
    const updateDto = {
      id: params.id,
      updateRequestByAdminDto: {
        ...updateRequestByAdminDto,
        mountingDate:
          dayjs(newMountingDate).startOf("date") === dayjs(request.mountingDate).startOf("date")
            ? null
            : newMountingDate,
      },
    };
    const res = await dispatch(updateByAdmin(updateDto));
    if (!res.error) {
      navigate(-1);
    }
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
    console.log(newValue);
    setNewMountingDate(newValue);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg in-h-80vh container p-4 mb-12 h-100vh">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-700">Редактировать заявку</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Полная информация о заявке</p>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Перенести дату монтажа</dt>
        <div className="px-10n w-1/4 my-4">
          {request?.mountingDate && (
            <CustomDatepicker
              value={newMountingDate}
              defaultValue={newMountingDate}
              handleValueChange={handleDateChange}
            />
          )}
          {/* <DatePicker style={{ width: 200 }} isoWeek value={dates} onChange={handleDateChange} /> */}
        </div>
        {request?.client && (
          <dt className="text-sm font-medium text-gray-500">
            Перед сохранением согласуйте новую дату с клиентом звонком: +{request?.client?.contactNumber},{" "}
            {request?.client?.firstname} {request?.client?.patronymic} {request?.client?.surname}
          </dt>
        )}
      </div>
      <div className="px-4 py-5 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Бригадир-исполнитель</dt>
        <div className="col-span-6 sm:col-span-3">
          {/* <select
            name="brigadier"
            defaultValue={brigadierId}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm text-gray-700 placeholder-gray-400"
            onChange={(e) => handleBrigadierSelectChange(Number(e.currentTarget.value))}
          >
            {brigadiersList}
          </select> */}
          {brigadiersList && brigadiersList.length > 0 && (
            <Select
              data={brigadiersList}
              value={brigadierId}
              defaultValue={request.brigadier?.id}
              onChange={setBrigadier}
              searchable
              cleanable
              disabledItemValues={disabledList}
            />
          )}
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

export default EditRequestAdminPage;
