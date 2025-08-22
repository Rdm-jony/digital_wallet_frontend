import { baseApi } from "@/redux/baseApi";
import type {  IResponse } from "@/types";

export const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        topup: builder.mutation<IResponse<{paymentURL:string}>, {amount:number}>({
            query: (paymentInfo) => ({
                url: "/transaction/topup",
                method: "POST",
                data: paymentInfo
            })
        }),
          
        getMe: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET"
            }),
            transformResponse: (res) => res.data
        }),
        
    })
})

export const {useTopupMutation  } = transactionApi