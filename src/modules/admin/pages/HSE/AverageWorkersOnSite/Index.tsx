import { Box, Typography } from '@mui/material'
import { LineChart } from 'src/components/charts/LineChart'
import { StyledBox } from 'src/theme/StyledComponents'

const AverageWorkersOnSite = () => {
    return (
        <StyledBox sx={{ overflow: 'auto' }}>
            <Typography variant="h6" fontWeight={'semi-bold'} mb={3}>
                Average Number of workers onsite
            </Typography>
            <Box sx={{ height: '400px', width: '100%', overflow: 'auto' }}>
                <LineChart />
            </Box>
        </StyledBox>
    )
}

export default AverageWorkersOnSite
