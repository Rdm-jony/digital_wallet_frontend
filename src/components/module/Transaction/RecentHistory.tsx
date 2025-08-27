import {

  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useHistoryQuery } from "@/redux/features/transaction/transactionApi"
import type { TTransferType } from "@/types/transaction/transaction.type"
import { getHistoeryColumn } from "@/utils/getHistoryColumn"
import { History } from "lucide-react"
import Loader from "@/components/Loader"



export default function RecentHistory({ transferType }: { transferType: TTransferType }) {


  const { data = [], isLoading } = useHistoryQuery({ transferType }, { skip: !transferType })



  const table = useReactTable({
    data,
    columns: getHistoeryColumn(transferType),
    getCoreRowModel: getCoreRowModel(),
  })
  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <h1 className="my-10 flex gap-5 text-muted-foreground"><History /> Recent {transferType} history</h1>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="hover:bg-transparent">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={getHistoeryColumn(transferType)?.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>

      </Table>

    </div>
  )
}
