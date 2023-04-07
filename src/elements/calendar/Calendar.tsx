import { useAppDispatch, useAppSelector } from "@/hooks";
import { Calendar as RSCalendar, Whisper, Popover, Badge, CustomProvider } from "rsuite";
import { ruRU } from "rsuite/esm/locales";
import { useEffect } from "react";
import { getCalendar } from "@/redux/actions/requests";
import dayjs from "dayjs";

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

const colors = {
  InProcessing: "bg-lime-500",
  Completed: "bg-yellow-500",
  Approved: "bg-blue-500",
};

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

// funtion getSheduleList(date) {
//   return
// }

function Calendar() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCalendar());
  }, [dispatch]);

  const { calendar } = useAppSelector((state) => state.requests);
  console.log(calendar);

  function renderCell(date) {
    // const list = getTodoList(date);
    const list = calendar.filter((item) => dayjs(date).isSame(dayjs(item.mountingDate).toDate(), "day"));
    console.log(list, "list");

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
              <Badge /> <b>Заявка №{item.requestId}</b> - {item.brigadier}
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
