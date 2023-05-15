/* eslint-disable jsx-a11y/control-has-associated-label */

import Schedule from "@/components/schedule/Schedule";
import Statistics from "../../components/admin/statistics/Statistics";

export default function DashboardPage() {
  return (
    <div className="container w-full h-full bg-white p-12 flex-col flex rounded">
      <Statistics />
      <Schedule />
    </div>
  );
}
