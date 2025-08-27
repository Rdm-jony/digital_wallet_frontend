/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useGetMeQuery, useRequestAgentMutation } from "@/redux/features/auth/authApi"
import EditProfile from "@/components/EditProfile"
import { toast } from "sonner"

export default function Profile() {
    const { data: user } = useGetMeQuery(undefined)
    const [requestAgent, { isLoading }] = useRequestAgentMutation()

    const handleAgentRequest = async () => {
        try {
            const response = await requestAgent(null).unwrap()
            if (response?.success) {
                toast.success(response?.message)
            }
        } catch (err: any) {
            toast.error(err?.data?.message)
        }
    }

    return (
        <Card className="w-full max-w-md mx-auto rounded-2xl shadow-md my-20">
            <CardHeader className="flex flex-col items-center gap-4">
                <Avatar className="w-20 h-20">
                    <AvatarImage src={user?.picture || ""} alt={user?.name} />
                    <AvatarFallback>
                        {user?.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-semibold">{user?.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{user?.email}</p>

                <div className="flex gap-2 flex-wrap justify-center">
                    <Badge variant="secondary">{user?.role}</Badge>
                    {user?.isVerified && <Badge variant="default">Verified</Badge>}
                    {user?.isBlocked && <Badge variant="destructive">Blocked</Badge>}
                    {user?.agentRequest && user.agentRequest !== "NONE" && (
                        <Badge>{user?.agentRequest}</Badge>
                    )}
                </div>
            </CardHeader>

            <CardContent className="space-y-2 text-sm">
                {user?.phone && (
                    <p>
                        <span className="font-medium">📞 Phone:</span> {user?.phone}
                    </p>
                )}
                {user?.address && (
                    <p>
                        <span className="font-medium">🏠 Address:</span> {user?.address}
                    </p>
                )}
            </CardContent>

            <CardFooter className="flex justify-end gap-2">
                {user?.email && (
                    <EditProfile user={user}>
                        <Button variant="outline">Edit</Button>
                    </EditProfile>
                )}

                {/* ✅ Agent request button */}
                {user?.role === "USER" && user?.agentRequest === "NONE" && (
                    <Button onClick={handleAgentRequest} disabled={isLoading}>
                        {isLoading ? "Requesting..." : "Request Agent"}
                    </Button>
                )}
                
            </CardFooter>
        </Card>
    )
}
