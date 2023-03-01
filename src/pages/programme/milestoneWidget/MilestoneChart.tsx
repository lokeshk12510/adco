// Mui
import { Box, colors } from '@mui/material'
// Component
import { BarChart } from 'src/components/charts/BarChart'

const MilestoneChart = () => {
    const labels = [
        '08 Jul 2022',
        '08 Aug 2022',
        '08 Sep 2022',
        '08 OCt 2022',
        '08 Nov 2022',
        '08 Dec 2022',
        '08 Jan 2022',
        '08 Feb 2022',
        '08 Mar 2022',
        '08 Apr 2022',
        '08 May 2022',
        '08 Jun 2022',
    ]

    const data = {
        labels,
        datasets: [
            {
                data: [5, 8, 7, 4, 6, 3, 5, 8, 7, 4, 6, 3],
                backgroundColor: colors.red[400],
                barThickness: 7,
            },
        ],
    }

    return (
        <Box sx={{ p: 2, height: 450 }}>
            <BarChart data={data} chartOptions={options} />
        </Box>
    )
}

export default MilestoneChart

const options = {
    responsive: true,
    // aspectRatio: 1,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
    },
    colors: {
        enabled: true,
        forceOverride: true,
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Forecast Milestone Date',
            },
            align: 'center',
            grid: {
                offset: true,
            },
        },
        y: {
            suggestedMax: 7,
            grid: {
                offset: true,
            },
            align: 'center',
            title: {
                display: true,
                text: 'Report Month',
            },
        },
    },
}
