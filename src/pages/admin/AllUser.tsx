/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useAllUserQuery, useApproveAgentMutation, useSuspendAgentMutation } from "@/redux/features/auth/authApi"
import type { IUser } from "@/types/auth/auth.type"
import { agentStatus } from "@/constants/agentStatus"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { role } from "@/constants/role"
import { toast } from "sonner"
import Loader from "@/components/Loader"

export function AllUser() {
    const { data, isLoading } = useAllUserQuery(null)
    const [approveAgent] = useApproveAgentMutation()
    const [suspendAgent] = useSuspendAgentMutation()



    const handleStatusChange = async (id: string, newStatus: string) => {
        if (!id) {
            return toast.error("id not found")
        }

        try {
            let response;
            if (newStatus == agentStatus.APPROVED) {
                response = await approveAgent(id).unwrap()
            } else if (newStatus == agentStatus.SUSPENDED) {
                response = await suspendAgent(id).unwrap()
            }
            else {
                return toast.error("performing either suspend or approved")
            }

            if (response?.success) {
                toast.success(response?.message)
            }
            // Here call your mutation, e.g.:
            // await updateAgentStatus({ id, status: newStatus }).unwrap()
        } catch (error: any) {
            toast.error(error?.data?.message)
        }
    }
    if (isLoading) {
        return <Loader />
    }
    return (
        <Table>
            <TableCaption>A list of all users.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Current Status</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead >Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Array.isArray(data) &&
                    data.map((item: IUser) => (
                        <TableRow key={item?._id}>
                            <TableCell>
                                <img
                                    src={item?.picture}
                                    alt={item?.name}
                                    className="w-10 h-10 rounded-full"
                                />
                            </TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.agentRequest || "NONE"}</TableCell>
                            <TableCell>{item.role}</TableCell>
                            <TableCell className="text-right space-x-2">
                                {(item.role === role.USER) && (
                                    <Select
                                        defaultValue={item.agentRequest || agentStatus.PENDING}
                                        onValueChange={(value) =>
                                            handleStatusChange(item?._id ?? "", value)
                                        }
                                    >
                                        <SelectTrigger className="w-[140px]">
                                            <SelectValue placeholder="Change status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value={agentStatus.PENDING}>
                                                Pending
                                            </SelectItem>
                                            <SelectItem value={agentStatus.APPROVED}>
                                                Approved
                                            </SelectItem>
                                            <SelectItem value={agentStatus.SUSPENDED}>
                                                Suspended
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    )
}
