import MyWallet from "@/pages/MyWallet";
import { CashOut } from "@/pages/user/CashOut";
import { SendMoney } from "@/pages/user/SendMoney";
import { TopUp } from "@/pages/TopUp";
import { Withdraw } from "@/pages/Withdraw";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
    {
        title: "Services",
        items: [
            {
                title: "My wallet",
                url: "/user/wallet",
                component: MyWallet
            },
            {
                title: "Send Money",
                url: "/user/send-money",
                component: SendMoney
            },
            {
                title: "Top Up",
                url: "/user/top-up",
                component: TopUp
            },
            {
                title: "Cash Out",
                url: "/user/cashOut",
                component: CashOut
            },
            {
                title: "Withdraw",
                url: "/user/withdraw",
                component: Withdraw
            }
        ]
    }
]