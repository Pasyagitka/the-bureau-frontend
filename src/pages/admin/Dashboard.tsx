/* eslint-disable jsx-a11y/control-has-associated-label */

import Schedule from "@/components/schedule/Schedule";

export default function Dashboard() {
  return (
    <div className="container w-full h-full bg-white p-12 flex-col flex rounded">
      <Schedule />
    </div>
  );
}
