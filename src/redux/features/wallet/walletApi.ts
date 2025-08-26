import { baseApi } from "@/redux/baseApi";
import type { IResponse, IWallet } from "@/types";

export const walletApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        topup: builder.mutation<IResponse<{ paymentURL: string }>, { amount: number }>({
            query: (paymentInfo) => ({
                url: "/transaction/topup",
                method: "POST",
                data: paymentInfo
            })
        }),

        myWallet: builder.query({
            query: () => ({
                url: `/wallet/me`,
                method: "GET",
            }),
            transformResponse: (res) => res.data
        }),
        allWallet: builder.query({
            query: () => ({
                url: `/wallet/all`,
                method: "GET",
            }),
            transformResponse: (res: IResponse<IWallet[]>) => res?.data
        }),
        blockWallet: builder.mutation<IResponse<null>, string>({
            query: (walletId) => ({
                url: `/wallet/block/${walletId}`,
                method: "PATCH",
            }),
        }),


    })
})

export const { useTopupMutation, useMyWalletQuery, useAllWalletQuery, useBlockWalletMutation } = walletApi