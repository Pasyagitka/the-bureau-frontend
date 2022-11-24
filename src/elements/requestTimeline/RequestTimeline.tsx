import TimeLineElement from "./TimeLineElement";

function RequestTimeline() {
  return (
    <ol className="items-center sm:flex">
      <TimeLineElement text="In processing" date="December 23, 2021" />
      <TimeLineElement text="Completed" date="December 23, 2021" />
      <TimeLineElement text="Approved" date="December 23, 2021" isActive />
    </ol>
  );
}

export default RequestTimeline;
