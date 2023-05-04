import { useEffect } from "react";
import { getCalendarForBrigadier } from "@/redux/actions/requests";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Calendar from "@/elements/calendar/Calendar";

function BrigadierSchedule() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getCalendarForBrigadier(user?.brigadier?.id));
  }, [dispatch]);

  const { calendar } = useAppSelector((state) => state.requests);

  return (
    <div className="w-full md:w-1/5">
      <h4 className="text-xl font-bold text-gray-800 mb-4 md:text-right px-4">Расписание заявок</h4>
      <Calendar compact calendar={calendar} />
    </div>
  );
}

export default BrigadierSchedule;
