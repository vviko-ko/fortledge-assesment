"use client";

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowDown } from "lucide-react";

const data = [
    { name: "01", value: 1500 },
    { name: "02", value: 2000 },
    { name: "03", value: 1200 },
    { name: "04", value: 2800 },
    { name: "05", value: 2000 },
    { name: "06", value: 1600 },
];

export function OrderTrendChart() {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Order</h3>
                    <div className="flex items-end gap-3 mb-1">
                        <span className="text-3xl font-bold text-gray-900">2.568</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                        <span className="text-red-500 font-medium flex items-center">
                            <ArrowDown className="w-4 h-4" /> 2.1%
                        </span>
                        <span className="text-gray-400">vs last week</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-2">Sales from 1-6 Dec, 2020</div>
                </div>
                <button className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg text-xs font-semibold transition-colors">
                    View Report
                </button>
            </div>

            <div className="flex-1 w-full min-h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            dy={10}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#5D5FEF"
                            strokeWidth={3}
                            dot={{ r: 0 }}
                            activeDot={{ r: 6, fill: "#5D5FEF", stroke: "white", strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                    Last 6 days
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    Last Week
                </div>
            </div>
        </div>
    );
}
