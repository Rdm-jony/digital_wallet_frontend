import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";

export const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        topup: builder.mutation<IResponse<{ paymentURL: string }>, { amount: number }>({
            query: (paymentInfo) => ({
                url: "/transaction/topup",
                method: "POST",
                data: paymentInfo
            })
        }),
        sendMoney: builder.mutation<IResponse<null>, { amount: number, receiverWallet: string }>({
            query: (paymentInfo) => ({
                url: "/transaction/send-money",
                method: "POST",
                data: paymentInfo
            })
        }),
        cashIn: builder.mutation<IResponse<null>, { amount: number, receiverWallet: string }>({
            query: (paymentInfo) => ({
                url: "/transaction/cashIn",
                method: "POST",
                data: paymentInfo
            })
        }),
        cashOut: builder.mutation<IResponse<null>, { amount: number, receiverWallet: string }>({
            query: (paymentInfo) => ({
                url: "/transaction/cashOut",
                method: "POST",
                data: paymentInfo
            })
        }),
        withdraw: builder.mutation<IResponse<null>, { amount: number }>({
            query: (paymentInfo) => ({
                url: "/transaction/withdraw",
                method: "POST",
                data: paymentInfo
            })
        }),
        history: builder.query({
            query: (params) => ({
                url: `/transaction/history`,
                method: "GET",
                params: params,
            
            }),
            transformResponse:(res)=>res.data
        }),
        

    })
})

export const { useTopupMutation, useSendMoneyMutation, useCashInMutation, useCashOutMutation, useWithdrawMutation ,useHistoryQuery} = transactionApi