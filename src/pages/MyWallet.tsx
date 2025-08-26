import Logo from "@/assets/icons/Logo";
import TransactionPieChart from "@/components/module/stat/TransactionPieChart";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useMyWalletQuery } from "@/redux/features/wallet/walletApi";

const MyWallet = () => {
    const { data } = useMyWalletQuery(undefined)

    return (
        <div className="">

            <div className="flex justify-around">
                <Card className="bg-primary">
                    <CardContent>
                        <div className="flex justify-between">
                            <div className="h-10 w-20 bg-muted-foreground rounded-xl">
                            </div>
                            <p className="font-semibold text-xl">Card</p>

                        </div>
                        <div className="border-t border-t-muted-foreground w-full mt-3"></div>
                        <p className="text-center font-semibold">{data?._id}</p>
                        <div className="border-t border-t-muted-foreground w-full"></div>

                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <div>
                            <p className="capitalize font-semibold">{data?.user?.name}</p>
                            <p className="text-xs text-foreground">{data?.user?.email}</p>
                        </div>
                        <Logo />
                    </CardFooter>
                </Card>
                <Card className="">
                    <CardContent>
                        <div className="flex justify-between">

                            <p className="text-2xl font-bold">${data?.balance}</p>

                            <p className="font-semibold text-xl">Total Balance</p>

                        </div>
                        <div className="border-t border-t-muted-foreground w-full mt-3"></div>
                        <p className="text-center font-semibold">{data?._id}</p>
                        <div className="border-t border-t-muted-foreground w-full"></div>

                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <div>
                            <p className="capitalize font-semibold">{data?.user?.name}</p>
                            <p className="text-xs text-foreground">{data?.user?.email}</p>
                        </div>
                        <Logo />
                    </CardFooter>
                </Card>
            </div>
            <TransactionPieChart />

        </div>
    );
};

export default MyWallet;