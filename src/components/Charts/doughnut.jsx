import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

function DoughnutChart() {
  const COLORS = ["#9B4250", "#8FACE4", "#5AA100"];
  const data = [
    { name: "Restaurant", value: 33.22 },
    { name: "Grocery", value: 8.21 },
    { name: "Food Bowls", value: 16.78 },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        style={{ fontSize: "10px", fontWeight: 700 }}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline='central'>
      </text>
    );
  };
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
      <div style={{ width: "55%" }}>
        <PieChart
          width={150}
          height={150}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          paddingAngle={0}>
          <Pie
            data={data}
            cx={75}
            cy={75}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={60}
            innerRadius={38}
            fill='#8884d8'
            dataKey='value'
            stroke='none'>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <text
            x={75}
            y={68}
            textAnchor='middle'
            dominantBaseline='central'
            style={{
              fontSize: "18px",
              fontWeight: "medium",
              color: "#282828",
            }}>
            1,210
          </text>
          <text
            x={75}
            y={85}
            textAnchor='middle'
            dominantBaseline='central'
            style={{
              fontSize: "10px",
              fontWeight: "medium",
              color: "#575757",
            }}>
            Total Orders
          </text>
        </PieChart>
      </div>
      <div style={{ width: "45%" }}>
        <Legend
          payload={data.map((entry, index) => ({
            id: entry.name,
            value: `${entry.name}`,
            type: "square",
            color: COLORS[index % COLORS.length],
          }))}
          layout='vertical'
          verticalAlign='middle'
          wrapperStyle={{
            position: "relative",
            top: "30%",
            left: "14%",
            fontSize: "16px",
            display: "flex",
          }}
          formatter={(value, entry) => (
            <span
              style={{ color: "#575757" }}
              className='ml-[10px]  text-[10px] font-normal'>
              {value}
            </span>
          )}
        />
      </div>
    </div>
  );
}

export default DoughnutChart;
