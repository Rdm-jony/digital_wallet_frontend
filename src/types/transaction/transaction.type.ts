
export type TTransferType = "CASHIN" | "CASHOUT" | "SENDMONY" | "TOPUP"
export type TStatus = "SUCCESS" | "CANCELED" | "FAILED" | "PENDING"

export interface ITransaction {
  _id: string
  transferType: TTransferType
  status: TStatus
  amount: number
  senderWallet: string
  createdAt: string

}
