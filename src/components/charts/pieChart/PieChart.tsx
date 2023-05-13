/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState } from "react";
import Pie from "@visx/shape/lib/shapes/Pie";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

const chartData = [
  { name: "В обработке", miniTitle: 200, color: "rgba(93,30,91,1)", centerTitle: 1.48 },
  { name: "Принята бригадиром", miniTitle: 5, color: "rgba(93,30,91,0.8)", centerTitle: 37.6 },
  { name: "Выполнена", miniTitle: 0.005, color: "rgba(93,30,91,0.6)", centerTitle: 37363 },
  { name: "Подтверждена", miniTitle: 0.005, color: "rgba(93,30,91,0.6)", centerTitle: 37363 },
];

const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };

export type PieProps = {
  width: number;
  height: number;
  margin?: typeof defaultMargin;
  animate?: boolean;
};

export default function PieChart({ width, height, margin = defaultMargin }: PieProps) {
  if (width < 10) return null;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const [active, setActive] = useState(null);
  const half = width / 2;

  return (
    <svg width={width} height={width}>
      {/* <GradientBackground id="visx-pie-gradient" />
      <rect rx={14} width={width} height={height} fill="url('#visx-pie-gradient')" /> */}
      <Group top={half} left={half}>
        <Pie
          data={chartData}
          pieValue={(data) => data.miniTitle * data.centerTitle}
          outerRadius={half}
          innerRadius={({ data }) => {
            const size = active && data.name === active.name ? 68 : 50;
            return half - size;
          }}
          cornerRadius={3}
          padAngle={0.05}
        >
          {(pie) =>
            pie.arcs.map((arc) => {
              const [centroidX, centroidY] = pie.path.centroid(arc);
              return (
                <g
                  key={arc.data.name}
                  onMouseEnter={() => setActive(arc.data)}
                  onMouseLeave={() => setActive(null)}
                  style={{ cursor: "pointer" }}
                >
                  <path d={pie.path(arc)} fill={arc.data.color} />
                  <Text
                    fill="white"
                    x={centroidX}
                    y={centroidY}
                    dy=".33em"
                    fontSize={15}
                    textAnchor="middle"
                    pointerEvents="none"
                  >
                    {arc.data.name}
                  </Text>
                </g>
              );
            })
          }
        </Pie>

        {active ? (
          <>
            <Text textAnchor="middle" fill="#111" fontSize={40} dy={0}>
              {`${Math.floor(active.miniTitle)}`}
            </Text>

            <Text textAnchor="middle" fill={active.color} fontSize={20} dy={40}>
              {`${active.name}`}
            </Text>
          </>
        ) : (
          <>
            <Text textAnchor="middle" fill="#111" fontSize={40} dy={0}>
              {`всего ${chartData.length}`}
            </Text>

            <Text textAnchor="middle" fill="#888" fontSize={20} dy={40}>
              количество заявок по статусам
            </Text>
          </>
        )}
      </Group>
    </svg>
  );
}
