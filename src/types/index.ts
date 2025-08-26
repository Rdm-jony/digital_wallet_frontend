import type { ComponentType } from "react"

export type { IRegister } from "@/types/auth/auth.type"
export type {ITransaction} from "@/types/transaction/transaction.type"
export type {IWallet} from "@/types/wallet/wallet.type"

export interface IResponse<T> {
    success: boolean,
    message: string,
    statusCode: number,
    data: T[] | T,
}

export interface ISidebarItem {
    title: string,
    items: {
        title: string,
        url: string,
        component: ComponentType
    }[]
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "USER" | "AGENT"