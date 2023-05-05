import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getRequests } from "@/redux/actions/brigadiers";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import noImage from "images/noImage.png";
import RequestCompact from "../../components/admin/requestList/RequestCompact";
import DetailsItem from "../../elements/detailsItem/DetailsItem";

function BrigadierDetailsPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { brigadier } = useAppSelector((state) => state.brigadiers);
  const { requests } = useAppSelector((state) => state.brigadiers);

  function load() {
    dispatch(get(id));
    dispatch(getRequests(id));
  }
  useEffect(load, [dispatch]);

  const listItems = requests.map((item) => <RequestCompact key={item.id} request={item} showButtons={false} />);

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg w-3/4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Информация о бригадире</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Полная информация о бригадире</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div
            className="bg-cover w-1/6 bg-center h-56 mx-auto"
            style={{
              backgroundImage: `url(${brigadier.avatarUrl || noImage})`,
            }}
          />
          <DetailsItem
            title="ФИО"
            value={`${brigadier.surname} ${brigadier.firstname} ${brigadier.patronymic}`}
            isDark
          />
          <DetailsItem title="Email" value={brigadier.user?.email} />
          <DetailsItem title="Контактный номер" value={`+${brigadier.contactNumber}`} isDark />
        </dl>
      </div>
      <div className="w-1/2 flex flex-col justify-center mx-auto gap-5 my-5">{listItems}</div>
    </div>
  );
}

export default BrigadierDetailsPage;
