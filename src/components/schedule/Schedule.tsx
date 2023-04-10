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
    <div className="container w-full h-full bg-white p-12 flex-col flex rounded">
      <Calendar calendar={calendar} compact={false} />
    </div>
  );
}

export default Schedule;
