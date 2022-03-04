import React from "react";
import { StyleContainer } from "./styles";
import { PieChart as ReactPieChart, Pie, Cell } from "recharts";

function PieChart() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <StyleContainer>
      <ReactPieChart width={250} height={250}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          startAngle={0}
          innerRadius={60}
          outerRadius={75}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </ReactPieChart>
    </StyleContainer>
  );
}

export default PieChart;
