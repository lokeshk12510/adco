// Mui
import { InputAdornment, Stack, TextField, Typography } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
// Icon
import { PDFIcon, RefreshIcon, UserIcon } from 'src/config/icons'
import { Search } from '@mui/icons-material'
// Styled Components
import { StyledBox } from 'src/theme/StyledComponents'
// Component
import ProjectTable from './ProjectTable'
import PageContainer from 'src/components/pageContainer/Index'
// Api
import homeApi from 'src/apis/homeApi'
// Query
import { useQuery, useQueryClient } from '@tanstack/react-query'
// Types
import { TableStateTypes } from './types'
import { useState } from 'react'

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
        <PageContainer render={HeaderContent} title="Active PCR Projects">
            <>
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
            </>
        </PageContainer>
    )
}

export default Home

const HeaderContent = () => {
    // Get QueryClient from the context
    const queryClient = useQueryClient()

    const [search, setSearch] = useState<string>('')

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSearch(e.target.value)

        queryClient.invalidateQueries({
            queryKey: ['projects', { searchText: e.target.value }],
        })
    }

    return (
        <TextField
            fullWidth
            placeholder="Search project"
            size="small"
            value={search}
            onChange={handleOnChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Search />
                    </InputAdornment>
                ),
            }}
            sx={{
                display: { sm: 'none', md: 'block' },
                minWidth: { md: '200px', lg: '350px' },
                '& .MuiOutlinedInput-root': {
                    borderRadius: '20px',
                },
            }}
        />
    )
}
