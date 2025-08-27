import {
    ShieldCheck,
    Smartphone,
    Send,
    Wallet,
    RefreshCcw,
    Globe,
} from "lucide-react"

const walletFeatures = [
    {
        title: "Secure Transactions",
        description:
            "End-to-end encryption and fraud detection ensure your money is always safe.",
        icon: <ShieldCheck className="size-6" />,
    },
    {
        title: "Mobile Friendly",
        description:
            "Access your wallet anytime, anywhere with a seamless mobile experience.",
        icon: <Smartphone className="size-6" />,
    },
    {
        title: "Instant Transfers",
        description:
            "Send and receive money in real-time with just a few taps.",
        icon: <Send className="size-6" />,
    },
    {
        title: "Smart Wallet Management",
        description:
            "Track balances, view history, and manage multiple wallets effortlessly.",
        icon: <Wallet className="size-6" />,
    },
    {
        title: "24/7 Availability",
        description:
            "Your wallet never sleeps — make payments and transfers around the clock.",
        icon: <RefreshCcw className="size-6" />,
    },
    {
        title: "Global Access",
        description:
            "Connect with users worldwide and enjoy borderless financial services.",
        icon: <Globe className="size-6" />,
    },
]

const Features = () => {
    return (
        <section className="py-32">
            <div className="container">
                <div className="mb-10 md:mb-20">
                    <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
                        Powerful Features to Manage Your Money Effortlessly
                    </h2>
                </div>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {walletFeatures.map((reason, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="mb-5 flex size-16 items-center justify-center rounded-full  bg-primary/50">
                                {reason.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
                            <p className="text-muted-foreground">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features
