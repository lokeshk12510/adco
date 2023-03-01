// Mui
import { Box, Typography } from '@mui/material'
// Component
import { BarChart } from 'src/components/charts/BarChart'

const TotalChart = () => {
    const labels = ['Health', 'General', 'Safety', '', '', '']

    const data = {
        labels,
        datasets: [
            // {
            //     label: 'This Month',
            //     data: [6, 3, 4, 0, 0, 0],
            //     backgroundColor: [colors.pink[300], colors.blue[300], colors.brown[300]],
            // },
            {
                label: 'Health',
                data: [6, 0, 0],
            },
            {
                label: 'General',
                data: [0, 3, 0],
            },
            {
                label: 'Safety',
                data: [0, 0, 4],
            },
        ],
    }

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight={'semi-bold'} mb={3}>
                Incidents and Injuries total to Date
            </Typography>

            <BarChart data={data} chartOptions={options} />
        </Box>
    )
}

export default TotalChart

const options = {
    responsive: true,
    aspectRatio: 2 / 1,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    colors: {
        enabled: true,
        forceOverride: true,
    },
    scales: {
        x: {
            stacked: true,
            grid: {
                offset: true,
            },
        },
        y: {
            stacked: true,
            suggestedMax: 7,
            grid: {
                offset: true,
            },
        },
    },
}
