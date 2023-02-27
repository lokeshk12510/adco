import { FC } from 'react'
// Mui
import Tooltip from '@mui/material/Tooltip'
// Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { RefreshIcon } from 'src/config/icons'
// Data grid
import { GridActionsCellItem, GridColDef } from '@mui/x-data-grid'
import CustomNoRowsOverlay from 'src/components/DataTable/CustomNoRowsOverlay'
import GridFooterRow from 'src/components/DataTable/GridFooterRow'
// Router
import { useNavigate } from 'react-router-dom'
import { urls } from 'src/Router'
// Styled components
import { StyledDataGrid } from 'src/theme/StyledComponents'
// Types
import { TableStateTypes } from './types'

interface ProjectTableProps {
    tableValues: TableStateTypes
    setTableValues: React.Dispatch<React.SetStateAction<TableStateTypes>>
    isLoading: boolean
}

const ProjectTable: FC<ProjectTableProps> = ({ tableValues, setTableValues, isLoading }) => {
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
        <StyledDataGrid
            getRowId={(row) => row.id}
            loading={isLoading}
            columns={columns}
            rows={tableValues.rows}
            rowCount={tableValues.rowCount}
            page={tableValues.page}
            pageSize={tableValues.pageSize}
            disableSelectionOnClick
            disableColumnMenu
            rowsPerPageOptions={[10]}
            onPageChange={(page: number) => {
                setTableValues((prev) => ({ ...prev, page: page }))
            }}
            autoHeight={true}
            onPageSizeChange={(pageSize: number) => {
                setTableValues((prev) => ({ ...prev, pageSize: pageSize }))
            }}
            components={{
                NoRowsOverlay: CustomNoRowsOverlay,
                NoResultsOverlay: CustomNoRowsOverlay,
                Footer: () => <GridFooterRow />,
            }}
        />
    )
}

export default ProjectTable
