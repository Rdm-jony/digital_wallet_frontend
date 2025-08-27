import { XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { useGetMeQuery } from "@/redux/features/auth/authApi"
import { role } from "@/constants/role"

export default function PaymentFailed() {
    const { data, isLoading } = useGetMeQuery(undefined)
    if (isLoading) {
        return <p>loading</p>
    }
    return (
        <div className="flex min-h-[80vh] items-center justify-center px-4">
            <div className="w-full max-w-md rounded-2xl border bg-card p-8 text-center shadow-lg">
                <XCircle className="mx-auto size-16 text-red-500" />
                <h1 className="mt-4 text-2xl font-bold text-foreground">
                    Payment Failed ❌
                </h1>
                <p className="mt-2 text-muted-foreground">
                    Unfortunately, your payment could not be processed.
                    Please try again or use a different payment method.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                    <Button asChild>
                        {
                            data && data?.role === role.USER ? <Link to="/user">Go to Dashboard</Link> : <Link to="/agent">Go to Dashboard</Link>
                        }
                    </Button>
                    <Button variant="outline" asChild>
                        <Link to="/dashboard/user">Go to Dashboard</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
