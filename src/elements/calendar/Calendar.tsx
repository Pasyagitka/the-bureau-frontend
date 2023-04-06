import { useAppDispatch, useAppSelector } from "@/hooks";
import { getCalendar } from "@/redux/actions/requests";
import { useEffect } from "react";
import { Calendar as RSCalendar, Whisper, Popover, Badge, CustomProvider } from "rsuite";
import { ruRU } from "rsuite/esm/locales";

// const locale = {
//   sunday: "Воскресенье",
//   monday: "Понедельник",
//   tuesday: "Вторник",
//   wednesday: "Среда",
//   thursday: "Чертверг",
//   friday: "Пятница",
//   saturday: "Суббота",
//   ok: "ОК",
//   today: "Сегодня",
//   yesterday: "Вчера",
//   hours: "ч",
//   minutes: "м",
//   seconds: "с",
//   formattedMonthPattern: "MMM yyyy",
//   formattedDayPattern: "dd.mm.yyyy",
//   dateLocale: ru,
// };

function getTodoList(date) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: "10:30 am", title: "Meeting" },
        { time: "12:00 pm", title: "Lunch" },
      ];
    case 15:
      return [
        { time: "09:30 pm", title: "Products Introduction Meeting" },
        { time: "12:30 pm", title: "Client entertaining" },
        { time: "02:00 pm", title: "Product design discussion" },
        { time: "05:00 pm", title: "Product test and acceptance" },
        { time: "06:30 pm", title: "Reporting" },
        { time: "10:00 pm", title: "Going home to walk the dog" },
      ];
    default:
      return [];
  }
}

function Calendar() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCalendar());
  }, [dispatch]);

  const { calendar } = useAppSelector((state) => state.requests);

  function renderCell(date) {
    const list = getTodoList(date);
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
                    <b>{item.requestId}</b> - {item.brigadierId}
                  </p>
                ))}
              </Popover>
            }
          >
            <a>{moreCount} more</a>
          </Whisper>
        </li>
      );

      return (
        <ul className="calendar-todo-list">
          {displayList.map((item, index) => (
            <li key={index}>
              <Badge /> <b>{item.requestId}</b> - {item.brigadierId}
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
