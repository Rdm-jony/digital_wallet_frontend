import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import heroImg from "@/assets/images/heroImg.png"


const Hero1 = () => {

    return (
        <section className="py-32">
            <div className="container">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

                        <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                            Digital Wallet
                        </h1>
                        <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                            Secure, fast, and reliable wallet for everyday payments.
                            Send, receive, and manage money anytime, anywhere.
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">

                            <Button asChild variant="outline" className="w-full sm:w-auto">
                                <Link to="/dashboard/user">
                                    Dashboard
                                    <ArrowRight className="size-4" />
                                </Link>
                            </Button>

                        </div>
                    </div>
                    <img
                        src={heroImg}
                        alt=""
                        className="max-h-96 w-full rounded-md object-fit"
                    />
                </div>
            </div>
        </section>
    );
};

export { Hero1 };
