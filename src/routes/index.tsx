import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ResetPassword from "@/pages/ResetPassword";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { userSidebarItems } from "./userSidebarItems";
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/types";
import { agentSidebarItems } from "./agentSidebarItems";
import { adminSidebarItems } from "./adminSidebarItems";
import Profile from "@/pages/Profile";
import About from "@/pages/About";
import Features from "@/pages/Features";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "profile",
                Component: Profile
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "feature",
                Component: Features
            },
            {
                path: "contact",
                Component: Contact
            },
            {
                path: "faq",
                Component: Faq
            }
        ],
    }, {
        path: "/login",
        Component: Login,
    },
    {
        path: "/register",
        Component: Register
    },
    {
        path: "/verify",
        Component: Verify
    },
    {
        path: "/reset-password",
        Component: ResetPassword
    },
    {
        path: "/admin",
        Component: DashboardLayout
    },
    {
        path: "/user",
        Component: withAuth(DashboardLayout, role.USER as TRole),
        children: [{ index: true, element: <Navigate to="/user/wallet" /> }, ...generateRoutes(userSidebarItems)]
    },
    {
        path: "/agent",
        Component: withAuth(DashboardLayout, role.AGENT as TRole),
        children: [{ index: true, element: <Navigate to="/agent/wallet" /> }, ...generateRoutes(agentSidebarItems)]
    },
    {
        path: "/admin",
        Component: withAuth(DashboardLayout, (role.ADMIN) as TRole),
        children: [...generateRoutes(adminSidebarItems)]
    },
    {
        path: "/unauthorized",
        Component: Unauthorized
    }
]);