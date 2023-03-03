import React from 'react'
// React-table
import {
    ColumnDef,
    ColumnPinningState,
    flexRender,
    getCoreRowModel,
    useReactTable,
    CellContext,
    Row,
} from '@tanstack/react-table'
// data
import { columns, generateDynamicColumns, Person, rows } from './makeData'
// Mui
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
    TableRowProps,
    colors,
} from '@mui/material'

// including additional `getCellContext` to `ColumnMeta`, get access to cell context
declare module '@tanstack/react-table' {
    interface ColumnMeta<TData, TValue> {
        // Your additional properties here
        getCellContext: (context: CellContext<TData, TValue>) => TableCellProps | void | any
    }
}

// Func to provide props to table row
const getRowProps = (context: Row<Person>): TableRowProps | void => {
    if (context.original.section.includes('section')) {
        return { className: 'sectionHeader', sx: (theme) => ({ background: theme.palette.primary.light }) }
    }

    if (context.original.section.includes('forecast')) {
        return {
            className: 'sectionFooter',
        }
    }
}

// Func to provide props to table cell
const getCellProps = (context: CellContext<Person, unknown>): TableCellProps | void => {
    if (context.row.original.section.includes('section')) {
        return {
            style: { fontWeight: 'bold', minWidth: '30%', textTransform: 'uppercase' },
            className: 'bold',
        }
    }
}

// column definitions for table configurations
const defaultColumns: ColumnDef<Person>[] = [
    {
        accessorKey: 'section',
        cell: (info) => info.getValue(),
        header: () => '',
        footer: (props) => props.column.id,
        meta: {
            getCellContext: (context: CellContext<Person, unknown>) => {
                if (context.row.original.section.includes('section')) {
                    return { colSpan: 2 }
                }
            },
        },
    },
    {
        accessorFn: (row) => row.total,
        id: 'total',
        cell: (info) => info.getValue(),
        header: () => <span>Total</span>,
        footer: (props) => props.column.id,
        meta: {
            getCellContext: (context: CellContext<Person, unknown>) => {
                if (context.row.original.section.includes('section')) {
                    return { visibility: false, className: 'display-none' }
                }
            },
        },
    },
    ...generateDynamicColumns(columns), // generating dynamic columns based on the custom data
    {
        accessorKey: 'unallocated',
        header: () => 'unallocated',
        footer: (props) => props.column.id,
        meta: {
            getCellContext: (context: CellContext<Person, unknown>) => {
                if (context.row.original.section.includes('section')) {
                    return { colSpan: 15 }
                }
            },
        },
    },
    {
        accessorKey: 'toDate',
        header: () => 'To Date',
        footer: (props) => props.column.id,
        meta: {
            getCellContext: (context: CellContext<Person, unknown>) => {
                return { style: { maxWidth: 100 }, className: 'bold', width: 100 }
            },
        },
    },
]

function Table() {
    const [data] = React.useState(rows)
    const [columns] = React.useState(() => [...defaultColumns])

    const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>({
        left: ['section', 'total'],
        right: ['toDate'],
    })

    const [isSplit] = React.useState(true) // to separate table to sticky mode

    const table = useReactTable({
        data,
        columns,
        state: {
            columnPinning,
        },
        onColumnPinningChange: setColumnPinning,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <Box>
            <Root>
                {/* -------------------- left table ------------------------ */}
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
                            {table.getRowModel().rows.map((row) => {
                                return (
                                    <TableRow key={row.id} {...getRowProps(row)}>
                                        {row.getLeftVisibleCells().map((cell) => {
                                            let hasMeta = cell.getContext().cell.column.columnDef.meta

                                            if (hasMeta?.getCellContext(cell.getContext())?.visibility === false) {
                                                return null
                                            }

                                            return (
                                                <TableCell
                                                    key={cell.id}
                                                    {...(hasMeta && {
                                                        ...hasMeta.getCellContext(cell.getContext()),
                                                    })}
                                                    {...getCellProps(cell.getContext())}
                                                    visibility=""
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
                {/* -------------------- left table ------------------------ */}

                {/* -------------------- center table ------------------------ */}
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
                        {table.getRowModel().rows.map((row) => {
                            return (
                                <TableRow key={row.id} {...getRowProps(row)}>
                                    {(isSplit ? row.getCenterVisibleCells() : row.getVisibleCells()).map((cell) => {
                                        let hasMeta = cell.getContext().cell.column.columnDef.meta

                                        if (hasMeta?.getCellContext(cell.getContext())?.visibility === false) {
                                            return null
                                        }

                                        return (
                                            <TableCell
                                                key={cell.id}
                                                {...(hasMeta && { ...hasMeta.getCellContext(cell.getContext()) })}
                                                {...getCellProps(cell.getContext())}
                                                visibility=""
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
                {/* -------------------- center table ------------------------ */}

                {/* -------------------- right table ------------------------ */}
                {isSplit ? (
                    <MuiTable className="right" style={{ position: 'sticky', right: 0, maxWidth: 150 }} size="small">
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
                            {table.getRowModel().rows.map((row) => {
                                return (
                                    <TableRow key={row.id} {...getRowProps(row)}>
                                        {row.getRightVisibleCells().map((cell) => {
                                            let hasMeta = cell.getContext().cell.column.columnDef.meta

                                            return (
                                                <TableCell
                                                    key={cell.id}
                                                    {...(hasMeta && {
                                                        ...hasMeta.getCellContext(cell.getContext()),
                                                    })}
                                                    {...getCellProps(cell.getContext())}
                                                    visibility=""
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
                {/* -------------------- right table ------------------------ */}
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
    borderRadius: 7,
    '& .MuiTable-root': {
        collapse: 'separate',
        '&.right': {
            zIndex: 2,
            marginLeft: 15,
            '& .MuiTableCell-head': {
                '&:last-of-type': {
                    borderTopRightRadius: 5,
                },
                '&:first-of-type': {
                    borderLeft: `2px solid ${theme.palette.grey[500]}`,
                },
            },
            '& .MuiTableCell-body': {
                '&:first-of-type': {
                    borderLeft: `2px solid ${theme.palette.grey[500]}`,
                },
            },
        },
        '&.left': {
            zIndex: 2,
            '& .MuiTableCell-head': {
                '&:first-of-type': {
                    borderTopLeftRadius: 5,
                },
                '&:last-of-type': {
                    borderRight: `2px solid ${theme.palette.grey[500]}`,
                },
            },
            '& .MuiTableCell-body': {
                '&:last-of-type': {
                    borderRight: `2px solid ${theme.palette.grey[500]}`,
                },
            },
        },
    },
    '& .MuiTableCell-root': {
        border: `1px solid ${theme.palette.grey[200]}`,
        whiteSpace: 'nowrap',
    },
    '& .MuiTableCell-head': {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        border: 'none',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    '& .MuiTableBody-root': {
        background: theme.palette.common.white,
        '& .MuiTableCell-body': {
            height: 35,
            padding: '2px 5px',
            '&.editable': {
                background: colors.yellow[100],
            },
            '&.disabled': {
                pointerEvents: 'none',
            },
        },
        '& .MuiTableRow-root': {
            // '&:hover': {
            //     opacity: 0.7,
            // },
            '&.sectionHeader': {
                background: theme.palette.primary.light,
            },
        },
        '& .sectionFooter': {
            '& .MuiTableCell-body': {
                background: theme.palette.grey[300],
                fontWeight: 'bold',
                textTransform: 'uppercase',
            },
        },
    },
}))
