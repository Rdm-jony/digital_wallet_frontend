export interface IRegister {
    name: string,
    email: string,
    password: string
}

export type Role = "SUPER_ADMIN" | "ADMIN" | "USER" | "AGENT"
export type AgentStatus = "NONE" | "PENDING" | "APPROVED" | "SUSPENDED"
export interface IAuthProvider {
    provider: "google" | "credentials",
    providerId: string
}

export interface IUser {
    _id?: string,
    name: string,
    email: string,
    password?: string,
    phone?: string,
    address?: string,
    picture?: string,
    isDeleted?: boolean,
    isVerified?: boolean,
    isBlocked?: boolean,
    agentRequest?: AgentStatus;
    role: Role,
    auth: IAuthProvider[]

}