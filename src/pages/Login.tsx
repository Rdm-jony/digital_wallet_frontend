import { LoginForm } from "@/components/module/Auth/LoginForm"
import loginBgImg from "@/assets/images/login.jpg"
import Logo from "@/assets/icons/Logo"


export default function Login() {
    return (
        <div className="flex min-h-svh lg:flex-row-reverse">
            <div className="flex-1">
                <div className="flex flex-col gap-4 p-6 md:p-10">
                    <div className="flex justify-center gap-2 md:justify-start">
                        <a href="#" className="flex items-center gap-2 font-medium">
                            <Logo />

                        </a>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-xs">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-muted relative hidden lg:block flex-1">
                <div className="absolute inset-0 text-white bg-primary h-full w-full z-20 opacity-90  place-content-center">
                    <div className="w-2/3 ml-auto">
                        <h2 className="text-3xl font-semibold my-5">Welcome back!</h2>
                        <p className="text-muted">we are glad to see again! instant deposits,withdrawals & payouts trusted by millions worlwide</p>
                    </div>
                </div>
                <img
                    src={loginBgImg}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}
