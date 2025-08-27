export interface IWallet {
    _id: string,
    user: Record<string, string>,
    balance: number,
    isBlocked: boolean,
}