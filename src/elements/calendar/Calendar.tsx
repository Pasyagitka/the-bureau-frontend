import { Calendar as RSCalendar, Whisper, Popover, Badge, CustomProvider } from "rsuite";
import { ruRU } from "rsuite/esm/locales";
import dayjs from "dayjs";
import { RequestStatus, requestStatusesColorsTable } from "@/types/enum/request-statuses.enum";
import { Link } from "react-router-dom";

function Calendar({ compact, calendar }: { compact: boolean; calendar: Array<unknown> }) {
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
                  <p key={item.requestId}>
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
          {displayList.map((item, index) => {
            const isExpired =
              dayjs(item.mountingDate).startOf("day") < dayjs().startOf("day") &&
              item.status !== RequestStatus.APPROVED &&
              item.status !== RequestStatus.COMPLETED;
            return compact ? (
              <li key={item.requestId}>
                <Whisper
                  trigger="click"
                  placement="topStart"
                  speaker={
                    <Popover title={`Заявка №${item.requestId}`}>
                      {/* <Link to={`brigadier/${item.brigadier}`}>{item.brigadier}</Link> */}
                    </Popover>
                  }
                >
                  <Badge
                    color={isExpired ? "red" : requestStatusesColorsTable[item.status]}
                    content={`${item.requestId}`}
                  />
                </Whisper>
              </li>
            ) : (
              <li key={item.requestId}>
                <Whisper
                  trigger="click"
                  placement="top"
                  speaker={
                    <Popover>
                      <Link to={`/admin/requests/${item.requestId}`}>Заявка №{item.requestId}</Link>
                    </Popover>
                  }
                >
                  <p>
                    <Badge
                      color={isExpired ? "red" : requestStatusesColorsTable[item.status]}
                      content={`№${item.requestId}`}
                    />{" "}
                    - {item.brigadier}
                  </p>
                </Whisper>
              </li>
            );
          })}
          {moreCount ? moreItem : null}
        </ul>
      );
    }

    return null;
  }

  return (
    <CustomProvider locale={ruRU}>
      <RSCalendar compact={compact} bordered renderCell={(date) => renderCell(date)} className="text-sm" />
    </CustomProvider>
  );
}

export default Calendar;
