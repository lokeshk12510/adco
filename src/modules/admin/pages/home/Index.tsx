// Mui
import { Stack, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
// Icon
import { PDFIcon, RefreshIcon, UserIcon } from 'src/config/icons'
// Styled Components
import { StyledBox } from 'src/theme/StyledComponents'
// Component
import ProjectTable from './ProjectTable'
// Api
import homeApi from 'src/apis/homeApi'
// Query
import { useQuery } from '@tanstack/react-query'
import { TableStateTypes } from './types'
import Tooltip from '@mui/material/Tooltip'

const Home = () => {
    // func to get project list data
    const { isLoading, data, refetch, isRefetching, isFetching } = useQuery({
        queryKey: ['projects'],
        queryFn: (): Promise<TableStateTypes> => homeApi.getProjects(),
        onError: (err) => {
            console.log(err)
        },
    })

    return (
        <StyledBox>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2} mb={3}>
                <Typography variant="body1" fontWeight={'bold'}>
                    Dec 22 (Closing 12/01/2023)
                </Typography>

                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={1}>
                    <Tooltip title="Refresh" arrow placement="top">
                        <IconButton color="warning" onClick={() => refetch()}>
                            <RefreshIcon />
                        </IconButton>
                    </Tooltip>
                    <IconButton color="success">
                        <UserIcon />
                    </IconButton>
                    <IconButton color="error">
                        <PDFIcon />
                    </IconButton>
                </Stack>
            </Stack>

            {/* Project list DataGrid */}
            <ProjectTable rows={data?.mock} isLoading={isLoading || isRefetching || isFetching} />
        </StyledBox>
    )
}

export default Home
