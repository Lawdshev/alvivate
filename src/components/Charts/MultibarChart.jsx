import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LabelList,
} from "recharts";

function MultiBarChart() {
  const data = [
    { instance: "1st down", win: 10, loss: 25 },
    { instance: "2nd down", win: 90, loss: 15 },
    { instance: "3rd down", win: 30, loss: 35 },
    { instance: "4th down", win: 40, loss: 80 },
  ];

  const renderXAxisTick = (props) => {
    const { x, y, payload } = props;

    return (
      <text
        x={x}
        y={y}
        dy={10}
        fontWeight='700'
        fill='#526B84'
        fontSize='10px'
        textAnchor='middle'>
        {payload.value}
      </text>
    );
  };

  return (
    <div className='w-[100%] flex justify-between items-center p-0 pb-[24px] bg-[red]'>
      <BarChart
        width={400}
        height={200}
        data={data}
        barGap={0}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        padding={{ top: 0, right: 0, left: 0, bottom: 0 }}
        label={{ position: "top" }}>
        <XAxis dataKey='instance' axisLine={false} tickLine={false} />
        <CartesianGrid vertical={false} />
        <Line type='monotone' dataKey='uv' stroke='#EAEDF0' strokeWidth={0.5} />
        <Line type='monotone' dataKey='pv' stroke='#EAEDF0' strokeWidth={0.5} />
        <Tooltip />
        <Legend
          iconType='circle'
          align='left'
          verticalAlign='top'
          layout='vertical'
        />
        <Bar dataKey='win' fill='#1A91FF' barSize={20} stackId='a'>
          <LabelList
            dataKey='win'
            position='top'
            formatter={(value) => `${value}%`}
            fontSize={10}
            fontWeight='bold'
            fill='#1A91FF'
          />
        </Bar>
        <Bar dataKey='loss' fill='#A40E17' barSize={20} stackId='b'>
          <LabelList
            dataKey='loss'
            position='top'
            formatter={(value) => `${value}%`}
            fontSize={10}
            fontWeight='bold'
            fill='#A40E17'
          />
        </Bar>
        <XAxis dataKey='instance' />
      </BarChart>
    </div>
  );
}
export default MultiBarChart;
