/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState } from "react";
import Pie from "@visx/shape/lib/shapes/Pie";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };

export type PieProps = {
  chartData: Array<unknown>;
  width: number;
  height: number;
  margin?: typeof defaultMargin;
  animate?: boolean;
};

export default function PieChart({ chartData, total, width, height, margin = defaultMargin }: PieProps) {
  if (width < 10) return null;

  const [active, setActive] = useState(null);
  const half = width / 2;

  return (
    <svg width={width} height={width}>
      {/* <GradientBackground id="visx-pie-gradient" />
      <rect rx={14} width={width} height={height} fill="url('#visx-pie-gradient')" /> */}
      <Group top={half} left={half}>
        <Pie
          data={chartData}
          pieValue={(data) => data.count * data.centerTitle}
          outerRadius={half}
          innerRadius={({ data }) => {
            const size = active && data.label === active.label ? 68 : 50;
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
                  key={arc.data.label}
                  onMouseEnter={() => setActive(arc.data)}
                  onMouseLeave={() => setActive(null)}
                  style={{ cursor: "pointer" }}
                >
                  <path d={pie.path(arc)} fill={arc.data.color} />
                  <Text
                    className="text-xs"
                    fill="white"
                    x={centroidX}
                    y={centroidY}
                    dy=".33em"
                    textAnchor="middle"
                    pointerEvents="none"
                  >
                    {arc.data.label}
                  </Text>
                </g>
              );
            })
          }
        </Pie>

        {active ? (
          <>
            <Text textAnchor="middle" fill="#111" className="text-lg" dy={0}>
              {`${Math.floor(active.count)}`}
            </Text>

            <Text textAnchor="middle" fill={active.color} className="text-sm" dy={40}>
              {`${active.label}`}
            </Text>
          </>
        ) : (
          <>
            {total > 0 ? (
              <Text textAnchor="middle" fill="#111" classlabel="text-lg" dy={0}>
                {`всего ${total}`}
              </Text>
            ) : (
              <Text textAnchor="middle" fill="#111" classlabel="text-lg" dy={0}>
                Нет данных за период
              </Text>
            )}

            {/* <Text textAnchor="middle" fill="#888" classlabel="text-md" dy={40}>
              количество заявок по статусам
            </Text> */}
          </>
        )}
      </Group>
    </svg>
  );
}
