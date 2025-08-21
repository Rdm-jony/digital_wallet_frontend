import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ResetPassword from "@/pages/ResetPassword";
import Verify from "@/pages/Verify";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                Component: Home,
            },
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
        Component: DashboardLayout
    },
    {
        path: "/agent",
        Component: DashboardLayout
    }
]);