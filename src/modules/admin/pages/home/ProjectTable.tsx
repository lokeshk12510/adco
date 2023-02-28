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
// Styled components
import { StyledDataGrid } from 'src/theme/StyledComponents'
// Types
import { ProjectTableProps } from './types'
// Urls
import { urls } from 'src/routes/urls'

const ProjectTable: FC<ProjectTableProps> = ({ isLoading, rows = [], pageSize = 10 }) => {
    const navigate = useNavigate()

    // DataGrid columns def
    const columns: GridColDef[] = [
        {
            field: 'status',
            headerName: 'Status',
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            renderCell: ({ value }: any) => <CheckCircleIcon color="success" />,
        },
        { field: 'jobId', headerName: 'JOB ID', minWidth: 80, flex: 1 },
        { field: 'projectName', headerName: 'Project Name', minWidth: 180, flex: 1 },
        { field: 'state', headerName: 'state', minWidth: 60, flex: 1 },
        { field: 'constructionSector', headerName: 'sector', minWidth: 120, flex: 1 },
        { field: 'contractType', headerName: 'contractType', minWidth: 180, flex: 1 },
        { field: 'currentSignoff', headerName: 'signOff Required', minWidth: 180, flex: 1 },
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
            rows={rows || []}
            rowCount={rows.length}
            pageSize={pageSize}
            disableSelectionOnClick
            disableColumnMenu
            autoHeight={true}
            components={{
                NoRowsOverlay: CustomNoRowsOverlay,
                NoResultsOverlay: CustomNoRowsOverlay,
                Footer: () => <GridFooterRow />,
            }}
        />
    )
}

export default ProjectTable
