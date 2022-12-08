import BrigadierSmall from "@/elements/brigadierSmall/BrigadierSmall";
import DatepickerRange from "@/elements/datepickerRange/DatepickerRange";
import StageBadge from "@/elements/stageBadge/StageBadge";
import { useState } from "react";
import { useParams } from "react-router-dom";
import RequestEquipment from "../requestEquipment/RequestEquipment";
import DetailsItem from "./DetailsItem";

function RequestDetails() {
  const params = useParams();
  console.log("params.id", params.id);

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
        <h3 className="text-lg font-medium leading-6 text-gray-900">Request Details</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">All request details.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <DetailsItem title="Full name" value="Surname Firstname Patronymic" isDark />
          <DetailsItem title="Address" value="Country, City, Street, House, Corpus, Flat" />
          <DetailsItem title="Email address" value="email@email.com" isDark />
          <DetailsItem title="Contact phone" value="+375445634337" />
          <DetailsItem title="Comment" value="Comment...Comment" isDark />
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Stage</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex gap-3">
              <StageBadge stage={3} />
            </dd>
          </div>
        </dl>
      </div>
      <div>
        <DatepickerRange value={value} handleValueChange={handleValueChange} />
      </div>
      <div>
        <dt className="text-sm font-medium text-gray-500">Mounting date</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex gap-3">
          <input type="date" />
        </dd>
      </div>
      <hr />
      <div className="my-5">
        <RequestEquipment equipmentList={[]} />
      </div>
      <div className="flex justify-center">
        <BrigadierSmall />
      </div>
    </div>
  );
}

export default RequestDetails;
