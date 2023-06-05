import { RequestStatus, requestStatusesTitles } from "@/types/enum/request-statuses.enum";
import TimeLineElement from "./TimeLineElement";

function RequestTimeline({ status }: { status: string }) {
  let elements;
  // TODO request statuses hardcoded
  switch (status) {
    case RequestStatus.INPROCESSING: {
      elements = (
        <>
          <TimeLineElement text={requestStatusesTitles[RequestStatus.INPROCESSING]} isActive isAnimated />
          <TimeLineElement text={requestStatusesTitles[RequestStatus.ACCEPTED]} />
          <TimeLineElement text={requestStatusesTitles[RequestStatus.COMPLETED]} />
          <TimeLineElement text={requestStatusesTitles[RequestStatus.APPROVED]} isLast />
        </>
      );
      break;
    }
    case RequestStatus.ACCEPTED: {
      elements = (
        <>
          <TimeLineElement text={requestStatusesTitles[RequestStatus.INPROCESSING]} isActive />
          <TimeLineElement text={requestStatusesTitles[RequestStatus.ACCEPTED]} isActive isAnimated />
          <TimeLineElement text={requestStatusesTitles[RequestStatus.COMPLETED]} />
          <TimeLineElement text={requestStatusesTitles[RequestStatus.APPROVED]} isLast />
        </>
      );
      break;
    }
    case RequestStatus.COMPLETED: {
      elements = (
        <>
          <TimeLineElement text={requestStatusesTitles[RequestStatus.INPROCESSING]} isActive />
          <TimeLineElement text={requestStatusesTitles[RequestStatus.ACCEPTED]} isActive />
          <TimeLineElement text={requestStatusesTitles[RequestStatus.COMPLETED]} isActive isAnimated />
          <TimeLineElement text={requestStatusesTitles[RequestStatus.APPROVED]} isLast />
        </>
      );
      break;
    }
    default: {
      elements = (
        <>
          <TimeLineElement text={requestStatusesTitles[RequestStatus.INPROCESSING]} isActive />
          <TimeLineElement text={requestStatusesTitles[RequestStatus.ACCEPTED]} isActive />
          <TimeLineElement text={requestStatusesTitles[RequestStatus.COMPLETED]} isActive />
          <TimeLineElement text={requestStatusesTitles[RequestStatus.APPROVED]} isActive isLast isAnimated />
        </>
      );
      break;
    }
  }
  return <ol className="items-start sm:flex md:border-none ">{elements}</ol>;
}

export default RequestTimeline;
