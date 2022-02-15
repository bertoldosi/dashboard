import React from "react";
import { PieChart, Pie, Cell } from "recharts";

import { StylePie } from "./styles";

const data = [
  { name: "Group A", value: 70 },
  { name: "Group B", value: 30 },
];
const COLORS = ["rgb(2, 164, 153)", "#fff"];

function ChartPie() {
  return (
    <StylePie>
      <PieChart width={170} height={100}>
        <Pie
          data={data}
          innerRadius={65}
          outerRadius={80}
          dataKey="value"
          blendStroke
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </StylePie>
  );
}

export default ChartPie;
