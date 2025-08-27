import { baseApi } from "@/redux/baseApi";
import type { IResponse, IWallet } from "@/types";

export const walletApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

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
            providesTags: ["wallet"],
            transformResponse: (res: IResponse<IWallet[]>) => res?.data
        }),
        blockWallet: builder.mutation<IResponse<null>, string>({
            query: (walletId) => ({
                url: `/wallet/block/${walletId}`,
                method: "PATCH",
            }),
            invalidatesTags: ["wallet"]
        }),
        unblockWallet: builder.mutation<IResponse<null>, string>({
            query: (walletId) => ({
                url: `/wallet/unblock/${walletId}`,
                method: "PATCH",
            }),
            invalidatesTags: ["wallet"]

        }),


    })
})

export const { useMyWalletQuery, useAllWalletQuery, useBlockWalletMutation, useUnblockWalletMutation } = walletApi