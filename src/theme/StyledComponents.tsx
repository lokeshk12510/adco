import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'

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
