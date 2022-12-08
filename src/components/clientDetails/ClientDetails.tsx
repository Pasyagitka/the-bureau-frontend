import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getRequests } from "@/redux/actions/clients";
import { ClientDto } from "@/types/dto/client/clientDto";
import { RequestDto } from "@/types/dto/requestDto";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsItem from "../requestDetails/DetailsItem";
import RequestSmall from "../requestList/RequestSmall";

function ClientDetails() {
  const params = useParams();
  const dispatch = useAppDispatch();

  const client: ClientDto = useAppSelector((state) => state.clients.client);
  const requests: RequestDto = useAppSelector((state) => state.clients.requests);

  function load() {
    dispatch(get(params.id));
    dispatch(getRequests(params.id));
  }
  useEffect(load, [dispatch]);

  const listItems = requests.map((item) => <RequestSmall key={item.id} request={item} />);

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
        <h3 className="text-lg font-medium leading-6 text-gray-900">Client Details</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">All client details.</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <DetailsItem title="Full name" value={`${client.surname} ${client.firstname} ${client.patronymic}`} isDark />
          <DetailsItem title="Email address" value={client.user?.email} />
          <DetailsItem title="Contact phone" value={`+${client.contactNumber}`} isDark />
        </dl>
      </div>
      <div>
        {listItems}
        {/* <RequestSmall />
        <RequestSmall />
        <RequestSmall /> */}
      </div>
    </div>
  );
}

export default ClientDetails;
