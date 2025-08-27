

import Copy from "@/components/Copy"
import { Badge } from "@/components/ui/badge"
import { paymentStatus } from "@/constants/status"
import { cn } from "@/lib/utils"
import type { ITransaction } from "@/types"
import type { ColumnDef, FilterFn } from "@tanstack/react-table"
import { addHours, format } from "date-fns"


export const TopUpColumns: ColumnDef<ITransaction>[] = [

  {
    header: "Id",
    accessorKey: "_id",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("_id")}</div>
    ),
  },
  {
    header: "Receiver Wallet",
    accessorKey: "receiverWallet",
  },
  {
    header: "SSL_Tran_id",
    accessorKey: "ssl_tran_id",
  },
  {
    header: "Transfer Type",
    accessorKey: "transferType",
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: ({ row }) => (
      <div>
        <span className="text-lg text-primary font-semibold">{row.original.amount}</span>{" "}
      </div>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => (
      <Badge
        className={cn(
          row.getValue("status") === "SUCCESS" &&
          "bg-primary text-primary-foreground",
          row.getValue("status") === "CANCELED" &&
          "bg-red-500 text-white"
        )}
      >
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    header: () => <div className="text-right">Time</div>,
    accessorKey: "balance",
    cell: ({ row }) => {
      const formatted = format(addHours(new Date(row.original.createdAt), 6), "PPpp")
      return <div className="text-right">{formatted}</div>
    },
  },
]
export const SendMoneyColumns: ColumnDef<ITransaction>[] = [

  {
    header: "Id",
    accessorKey: "_id",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("_id")}</div>
    ),
  },
  {
    header: "Receiver Wallet",
    accessorKey: "receiverWallet",
  },
  {
    header: "Sender Wallet",
    accessorKey: "senderWallet",
  },
  {
    header: "Transfer Type",
    accessorKey: "transferType",
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: ({ row }) => (
      <div>
        <span className="text-lg text-primary font-semibold">{row.original.amount}</span>{" "}
      </div>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => (
      <Badge
        className={cn(
          row.getValue("status") === "SUCCESS" &&
          "bg-primary text-primary-foreground",
          row.getValue("status") === "CANCELED" &&
          "bg-red-500 text-white"
        )}
      >
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    header: () => <div className="text-right">Time</div>,
    accessorKey: "balance",
    cell: ({ row }) => {
      const formatted = format(addHours(new Date(row.original.createdAt), 6), "PPpp")
      return <div className="text-right">{formatted}</div>
    },
  },
]

export const WithdrawColumns: ColumnDef<ITransaction>[] = [

  {
    header: "Id",
    accessorKey: "_id",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("_id")}</div>
    ),
  },
  {
    header: "Sender Wallet",
    accessorKey: "senderWallet",
  },
  {
    header: "SSL_Tran_id",
    accessorKey: "ssl_tran_id",
  },
  {
    header: "Transfer Type",
    accessorKey: "transferType",
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: ({ row }) => (
      <div>
        <span className="text-lg text-primary font-semibold">{row.original.amount}</span>{" "}
      </div>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => (
      <Badge
        className={cn(
          row.getValue("status") === "SUCCESS" &&
          "bg-primary text-primary-foreground",
          row.getValue("status") === "CANCELED" &&
          "bg-red-500 text-white"
        )}
      >
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    header: () => <div className="text-right">Time</div>,
    accessorKey: "createdAt",
    cell: ({ row }) => {
      const formatted = format(addHours(new Date(row.original.createdAt), 6), "PPpp")
      return <div className="text-right">{formatted}</div>
    },
  },
]


const multiColumnFilterFn: FilterFn<ITransaction> = (row, _columnId, filterValue) => {
  console.log(row)
  const searchableRowContent =
    `${row.original.senderWallet} ${row.original.receiverWallet} ${row.original.ssl_tran_id}`.toLowerCase()
  const searchTerm = (filterValue ?? "").toLowerCase()
  return searchableRowContent.includes(searchTerm)
}

const statusFilterFn: FilterFn<ITransaction> = (
  row,
  columnId,
  filterValue: string[]
) => {
  if (!filterValue?.length) return true
  const status = row.getValue(columnId) as string
  return filterValue.includes(status)
}

export const TransactionFilterColumn: ColumnDef<ITransaction>[] = [


  {
    header: "Sender Wallet",
    accessorKey: "senderWallet",
    size: 180,
    filterFn: multiColumnFilterFn,
    enableHiding: false,
    cell: ({ row }) => (
      <div>
        <span className="text-sm text-muted-foreground cop">
          {
            row?.original?.senderWallet ? <Copy inputValue={row?.original?.senderWallet} /> : "None"

          }
        </span>
      </div>
    ),
  },
  {
    header: "Receiver Wallet",
    accessorKey: "receiverWallet",
    filterFn: multiColumnFilterFn,
    cell: ({ row }) => (
      <div>
        <span className="text-sm text-muted-foreground cop">
          {
            row?.original?.receiverWallet ? <Copy inputValue={row?.original?.receiverWallet} /> : "none"

          }
        </span>
      </div>
    ),
    size: 220,
  },
  {
    header: "SSL_Tran_Id",
    accessorKey: "ssl_tran_id",
    filterFn: multiColumnFilterFn,
    cell: ({ row }) => (
      <div>
        <span className="text-sm text-muted-foreground cop">
          {
            row?.original?.ssl_tran_id ? <Copy inputValue={row?.original?.ssl_tran_id} /> : "none"

          }
        </span>
      </div>
    ),
    size: 220,
  },
  {
    header: "Transfer Type",
    accessorKey: "transferType",

  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => (
      <Badge
        className={cn(
          row.getValue("status") === paymentStatus.PENDING &&
          "bg-muted-foreground/60 text-primary-foreground",
          row.getValue("status") === paymentStatus.SUCCESS &&
          "bg-primary",
          row.getValue("status") === paymentStatus.CANCELED &&
          "bg-orange-500",
          row.getValue("status") === paymentStatus.FAILED &&
          "bg-red-500",
          "text-white"
        )}
      >
        {row.getValue("status")}
      </Badge>
    ),
    size: 100,
    filterFn: statusFilterFn,
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: () => <div className="text-right">Time</div>,
    accessorKey: "createdAt",
    cell: ({ row }) => {
      const formatted = format(addHours(new Date(row.original.createdAt), 6), "PPpp")
      return <div className="text-right">{formatted}</div>
    },
  },
]

