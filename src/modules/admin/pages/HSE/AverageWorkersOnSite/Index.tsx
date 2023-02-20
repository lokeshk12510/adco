// Mui
import { Box, Typography } from '@mui/material'
// Components
import { LineChart } from 'src/components/charts/LineChart'
// Styled Components
import { StyledBox } from 'src/theme/StyledComponents'

const AverageWorkersOnSite = () => {
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Workers',
                data: [100, 123, 314, 615, 214, 1134, 314, 714, 765, 546, 234, 555],
                borderColor: '#82B34E',
                backgroundColor: '#82B34E33',
                tension: 0.2,
            },
        ],
    }

    return (
        <StyledBox sx={{ overflow: 'auto' }}>
            <Typography variant="h6" fontWeight={'semi-bold'} mb={3}>
                Average Number of workers onsite
            </Typography>
            <Box sx={{ height: '400px', width: '100%', overflow: 'auto' }}>
                <LineChart data={data} />
            </Box>
        </StyledBox>
    )
}

export default AverageWorkersOnSite
