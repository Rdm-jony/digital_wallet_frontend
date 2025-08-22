import { baseApi } from "@/redux/baseApi";
import type { IRegister, IResponse } from "@/types";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<IResponse<null>, IRegister>({
            query: (userInfo) => ({
                url: "/user/create",
                method: "POST",
                data: userInfo
            })
        }),
        login: builder.mutation<IResponse<null>, { email: string, password: string }>({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo
            })
        }),
        sendOtp: builder.mutation<IResponse<null>, { email: string }>({
            query: (email) => ({
                url: "/otp/send",
                method: "POST",
                data: email
            })
        }),
        verifyOtp: builder.mutation<IResponse<null>, { otp: string, email: string }>({
            query: (otpInfo) => ({
                url: "/otp/verify",
                method: "POST",
                data: otpInfo
            })
        }),
        forgetPassword: builder.mutation<IResponse<null>, { email: string }>({
            query: (email) => ({
                url: "/auth/forget-password",
                method: "POST",
                data: email
            })
        }),
        resetPassword: builder.mutation<IResponse<null>, { id: string, newPassword: string, token: string }>({
            query: (resetInfo) => ({
                url: "/auth/reset-password",
                method: "POST",

                headers: { "authorization": resetInfo.token },
                data: resetInfo
            })
        }),
        getMe: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET"
            }),
            transformResponse: (res) => res.data
        }),
        logout: builder.mutation<IResponse<null>, null>({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            })
        }),
    })
})

export const { useRegisterMutation, useLoginMutation, useSendOtpMutation, useVerifyOtpMutation, useForgetPasswordMutation, useResetPasswordMutation, useGetMeQuery,useLogoutMutation } = authApi