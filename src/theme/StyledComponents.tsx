import { InputLabel, styled } from '@mui/material'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import TableContainer from '@mui/material/TableContainer'

export const StyledBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(5),
    borderRadius: 10,
    boxShadow: theme.shadows[3],
}))

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 'none',
    '& .MuiDataGrid-columnHeaders': {
        background: theme.palette.primary.main,
        '& .MuiDataGrid-columnHeader': {
            color: theme.palette.common.white,
            textTransform: 'upperCase',
        },
    },
    '& .MuiDataGrid-virtualScrollerContent': {
        border: `1px solid ${theme.palette.grey[400]}`,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
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
        marginInline: 5,
    },
    '& .MuiPaginationItem-previousNext': {
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        paddingInline: 8,
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
}))

export const StyledLabel = styled(InputLabel)(({ theme }) => ({
    color: theme.palette.common.black,
}))

export const ChartTable = styled(TableContainer)(({ theme }) => ({
    '& .MuiTable-root': {
        borderCollapse: 'separate',
        borderSpacing: '0 5px',
    },
    '& .MuiTableCell-head': {
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',
        paddingInline: 3,
        paddingBlock: 5,
        ...{ ...theme.typography.overline, fontWeight: 'bold' },
    },
    '& .MuiTableBody-root': {
        '& .MuiTableRow-root': {
            background: theme.palette.grey[100],
            '& .MuiTableCell-body': {
                borderTop: `1px solid ${theme.palette.grey[400]}`,
                borderBottom: `1px solid ${theme.palette.grey[400]}`,
                '&:first-of-type': {
                    borderLeft: `1px solid ${theme.palette.grey[400]}`,
                },
                '&:last-of-type': {
                    borderRight: `1px solid ${theme.palette.grey[400]}`,
                },
            },
            '&.highlight': {
                background: theme.palette.primary.light,
                '& .MuiTableCell-body': {
                    borderTop: `1px solid ${theme.palette.primary.main}`,
                    borderBottom: `1px solid ${theme.palette.primary.main}`,
                    '&:first-of-type': {
                        borderLeft: `1px solid ${theme.palette.primary.main}`,
                    },
                    '&:last-of-type': {
                        borderRight: `1px solid ${theme.palette.primary.main}`,
                    },
                },
            },
        },
    },
}))
