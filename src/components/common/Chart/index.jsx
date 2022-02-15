import ChartPie from "@Common/Pie";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  StyleContainerChart,
  StyleContainerPie,
  StyleContainer,
} from "./styles";

const data = [
  {
    name: "1",
    uv: 5,
    pv: 7,
    amt: 1,
  },
  {
    name: "2",
    uv: 9,
    pv: 7,
    amt: 8,
  },
  {
    name: "3",
    uv: 7,
    pv: 6,
    amt: 5,
  },
  {
    name: "4",
    uv: 8,
    pv: 8,
    amt: 5,
  },
  {
    name: "5",
    uv: 5,
    pv: 7,
    amt: 5,
  },
  {
    name: "6",
    uv: 3,
    pv: 9,
    amt: 6,
  },
  {
    name: "7",
    uv: 5,
    pv: 9,
    amt: 5,
  },
  {
    name: "8",
    uv: 4,
    pv: 6,
    amt: 9,
  },
];

export const Chart = () => {
  return (
    <StyleContainerChart>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#626ED4" fill="#626ed4" />
        </AreaChart>
      </ResponsiveContainer>
    </StyleContainerChart>
  );
};

export const PieChart = () => {
  return (
    <StyleContainer>
      <StyleContainerPie>
        <h6>This month</h6>
        <h2>$34,252</h2>
        <p>It will be as simple as in fact it will be occidental.</p>
        <ChartPie />
      </StyleContainerPie>

      <StyleContainerPie>
        <h6>Last month</h6>
        <h2>$36,253</h2>
        <p>It will be as simple as in fact it will be occidental.</p>
        <ChartPie />
      </StyleContainerPie>
    </StyleContainer>
  );
};
