import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";

export const statApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        topup: builder.mutation<IResponse<{ paymentURL: string }>, { amount: number }>({
            query: (paymentInfo) => ({
                url: "/transaction/topup",
                method: "POST",
                data: paymentInfo
            })
        }),

        getStatTransaction: builder.query({
            query: () => ({
                url: `/stat/transaction/me`,
                method: "GET",
            }),
            transformResponse: (res) => res.data
        }),


    })
})

export const { useGetStatTransactionQuery } = statApi