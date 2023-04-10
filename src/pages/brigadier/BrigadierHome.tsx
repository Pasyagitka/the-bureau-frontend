import BrigadierDetails from "@/components/brigadier/brigadierDetails/BrigadierDetails";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getRequests } from "@/redux/actions/brigadiers";
import { useEffect } from "react";
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

  return (
    <>
      <div className="flex w-full">
        <BrigadierDetails brigadier={brigadier} />
        <BrigadierSchedule />
      </div>
      <BrigadierRequests requests={requests} />
    </>
  );
}

export default BrigadierHome;
