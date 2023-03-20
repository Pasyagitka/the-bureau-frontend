import BrigadierSmall from "@/elements/brigadierSmall/BrigadierSmall";
import StageBadge from "@/elements/stageBadge/StageBadge";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getAccessories, getTools } from "@/redux/actions/requests";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RequestAccessories from "../requestAccessories/RequestAccessories";
import RequestEquipment from "../requestEquipment/RequestEquipment";
import RequestTools from "../requestTools/RequestTools";
import DetailsItem from "./DetailsItem";

function RequestDetails() {
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(get(params.id));
    dispatch(getAccessories(params.id));
    dispatch(getTools(params.id));
  }, [dispatch]);

  const request = useAppSelector((state) => state.requests.request);
  const requestAccessories = useAppSelector((state) => state.requests.requestAccessories);
  const requestTools = useAppSelector((state) => state.requests.requestTools);

  // useEffect(() => {
  //   dispatch(getAccessories(params.id));
  //   dispatch(getTools(params.id));
  // }, [request]);

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Информация о заявке</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Полная информация о заявке</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <DetailsItem
            title="Cleint full name"
            value={`${request?.client?.surname} ${request?.client?.firstname} ${request?.client?.patronymic}`}
            isDark
          />
          <DetailsItem
            title="Address"
            value={`${request.address?.country}, г. ${request.address?.city}, ул.${request.address?.street}, дом ${
              request.address?.house
            }${request.address?.corpus ?? ""} ${request.address?.flat ?? ""} `}
          />
          <DetailsItem title="Email address" value={request.client?.user?.email} isDark />
          <DetailsItem title="Contact phone" value={`+${request.client?.contactNumber}`} />
          <DetailsItem title="Comment" value={request.comment} isDark />
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Стадия отделки</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex gap-3">
              <StageBadge stage={request.stage?.id} />
            </dd>
          </div>
          <DetailsItem title="Mounting date" value={request.mountingDate} />
        </dl>
      </div>
      <div />
      <hr />
      <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
        <h2 className="w-full md:w-1/3">Монтируемое оборудование</h2>
        <div className="w-full md:w-2/3">
          <RequestEquipment equipmentList={request?.requestEquipment} />
          <div />
        </div>
      </div>
      <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
        <h2 className="w-full md:w-1/3">Необходимые комплектующие</h2>
        <div className="w-full space-y-5 md:w-2/3">
          <RequestAccessories accessories={requestAccessories} />
          <div />
        </div>
      </div>
      <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
        <h2 className="w-full md:w-1/3">Необходимые инструменты</h2>
        <div className="w-full md:w-2/3">
          <RequestTools tools={requestTools} />
          <div />
        </div>
      </div>
      <div className="flex justify-center">
        <BrigadierSmall brigadier={request?.brigadier || { surname: "Не", firstname: "назначен", patronymic: "" }} />
      </div>
    </div>
  );
}

export default RequestDetails;
