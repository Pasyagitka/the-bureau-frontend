/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { useAppSelector } from "@/hooks";
import { getAll } from "@/redux/actions/brigadiers";
import { getWeeklyReport } from "@/redux/actions/requests";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Calendar() {
  const dispatch = useDispatch();

  const days = {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
    7: "Sun",
  };

  useEffect(() => {
    dispatch(getWeeklyReport());
    dispatch(getAll());
  }, [dispatch]);

  const reportData = useAppSelector((state) => state.requests.weeklyReport);
  const brigadiers = useAppSelector((state) => state.brigadiers.brigadiers);

  const results = {};
  if (reportData) {
    reportData.forEach((i) => {
      const { brigadierId, day, count } = i;
      results[brigadierId] = results[brigadierId] || {};
      results[brigadierId].d = results[brigadierId].d || [];
      results[brigadierId].d.push({ x: days[day], y: count });
    });
  }

  const data = brigadiers.map((i) => {
    const template = {
      id: i.id,
      data: [],
    };
    if (results[i.id]?.d) {
      template.data.push(...results[i.id]?.d);
    }
    return template;
  });

  data.push({
    data: [{ x: "Mon" }, { x: "Tue" }, { x: "Wed" }, { x: "Thu" }, { x: "Fri" }, { x: "Sat" }, { x: "Sun" }],
  });

  console.log(results, data);

  return (
    <div className="h-70vh w-4/5 mx-auto">
      <ResponsiveHeatMap
        data={data}
        margin={{ top: 60, right: 90, bottom: -70, left: 90 }}
        valueFormat=">-.2s"
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
          legend: "Day of week",
          legendOffset: 16,
        }}
        axisRight={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "brigadier",
          legendPosition: "middle",
          legendOffset: 70,
        }}
        colors={{
          type: "diverging",
          scheme: "yellow_green",
          divergeAt: 0.2,
          minValue: 0,
          maxValue: 7,
        }}
        borderColor={{
          from: "color",
          modifiers: [["brighter", 3]],
        }}
        emptyColor="#fff"
      />
    </div>
  );
}

export default Calendar;