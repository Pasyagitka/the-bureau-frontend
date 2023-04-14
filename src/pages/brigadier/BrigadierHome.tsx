import BrigadierDetails from "@/components/brigadier/brigadierDetails/BrigadierDetails";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getRequests } from "@/redux/actions/brigadiers";
import { useEffect } from "react";
import AccentButton from "@/elements/buttons/AccentButton";
import { getFullReport } from "@/redux/actions/requests";
import BrigadierRequests from "./BrigadierRequests";
import BrigadierSchedule from "./BrigadierSchedule";

function BrigadierHome() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);
  const requests = useAppSelector((state) => state.brigadiers.requests);
  const brigadier = useAppSelector((state) => state.brigadiers.brigadier);

  function loadAll() {
    dispatch(getRequests(user?.brigadier?.id));
    dispatch(get(user?.brigadier?.id));
  }
  useEffect(loadAll, [user]);

  const handleDownload = (id: number) => {
    dispatch(getFullReport(id));
  };

  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-col w-4/5">
          <BrigadierDetails brigadier={brigadier} />
          <div className="w-full h-16 mx-12">
            <AccentButton to="invoice/create" title="Запросить счет на комплектующие" />
          </div>
        </div>
        <BrigadierSchedule />
      </div>
      <BrigadierRequests requests={requests} handleDownload={(id) => handleDownload(id)} />
    </>
  );
}

export default BrigadierHome;
