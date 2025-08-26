/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import RecentHistory from "@/components/module/Transaction/RecentHistory"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { transferType } from "@/constants/transferType"
import { useCashInMutation } from "@/redux/features/transaction/transactionApi"
import type { TTransferType } from "@/types/transaction/transaction.type"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
    amount: z.coerce.number().int().gt(0, { message: "Amount must be greater than 0" }),
    receiverWallet: z.string().min(1, "reciever wallet Id is required")
})

export function CashIn() {
    const [cashIn] = useCashInMutation()
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema) as any,
        defaultValues: {
            amount: 0,
            receiverWallet: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const toastId = toast.loading("cashIn...")
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            const response = await cashIn(values).unwrap()
            if (response.success) {
                toast.success(response.message, { id: toastId })
                form.reset()
            }
        } catch (error: any) {
            console.log(error)
            toast.error(error?.data.message, { id: toastId })
        }

    }

    return (
        <div>
            <Card className="w-1/3">
                <CardContent >
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Amount</FormLabel>
                                        <FormControl>
                                            <Input type="number" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="receiverWallet"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Receiver wallet</FormLabel>
                                        <FormControl>
                                            <Input  {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Cash In</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            <RecentHistory transferType={transferType.CASHIN as TTransferType} />
        </div>
    )
}