import BrigadierDetails from "@/components/brigadierDetails/BrigadierDetails";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { get, getRequests } from "@/redux/actions/brigadiers";
import { useEffect } from "react";
import BrigadierRequests from "./BrigadierRequests";

function BrigadierHome() {
  const id = 3;
  const dispatch = useAppDispatch();

  const requests = useAppSelector((state) => state.brigadiers.requests);
  const brigadier = useAppSelector((state) => state.brigadiers.brigadier);

  function loadAll() {
    dispatch(getRequests(id)); // todo get current user id
    dispatch(get(id));
  }
  useEffect(loadAll, [dispatch]);

  return (
    <>
      {/* <Schedule /> */}
      <BrigadierDetails brigadier={brigadier} />
      <BrigadierRequests requests={requests} />
    </>
  );
}

export default BrigadierHome;
