
export type TTransferType = "SUCCESS" | "CANCELED" | "FAILED"

export interface ITransaction {
  _id: string
  transferType: TTransferType
  status: string
  amount: number
  senderWallet: string
  createdAt: string

}
