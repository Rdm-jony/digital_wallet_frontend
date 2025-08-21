/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useForgetPasswordMutation } from "@/redux/features/auth/authApi";
import { useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";

const ForgetPassword = ({ children, email }: { children: ReactNode, email: string }) => {
    const [sendResetEmail] = useForgetPasswordMutation();
    const [open, setOpen] = useState(false)

    const handleSendEmail = async () => {
        const toastId = toast.loading("Sending reset email..");

        try {
            const res = await sendResetEmail({ email: email }).unwrap();
            if (res.success) {
                toast.success("reset email Sent", { id: toastId });
                setOpen(false)
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data.message, { id: toastId })
        }
    };

    useEffect(() => {
        if (!email) {
            toast.error("please provide your email")
            setOpen(false)
        }
    }, [email, open])
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger>
                {children}
            </DialogTrigger>
            <DialogContent className="min-w-fit">
                <DialogHeader>
                    <DialogDescription>
                        <Card>
                            <CardHeader className="text-center">
                                <CardTitle className="text-xl">Forget your passowrd?</CardTitle>
                                <CardDescription>
                                    We will send you an an link at <br /> {email}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="flex ">
                                <Button onClick={handleSendEmail} className="w-full">
                                    Confirm
                                </Button>
                            </CardFooter>
                        </Card>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ForgetPassword;