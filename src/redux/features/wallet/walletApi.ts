import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";

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
            query: (params) => ({
                url: `/wallet/me`,
                method: "GET",
                params: params,

            }),
            transformResponse: (res) => res.data
        }),


    })
})

export const { useTopupMutation, useMyWalletQuery } = walletApi