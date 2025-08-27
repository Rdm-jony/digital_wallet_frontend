import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { useGetMeQuery } from "@/redux/features/auth/authApi"
import { role } from "@/constants/role"

export default function PaymentSuccess() {
    const { data, isLoading } = useGetMeQuery(undefined)
    if (isLoading) {
        return <p>loading</p>
    }
    return (
        <div className="flex min-h-[80vh] items-center justify-center px-4">
            <div className="w-full max-w-md rounded-2xl border bg-card p-8 text-center shadow-lg">
                <CheckCircle2 className="mx-auto size-16 text-primary" />
                <h1 className="mt-4 text-2xl font-bold text-foreground">
                    Payment Successful 🎉
                </h1>
                <p className="mt-2 text-muted-foreground">
                    Your payment has been processed successfully.
                    You can now continue using your wallet without interruption.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                    <Button asChild>
                        {
                            data && data?.role === role.USER ? <Link to="/user">Go to Dashboard</Link> : <Link to="/agent">Go to Dashboard</Link>
                        }
                    </Button>
                    <Button variant="outline" asChild>
                        <Link to="/">Back to Home</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
