/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert } from "@/components/AlertDialog";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useAllWalletQuery, useBlockWalletMutation } from "@/redux/features/wallet/walletApi";
import { toast } from "sonner";




export function AllWallet() {
    const { data } = useAllWalletQuery(undefined)
    const [blockWallet] = useBlockWalletMutation()

    const handleBolcked = async (id: string) => {
        console.log(id)
        const toastId = toast.loading("wallet blocking...")
        try {
            const response = await blockWallet(id).unwrap()
            if (response?.success) {
                toast.success(response?.message, { id: toastId })
            }
        } catch (error: any) {
            toast.error(error?.data.message, { id: toastId })
        }
    }

    return (
        <Table>
            <TableCaption>A list of user wallet.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Wallet Id</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead >Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((item: any) => (
                    <TableRow key={item?._id}>
                        <TableCell className="font-medium">{item?._id}</TableCell>
                        <TableCell className="font-medium">{item?.user.email}</TableCell>
                        <TableCell>{item?.balance}</TableCell>
                        <TableCell>
                            {
                                item?.isBlocked ? <Alert>
                                    <Button className="bg-red-500">Unblocked</Button>
                                </Alert> : <Alert onConfirm={() => handleBolcked(item?._id)}>
                                    <Button >Blocked</Button>
                                </Alert>
                            }

                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    )
}
