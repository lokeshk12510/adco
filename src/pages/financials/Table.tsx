import React from 'react'

import {
    ColumnDef,
    ColumnPinningState,
    flexRender,
    getCoreRowModel,
    useReactTable,
    CellContext,
} from '@tanstack/react-table'
import { makeData, Person } from './makeData'
import TableContainer from '@mui/material/TableContainer'
import {
    TableHead,
    Table as MuiTable,
    TableCell,
    TableBody,
    TableRow,
    styled,
    Box,
    TableCellProps,
} from '@mui/material'

declare module '@tanstack/react-table' {
    interface ColumnMeta<TData, TValue> {
        // Your additional properties here
        getCellContent: (context: CellContext<TData, TValue>) => TableCellProps
    }
}

const defaultColumns: ColumnDef<Person>[] = [
    {
        accessorKey: 'section',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        meta: {
            // className: 'bold',
            // style: { fontWeight: 'bold' },
            getCellContent: (context: CellContext<Person, unknown>) => {
                if (context.row.index === 0) {
                    console.log(context)
                }
                return { style: { fontWeight: 'bold' }, className: 'bold' }
            },
        },
        getUniqueValues: (row: any) => {
            console.log(row)
            return row
        },
    },
    {
        accessorFn: (row) => row.total,
        id: 'total',
        cell: (info) => info.getValue(),
        header: () => <span>Total</span>,
        footer: (props) => props.column.id,
    },
    {
        accessorKey: 'jan22',
        header: () => 'Jan 22',
        footer: (props) => props.column.id,
    },
    {
        accessorKey: 'feb22',
        header: () => 'feb22',
        footer: (props) => props.column.id,
    },
    {
        accessorKey: 'mar22',
        header: () => 'mar22',
        footer: (props) => props.column.id,
    },
    {
        accessorKey: 'apr22',
        header: () => 'apr22',
        footer: (props) => props.column.id,
    },
    {
        accessorKey: 'may22',
        header: () => 'may22',
        footer: (props) => props.column.id,
    },
    {
        accessorKey: 'jun22',
        header: () => 'jun22',
        footer: (props) => props.column.id,
    },
    {
        accessorKey: 'jul22',
        header: () => 'jul22',
        footer: (props) => props.column.id,
    },
    {
        accessorKey: 'aug22',
        header: () => 'aug22',
        footer: (props) => props.column.id,
    },
    {
        accessorKey: 'sep22',
        header: () => 'sep22',
        footer: (props) => props.column.id,
    },
    {
        accessorKey: 'oct22',
        header: () => 'oct22',
        footer: (props) => props.column.id,
    },
    {
        accessorKey: 'nov22',
        header: () => 'nov22',
        footer: (props) => props.column.id,
    },
    {
        accessorKey: 'dec22',
        header: () => 'dec22',
        footer: (props) => props.column.id,
    },
    {
        accessorKey: 'unallocated',
        header: () => 'unallocated',
        footer: (props) => props.column.id,
    },
    {
        accessorKey: 'toDate',
        header: () => 'toDate',
        footer: (props) => props.column.id,
    },
]

function Table() {
    const [data] = React.useState(() => makeData(5000))
    const [columns] = React.useState(() => [...defaultColumns])

    const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>({
        left: ['section', 'total'],
        right: ['toDate'],
    })

    const [isSplit] = React.useState(true)

    const table = useReactTable({
        data,
        columns,
        state: {
            columnPinning,
        },
        onColumnPinningChange: setColumnPinning,
        getCoreRowModel: getCoreRowModel(),
        debugTable: true,
        debugHeaders: true,
        debugColumns: true,
    })

    return (
        <Box>
            <Root>
                {isSplit ? (
                    <MuiTable className="left" style={{ position: 'sticky', left: 0 }} size="small">
                        <TableHead>
                            {table.getLeftHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableCell key={header.id} colSpan={header.colSpan}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHead>
                        <TableBody>
                            {table
                                .getRowModel()
                                .rows.slice(0, 20)
                                .map((row) => {
                                    return (
                                        <TableRow key={row.id}>
                                            {row.getLeftVisibleCells().map((cell) => {
                                                let hasMeta = cell.getContext().cell.column.columnDef.meta

                                                return (
                                                    <TableCell
                                                        key={cell.id}
                                                        {...(hasMeta && {
                                                            ...hasMeta.getCellContent(cell.getContext()),
                                                        })}
                                                    >
                                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                    </TableCell>
                                                )
                                            })}
                                        </TableRow>
                                    )
                                })}
                        </TableBody>
                    </MuiTable>
                ) : null}
                <MuiTable size="small">
                    <TableHead>
                        {(isSplit ? table.getCenterHeaderGroups() : table.getHeaderGroups()).map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableCell key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody>
                        {table
                            .getRowModel()
                            .rows.slice(0, 20)
                            .map((row) => {
                                return (
                                    <TableRow key={row.id}>
                                        {(isSplit ? row.getCenterVisibleCells() : row.getVisibleCells()).map((cell) => {
                                            let hasMeta = cell.getContext().cell.column.columnDef.meta

                                            return (
                                                <TableCell
                                                    key={cell.id}
                                                    {...(hasMeta && { ...hasMeta.getCellContent(cell.getContext()) })}
                                                >
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </MuiTable>
                {isSplit ? (
                    <MuiTable className="right" style={{ position: 'sticky', right: 0 }} size="small">
                        <TableHead>
                            {table.getRightHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableCell key={header.id} colSpan={header.colSpan}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHead>
                        <TableBody>
                            {table
                                .getRowModel()
                                .rows.slice(0, 20)
                                .map((row) => {
                                    return (
                                        <TableRow key={row.id}>
                                            {row.getRightVisibleCells().map((cell) => {
                                                let hasMeta = cell.getContext().cell.column.columnDef.meta

                                                return (
                                                    <TableCell
                                                        key={cell.id}
                                                        {...(hasMeta && {
                                                            ...hasMeta.getCellContent(cell.getContext()),
                                                        })}
                                                    >
                                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                    </TableCell>
                                                )
                                            })}
                                        </TableRow>
                                    )
                                })}
                        </TableBody>
                    </MuiTable>
                ) : null}
            </Root>
        </Box>
    )
}

export default Table

const Root = styled(TableContainer)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    overflow: 'auto',
    position: 'relative',
    '& .MuiTable-root': {
        collapse: 'separate',
        '&.right': {
            marginLeft: 15,
        },
    },
    '& .MuiTableCell-root': {
        background: theme.palette.common.white,
        border: `1px solid ${theme.palette.grey[300]}`,
        whiteSpace: 'nowrap',
    },
    '& .MuiTableCell-head': {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        border: 'none',
        textTransform: 'uppercase',
        textAlign: 'center',
        '&:first-of-type': {
            borderTopLeftRadius: 5,
        },
        '&:last-of-type': {
            borderTopRightRadius: 5,
        },
    },
    '& .MuiTableBody-root': {
        '& .MuiTableCell-body': {
            height: 35,
        },
    },
}))
