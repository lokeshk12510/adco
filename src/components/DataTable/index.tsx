import { FC } from 'react'
// Mui
import { DataGrid, GridColDef } from '@mui/x-data-grid'
// Icons
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material'
// Components
import CustomNoRowsOverlay from './CustomNoRowsOverlay'
import GridFooterRow from './GridFooterRow'

interface DataTableProps {
    rows: Array<any>
    columns: GridColDef[]
    rowHeight: number
    stickyRowCount: number
    getRowId: () => string
}

const DataTable: FC<DataTableProps> = ({ rows, columns, rowHeight = 50, ...props }) => {
    return (
        <>
            <DataGrid
                components={{
                    NoRowsOverlay: CustomNoRowsOverlay,
                    NoResultsOverlay: CustomNoRowsOverlay,
                    ColumnSortedDescendingIcon: ExpandMoreIcon,
                    ColumnSortedAscendingIcon: ExpandLessIcon,
                    Footer: () => <GridFooterRow stickyRowCount={props.stickyRowCount} />,
                }}
                rows={rows}
                columns={columns}
                pagination
                paginationMode="server"
                // rowsPerPageOptions={[10, 20, 30, 40, 50]}
                autoHeight={true}
                rowHeight={rowHeight}
                headerHeight={50}
                //density="compact"
                disableSelectionOnClick
                disableColumnMenu
                sx={(theme) => ({
                    '&.MuiDataGrid-root': {
                        // border: 'none',
                        // '& .MuiDataGrid-main': {
                        //     '&>div:first-of-type': {
                        //         height: props?.rows?.length === 0 ? '100px!important' : 'unset',
                        //     },
                        // },
                        '& .MuiDataGrid-row--dynamicHeight': {
                            minHeight: `${rowHeight}px !important`,
                        },
                    },
                    '.MuiDataGrid-columnSeparator': {
                        display: 'none',
                    },
                    '& .MuiPaginationItem-page.Mui-selected': {
                        color: '#fff',
                    },
                    '& .MuiDataGrid-row.Mui-disabled': {
                        backgroundColor: theme.palette.grey[200],
                        position: 'fixed',
                        bottom: '-50px',
                        left: 0,
                    },
                    '& .MuiDataGrid-cell': {
                        wordBreak: 'break-word',
                    },

                    '& .MuiPaginationItem-page': {
                        color: '#000',
                    },
                    '& .MuiPaginationItem-root': {
                        marginInline: 0.9,
                    },
                    '& .MuiPaginationItem-previousNext': {
                        border: `1px solid ${theme.palette.secondary.main}`,
                        color: theme.palette.secondary.main,
                        paddingInline: 2,
                    },
                    '& .MuiPaginationItem-previousNext.Mui-disabled': {
                        color: theme.palette.grey[400],
                        border: `1px solid ${theme.palette.grey[400]}`,
                    },
                    '& .MuiDataGrid-overlay': {
                        background: 'transparent',
                    },
                    // ".MuiDataGrid-columnHeaders": {
                    // 	backgroundColor: theme.palette.primary.main,
                    // 	color: theme.palette.primary.contrastText,
                    // },
                    // '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
                    //     py: '7px',
                    // },
                })}
                {...props}
            />
        </>
    )
}

export default DataTable
