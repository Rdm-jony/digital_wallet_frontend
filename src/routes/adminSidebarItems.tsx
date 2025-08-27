import { AllAgent } from "@/pages/admin/AllAgent";
import { AllUser } from "@/pages/admin/AllUser";
import { AllWallet } from "@/pages/admin/AllWallet";
import Overview from "@/pages/admin/Overview";
import type { ISidebarItem } from "@/types";


export const adminSidebarItems: ISidebarItem[] = [
    {
        title: "Services",
        items: [
            {
                title: "Overview",
                url: "/admin/overview",
                component: Overview
            },
            {
                title: "All wallet",
                url: "/admin/wallet",
                component: AllWallet
            },
            {
                title: "All User",
                url: "/admin/user",
                component: AllUser
            },
            {
                title: "All Agent",
                url: "/admin/agent",
                component: AllAgent
            }
        ]
    }
]