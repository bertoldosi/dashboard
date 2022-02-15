import React from "react";
import { AreaChart, Area, CartesianGrid, ResponsiveContainer } from "recharts";
import { Container } from "./styles";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: -1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: -2000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: -250,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page E",
    uv: -2000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: -250,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page E",
    uv: -2000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: -250,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function AreaChartFillByValue() {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="0 1" />

          <Area
            type="monotone"
            dataKey="uv"
            stroke="rgba(2, 164, 153, 0.3)"
            fill="rgba(2, 164, 153, 0.3)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default AreaChartFillByValue;
