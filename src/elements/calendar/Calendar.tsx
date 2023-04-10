import { useAppDispatch, useAppSelector } from "@/hooks";
import { Calendar as RSCalendar, Whisper, Popover, Badge, CustomProvider } from "rsuite";
import { ruRU } from "rsuite/esm/locales";
import { useEffect } from "react";
import { getCalendar } from "@/redux/actions/requests";
import dayjs from "dayjs";

const colors = {
  InProcessing: "yellow",
  Completed: "green",
  Approved: "blue",
};

function Calendar() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCalendar());
  }, [dispatch]);

  const { calendar } = useAppSelector((state) => state.requests);

  function renderCell(date) {
    const list = calendar.filter((item) => dayjs(date).isSame(dayjs(item.mountingDate).toDate(), "day"));

    const displayList = list.filter((item, index) => index < 2);

    if (list.length) {
      const moreCount = list.length - displayList.length;
      const moreItem = (
        <li>
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                {list.map((item, index) => (
                  <p key={index}>
                    <b>Заявка №{item.requestId}</b> - {item.brigadier}
                  </p>
                ))}
              </Popover>
            }
          >
            <a>и еще {moreCount}</a>
          </Whisper>
        </li>
      );

      return (
        <ul className="calendar-todo-list">
          {displayList.map((item, index) => (
            <li key={index}>
              <Badge color={colors[item.status]} content={`№${item.requestId}`} /> - {item.brigadier}
            </li>
          ))}
          {moreCount ? moreItem : null}
        </ul>
      );
    }

    return null;
  }

  return (
    <CustomProvider locale={ruRU}>
      <RSCalendar bordered renderCell={renderCell} className="text-sm" />
    </CustomProvider>
  );
}

export default Calendar;
