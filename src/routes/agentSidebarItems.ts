import { CashIn } from "@/pages/agent/CashIn";
import MyWallet from "@/pages/MyWallet";
import { TopUp } from "@/pages/TopUp";
import { Withdraw } from "@/pages/Withdraw";
import type { ISidebarItem } from "@/types";

export const agentSidebarItems: ISidebarItem[] = [
    {
        title: "Services",
        items: [
            {
                title: "My wallet",
                url: "/agent/wallet",
                component: MyWallet
            },
            {
                title: "Top Up",
                url: "/agent/topup",
                component: TopUp
            },
            {
                title: "Cash In",
                url: "/agent/cashIn",
                component: CashIn
            },
            {
                title: "Withdraw",
                url: "/agent/withdraw",
                component: Withdraw
            }
        ]
    }
]