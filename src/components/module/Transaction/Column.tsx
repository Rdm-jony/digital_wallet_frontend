

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { ITransaction } from "@/types"
import type { ColumnDef } from "@tanstack/react-table"
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