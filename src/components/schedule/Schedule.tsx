import { useEffect } from "react";
import { getCalendar } from "@/redux/actions/requests";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Calendar from "@/elements/calendar/Calendar";

function Schedule() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCalendar());
  }, [dispatch]);

  const { calendar } = useAppSelector((state) => state.requests);

  return (
    <div className="w-full">
      <p className="text-4xl font-bold text-gray-700 mb-4">Расписание</p>
      <Calendar calendar={calendar} compact={false} />
    </div>
  );
}

export default Schedule;
