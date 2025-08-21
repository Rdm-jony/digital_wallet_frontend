export type {IRegister} from "@/types/auth/auth.type"

export interface IResponse<T> {
    success: boolean,
    message: string,
    statusCode: number,
    data: T[] | T,
}