"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Afternoon", value: 4000, color: "#5D5FEF" }, 
    { name: "Evening", value: 3000, color: "#FF9F43" },
];


const chartData = [
    { name: 'Afternoon', value: 1890, color: '#312E81' }, 
    { name: 'Evening', value: 1500, color: '#6366F1' },   
    { name: 'Morning', value: 1300, color: '#E0E7FF' },   
];

export function OrderTimeChart() {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">Order Time</h3>
                    <p className="text-xs text-gray-400 mt-1">From 1-6 Dec, 2020</p>
                </div>
                <button className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg text-xs font-semibold transition-colors">
                    View Report
                </button>
            </div>

            <div className="flex-1 w-full min-h-[200px] relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={85}
                            paddingAngle={0}
                            dataKey="value"
                            stroke="none"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1F2937', color: '#fff', borderRadius: '8px', border: 'none' }}
                            itemStyle={{ color: '#fff' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
                {chartData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                        <span>{item.name}</span>
                        {/* <span>{Math.round(item.value / 4690 * 100)}%</span> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
