import SendMoney from "@/pages/user/SendMoney";
import { TopUp } from "@/pages/user/TopUp";
import type { ISidebarItem } from "@/types";

export const userSidebarItems:ISidebarItem[]=[
    {
        title:"Services",
        items:[
            {
                title:"Send Money",
                url:"/user/send-money",
                component:SendMoney
            },
            {
                title:"Top Up",
                url:"/user/top-up",
                component:TopUp
            }
        ]
    }
]