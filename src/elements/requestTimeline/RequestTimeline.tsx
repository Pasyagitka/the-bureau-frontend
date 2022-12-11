import { RequestStatus } from "@/types/enum/request-statuses.enum";
import TimeLineElement from "./TimeLineElement";

function RequestTimeline({ status }: { status: string }) {
  let elements;
  switch (status) {
    case RequestStatus.INPROCESSING: {
      elements = (
        <>
          <TimeLineElement text="In processing" date="December 23, 2021" isActive />
          <TimeLineElement text="Completed" date="December 23, 2021" />
          <TimeLineElement text="Approved" date="December 23, 2021" isLast />
        </>
      );
      break;
    }
    case RequestStatus.COMPLETED: {
      elements = (
        <>
          <TimeLineElement text="In processing" date="December 23, 2021" isActive />
          <TimeLineElement text="Completed" date="December 23, 2021" isActive />
          <TimeLineElement text="Approved" date="December 23, 2021" isLast />
        </>
      );
      break;
    }
    default: {
      elements = (
        <>
          <TimeLineElement text="In processing" date="December 23, 2021" isActive />
          <TimeLineElement text="Completed" date="December 23, 2021" isActive />
          <TimeLineElement text="Approved" date="December 23, 2021" isActive isLast />
        </>
      );
      break;
    }
  }
  return <ol className="items-center sm:flex">{elements}</ol>;
}

export default RequestTimeline;
