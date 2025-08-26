
export type TTransferType = "CASHIN" | "CASHOUT" | "SENDMONY" | "TOPUP"
export type TStatus = "SUCCESS" | "CANCELED" | "FAILED" | "PENDING"

export interface ITransaction {
  _id: string
  transferType: TTransferType
  status: TStatus
  amount: number
  senderWallet?: string
  receiverWallet?:string
  ssl_tran_id?:string
  createdAt: string

}
