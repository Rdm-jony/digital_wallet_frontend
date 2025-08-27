/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useGetUserStatsQuery } from "@/redux/features/stat/statApi"
import { Users, UserX, UserPlus, CalendarDays } from "lucide-react"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"


const COLORS = ["#2563eb", "#16a34a", "#f59e0b"]



export default function UserOverview() {
    const { data: stats, isLoading } = useGetUserStatsQuery(undefined)
    if (isLoading) {
        return <p>loading...</p>
    }
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Total Users */}
            <Card className="rounded-2xl shadow-md">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                    <Users className="w-5 h-5 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stats?.totalUsers}</div>
                </CardContent>
            </Card>

            {/* Blocked Users */}
            <Card className="rounded-2xl shadow-md">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Blocked Users</CardTitle>
                    <UserX className="w-5 h-5 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stats?.totalBlockedUsers}</div>
                </CardContent>
            </Card>

            {/* New Users (7 days) */}
            <Card className="rounded-2xl shadow-md">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">New (7 Days)</CardTitle>
                    <UserPlus className="w-5 h-5 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stats?.newUsersInLast7Days}</div>
                </CardContent>
            </Card>

            {/* New Users (30 days) */}
            <Card className="rounded-2xl shadow-md">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">New (30 Days)</CardTitle>
                    <CalendarDays className="w-5 h-5 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{stats?.newUsersInLast30Days}</div>
                </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md col-span-4">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold">Users by Role</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={stats.usersByRole}
                                    dataKey="count"
                                    nameKey="_id"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    label
                                >
                                    {stats.usersByRole.map((_entry: any, index: number) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                            <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}
