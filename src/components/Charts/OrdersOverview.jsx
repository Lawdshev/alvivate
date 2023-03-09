import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Line, ResponsiveContainer, Label } from 'recharts';

const data = [
    { name: 'Jan', completed: 40, rejected: 10 },
    { name: 'Feb', completed: 30, rejected: 15 },
    { name: 'Mar', completed: 20, rejected: 30 },
    { name: 'Apr', completed: 20, rejected: 10 },
    { name: 'May', completed: 30, rejected: 20 },
    { name: 'Jun', completed: 40, rejected: 15 },
    { name: 'Jul', completed: 30, rejected: 5 },
    { name: 'Aug', completed: 5, rejected: 10 },
    { name: 'Sep', completed: 25, rejected: 10 },
];

const OrdersOverviewBarChart = () => {
    return (
        <div className='w-[40vw] h-full text-[0.8vw] pt-[2%] pr-[2%] flex flex-col justify-center absolute bottom-0 left-0'>
            <div className="flex items-center mb-4 px-[3%]">
                <h2 className="text-[1vw] font-[500] text-[#282828]">Orders Overview</h2>
                <div className="flex justify-around items-center ml-[5%] space-x-3">
                    <div className="flex items-center justify-center">
                        <div className="w-[0.5rem] h-[0.5rem] bg-gradient-to-b from-green-500 to-white"></div>
                        <span className=" text-[0.8vw] font-[400]  ml-1">Completed orders</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-[0.5rem] h-[0.5rem] bg-gradient-to-b from-red-500 to-white"></div>
                        <span className="text-[0.8vw] font-[400] ml-1">Rejected Orders</span>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width='100%' height='80%'>
                <BarChart data={data}>
                    <XAxis dataKey='name' axisLine={{
                        stroke: 'red', // Change this to the desired color
                    }} />
                    <YAxis ticks={[0, 10, 20, 30, 40]}>
                        <Label value='x10 GBP' position='Left' angle={-90} offset={10} />
                    </YAxis>
                    <CartesianGrid vertical={false} yAxisTickCount={4} />
                    <Line type='monotone' dataKey='completed' stroke='#EAEDF0' strokeWidth={0.5} />
                    <Line type='monotone' dataKey='rejected' stroke='#EAEDF0' strokeWidth={0.5} />
                    <Bar barSize={15} radius={[10, 10, 0, 0]} dataKey="rejected" name="Rejected" fill="url(#rejectedGradient)" />
                    <Bar barSize={15} radius={[10, 10, 0, 0]} dataKey="completed" name="Completed" fill="url(#completedGradient)" />
                    <defs>
                        <linearGradient id="completedGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#27AE60" stopOpacity={1} />
                            <stop offset="100%" stopColor="#fff" stopOpacity={1} />
                        </linearGradient>
                        <linearGradient id="rejectedGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#E32021" stopOpacity={1} />
                            <stop offset="100%" stopColor="#fff" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                </BarChart>
            </ResponsiveContainer>
        </div>

    );
};
export default OrdersOverviewBarChart;
