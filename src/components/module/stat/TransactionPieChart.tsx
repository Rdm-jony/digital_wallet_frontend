/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useGetStatTransactionQuery } from "@/redux/features/stat/statApi"
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"]

export default function TransactionPieChart() {
    const { data } = useGetStatTransactionQuery(undefined)

    return (
        <div className="h-[400px] ">
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="totalAmount"
                        nameKey="transferType"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        label
                    >
                        {data?.map((entry: any, index: number) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value} ৳`} />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
