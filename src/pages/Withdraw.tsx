/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import RecentHistory from "@/components/module/Transaction/RecentHistory"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { transferType } from "@/constants/transferType"
import { useWithdrawMutation } from "@/redux/features/transaction/transactionApi"
import type { TTransferType } from "@/types/transaction/transaction.type"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const formSchema = z.object({
    amount: z.coerce.number().int().gt(0, { message: "Amount must be greater than 0" }),
})

export function Withdraw() {
    const [withdraw] = useWithdrawMutation()
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema) as any,
        defaultValues: {
            amount: 0,
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {

        const toastId = toast.loading("withdraw...")
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            const response = await withdraw(values).unwrap()
            if (response.success) {
                toast.success(response?.message, { id: toastId })
            }
        } catch (error: any) {
            console.log(error)
            toast.error(error?.data.message, { id: toastId })
        }

    }

    return (
        <div>
            <Card className="lg:w-1/3 mx-auto ">
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
                            <Button type="submit">Withdraw</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            <RecentHistory transferType={transferType.WITHDRAW as TTransferType}/>
        </div>
    )
}