import { CashIn } from "@/pages/agent/CashIn";
import { Withdraw } from "@/pages/Withdraw";
import type { ISidebarItem } from "@/types";

export const agentSidebarItems:ISidebarItem[]=[
    {
        title:"Services",
        items:[
            {
                title:"Cash In",
                url:"/agent/cashIn",
                component:CashIn
            },
            {
                title:"Withdraw",
                url:"/agent/withdraw",
                component:Withdraw
            }
        ]
    }
]