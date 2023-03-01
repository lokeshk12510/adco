// Mui
import { Box, Typography } from '@mui/material'
// Component
import { BarChart } from 'src/components/charts/BarChart'

const MonthlyChart = () => {
    const labels = ['Health', 'General', 'Safety', '', '', '']

    const data = {
        labels,
        datasets: [
            {
                label: 'Health',
                data: [0, 0, 0],
            },
            {
                label: 'General',
                data: [0, 0, 0],
            },
            {
                label: 'Safety',
                data: [0, 0, 6],
            },
        ],
    }

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight={'semi-bold'} mb={3}>
                Incidents and Injuries this month
            </Typography>

            <BarChart data={data} chartOptions={options} />
        </Box>
    )
}

export default MonthlyChart

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
