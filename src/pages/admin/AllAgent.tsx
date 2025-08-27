import Loader from "@/components/Loader"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useAllAgentQuery } from "@/redux/features/auth/authApi"
import type { IUser } from "@/types/auth/auth.type"

export function AllAgent() {
    const { data, isLoading } = useAllAgentQuery(null)
    if (isLoading) {
        return <Loader />
    }
    return (
        <Table>
            <TableCaption>A list of all user.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Is Blocked</TableHead>
                    <TableHead className="text-right">role</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Array.isArray(data) && data.map((item: IUser) => (
                    <TableRow key={item?._id}>
                        <TableCell className="font-medium">{item.picture}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item?.isBlocked ? "True" : "False"}</TableCell>
                        <TableCell className="text-right">{item.role}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    )
}
