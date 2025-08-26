import type { TTransferType } from "@/types/transaction/transaction.type";
import { transferType } from "@/constants/transferType";
import { SendMoneyColumns, TopUpColumns, WithdrawColumns } from "@/components/module/Transaction/Column";

export const getHistoeryColumn = (type: TTransferType) => {
    switch (type) {

        case transferType.TOPUP:
            return [...TopUpColumns]
        case transferType.SENDMONY:
            return [...SendMoneyColumns]
        case transferType.CASHOUT:
            return [...SendMoneyColumns]
        case transferType.WITHDRAW:
            return [...WithdrawColumns]
        case transferType.CASHIN:
            return [...SendMoneyColumns]
        default:
            return [];
    }
}