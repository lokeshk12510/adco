// Mui
import { Box } from '@mui/material'
// Component
import { BarChart } from 'src/components/charts/BarChart'

const NoticeChart = () => {
    const labels = ['Prohibition', 'Improvement', 'Infringement', 'Environment', 'Fine or Penalties', 'Other Sanctions']

    const data = {
        labels,
        datasets: [
            {
                label: 'Last Month',
                data: [5, 6, 8, 7, 6, 8],
            },
            {
                label: 'This Month',
                data: [7, 8, 9, 10, 11, 12],
            },
            {
                label: 'Total Upto Date',
                data: [13, 14, 15, 16, 17, 18],
            },
        ],
    }

    return (
        <Box sx={{ p: 2 }}>
            <BarChart data={data} chartOptions={options} />
        </Box>
    )
}

export default NoticeChart

const options = {
    responsive: true,
    aspectRatio: 1.7 / 1,
    plugins: {
        legend: {
            position: 'bottom' as const,
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
            suggestedMax: 10,
            grid: {
                offset: true,
            },
        },
    },
}
