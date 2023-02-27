import { useState, useEffect } from 'react'
// Mui
import { Stack, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
// Icon
import { PDFIcon, RefreshIcon, UserIcon } from 'src/config/icons'
// Styled Components
import { StyledBox } from 'src/theme/StyledComponents'
// Component
import ProjectTable from './ProjectTable'
// Types
import { TableStateTypes, initialTableValues } from './types'
import homeApi from 'src/apis/homeApi'

import { useQuery } from 'react-query'

const Home = () => {
    const [tableValues, setTableValues] = useState<TableStateTypes>(initialTableValues)

    const { isLoading, data } = useQuery('todos', homeApi.getProjects)

    console.log(data, isLoading)

    useEffect(() => {
        data && setTableValues((t) => ({ ...t, rows: data.mock, rowCount: data.mock.length }))
    }, [data])

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
            <ProjectTable tableValues={tableValues} setTableValues={setTableValues} isLoading={isLoading} />
        </StyledBox>
    )
}

export default Home
