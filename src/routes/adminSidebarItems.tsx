import { AllWallet } from "@/pages/AllWallet";
import type { ISidebarItem } from "@/types";


export const adminSidebarItems: ISidebarItem[] = [
    {
        title: "Services",
        items: [
            {
                title: "ALl wallet",
                url: "/admin/wallet",
                component: AllWallet
            },
           
        ]
    }
]