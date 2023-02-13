import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Stack, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { GridActionsCellItem, GridColDef } from '@mui/x-data-grid'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { urls } from 'src/Router'
import CustomNoRowsOverlay from 'src/components/DataTable/CustomNoRowsOverlay'
import GridFooterRow from 'src/components/DataTable/GridFooterRow'
import { PDFIcon, RefreshIcon, UserIcon } from 'src/config/icons'
import { StyledBox, StyledDataGrid } from 'src/theme/StyledComponents'
import { data } from './data'

const initialTableValues = {
    loading: false,
    rows: data,
    rowCount: 20,
    page: 0,
    pageSize: 10,
}

const Home = () => {
    const [tableValues, setTableValues] = useState(initialTableValues)

    const navigate = useNavigate()

    const columns: GridColDef[] = [
        {
            field: 'status',
            headerName: 'Status',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            renderCell: ({ value }: any) => <CheckCircleIcon color="success" />,
        },
        { field: 'jobID', headerName: 'JOB ID', minWidth: 80, flex: 1 },
        { field: 'projectName', headerName: 'Project Name', minWidth: 180, flex: 1 },
        { field: 'state', headerName: 'state', minWidth: 60, flex: 1 },
        { field: 'sector', headerName: 'sector', minWidth: 120, flex: 1 },
        { field: 'contractType', headerName: 'contractType', minWidth: 180, flex: 1 },
        { field: 'signOffReq', headerName: 'signOff Required', minWidth: 180, flex: 1 },
        {
            field: 'actions',
            headerName: 'Actions',
            minWidth: 140,
            align: 'center',
            headerAlign: 'center',
            sortable: false,
            renderCell: ({ row }: any) => [
                <Tooltip title={'Refresh'} arrow key={'edit'}>
                    <GridActionsCellItem
                        icon={<RefreshIcon color="warning" fontSize="small" />}
                        label="Refresh"
                        onClick={() => navigate(urls.trafficLight)}
                    />
                </Tooltip>,
                <Tooltip title={'View'} arrow key={'view'}>
                    <GridActionsCellItem
                        icon={<VisibilityIcon color="primary" fontSize="small" />}
                        label="View"
                        onClick={() => navigate(urls.projectInfo)}
                    />
                </Tooltip>,
            ],
        },
    ]

    return (
        <StyledBox>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2} mb={3}>
                <Typography variant="body1" fontWeight={'bold'}>
                    Dec 22 (Closing 12/01/2023)
                </Typography>

                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={1}>
                    <IconButton color="warning">
                        <RefreshIcon />
                    </IconButton>
                    <IconButton color="success">
                        <UserIcon />
                    </IconButton>
                    <IconButton color="error">
                        <PDFIcon />
                    </IconButton>
                </Stack>
            </Stack>
            <StyledDataGrid
                getRowId={(row) => row.id}
                loading={tableValues.loading}
                columns={columns}
                initialState={{
                    pagination: {
                        pageSize: 10,
                    },
                }}
                rows={tableValues.rows}
                rowCount={tableValues.rowCount}
                page={tableValues.page}
                pageSize={tableValues.pageSize}
                disableSelectionOnClick
                disableColumnMenu
                rowsPerPageOptions={[10]}
                onPageChange={(page: any) => {
                    setTableValues((prev) => ({ ...prev, page: page }))
                }}
                autoHeight={true}
                onPageSizeChange={(pageSize: any) => {
                    setTableValues((prev) => ({ ...prev, pageSize: pageSize }))
                }}
                components={{
                    NoRowsOverlay: CustomNoRowsOverlay,
                    NoResultsOverlay: CustomNoRowsOverlay,
                    Footer: () => <GridFooterRow />,
                }}
            />
        </StyledBox>
    )
}

export default Home
