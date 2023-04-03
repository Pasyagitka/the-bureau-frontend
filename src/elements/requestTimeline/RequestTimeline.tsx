import { RequestStatus } from "@/types/enum/request-statuses.enum";
import TimeLineElement from "./TimeLineElement";

function RequestTimeline({ status }: { status: string }) {
  let elements;
  const requestStatuses = {
    InProcessing: "В обработке",
    Completed: "Выполнена",
    Approved: "Подтверждена",
  };
  // TODO request statuses hardcoded
  switch (status) {
    case RequestStatus.INPROCESSING: {
      elements = (
        <>
          <TimeLineElement text={requestStatuses[RequestStatus.INPROCESSING]} date="December 23, 2021" isActive />
          <TimeLineElement text={requestStatuses[RequestStatus.COMPLETED]} date="December 23, 2021" />
          <TimeLineElement text={requestStatuses[RequestStatus.APPROVED]} date="December 23, 2021" isLast />
        </>
      );
      break;
    }
    case RequestStatus.COMPLETED: {
      elements = (
        <>
          <TimeLineElement text={requestStatuses[RequestStatus.INPROCESSING]} date="December 23, 2021" isActive />
          <TimeLineElement text={requestStatuses[RequestStatus.COMPLETED]} date="December 23, 2021" isActive />
          <TimeLineElement text={requestStatuses[RequestStatus.APPROVED]} date="December 23, 2021" isLast />
        </>
      );
      break;
    }
    default: {
      elements = (
        <>
          <TimeLineElement text={requestStatuses[RequestStatus.INPROCESSING]} date="December 23, 2021" isActive />
          <TimeLineElement text={requestStatuses[RequestStatus.COMPLETED]} date="December 23, 2021" isActive />
          <TimeLineElement text={requestStatuses[RequestStatus.APPROVED]} date="December 23, 2021" isActive isLast />
        </>
      );
      break;
    }
  }
  return <ol className="items-center sm:flex">{elements}</ol>;
}

export default RequestTimeline;
