import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";

export const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        topup: builder.mutation<IResponse<{ paymentURL: string }>, { amount: number }>({
            query: (paymentInfo) => ({
                url: "/transaction/topup",
                method: "POST",
                data: paymentInfo
            }),
            invalidatesTags: ["recentHistory"]
        }),
        sendMoney: builder.mutation<IResponse<null>, { amount: number, receiverWallet: string }>({
            query: (paymentInfo) => ({
                url: "/transaction/send-money",
                method: "POST",
                data: paymentInfo
            }),
            invalidatesTags: ["recentHistory"]

        }),
        cashIn: builder.mutation<IResponse<null>, { amount: number, receiverWallet: string }>({
            query: (paymentInfo) => ({
                url: "/transaction/cashIn",
                method: "POST",
                data: paymentInfo
            }),
            invalidatesTags: ["recentHistory"]

        }),
        cashOut: builder.mutation<IResponse<null>, { amount: number, receiverWallet: string }>({
            query: (paymentInfo) => ({
                url: "/transaction/cashOut",
                method: "POST",
                data: paymentInfo
            }),
            invalidatesTags: ["recentHistory"]

        }),
        withdraw: builder.mutation<IResponse<null>, { amount: number }>({
            query: (paymentInfo) => ({
                url: "/transaction/withdraw",
                method: "POST",
                data: paymentInfo
            }),
            invalidatesTags: ["recentHistory"]

        }),
        history: builder.query({
            query: (params) => ({
                url: `/transaction/history`,
                method: "GET",
                params: params,

            }),
            providesTags: ["recentHistory"],
            transformResponse: (res) => res.data
        }),


    })
})

export const { useTopupMutation, useSendMoneyMutation, useCashInMutation, useCashOutMutation, useWithdrawMutation, useHistoryQuery } = transactionApi