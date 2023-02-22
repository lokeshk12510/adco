import React from 'react'
import { Box, Stack, colors } from '@mui/material'
import Typography from '@mui/material/Typography'
import GaugeChart from 'src/components/charts/GaugeChart'
import pattern from 'patternomaly'

const findValue = (val: number, total: number = 100) => {
    return -25 + (val / total) * 100 * 1.5
}

const findDiffArr = (val: number) => {
    return [val, 100 - val]
}

interface GaugeWidgetProps {
    value: number
    target: number
    total?: number
    title: string
}

const GaugeWidget = (props: GaugeWidgetProps) => {
    const { value, target, total = 100, title } = props

    const chartData = {
        labels: ['Progress', 'Pending'],
        datasets: [
            {
                label: 'Total',
                data: findDiffArr(value),
                backgroundColor: [pattern.draw('diagonal-right-left', '#615DC6'), colors.grey[300]],
                borderWidth: 0.5,
                spacing: 1,
                radius: 150,
                cutout: '70%',
                hoverOffset: 4,
                borderRadius: 2,
                circumference: 270,
                rotation: 225,
                needleValue: findValue(target),
                completedValue: value,
                total,
            },
        ],
    }
    return (
        <Box className="rowStyle">
            <Typography variant="subtitle1" fontWeight={'semi-bold'} mb={3} textTransform={'uppercase'}>
                {title}
            </Typography>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={3}>
                <Box sx={{ background: '#fff', p: 4, borderRadius: 3 }}>
                    <GaugeChart data={chartData} />
                </Box>
                <Box flex={'1'} textAlign={'center'}>
                    <Typography>({target} % Time Elapsed)</Typography>
                    <Typography>({value} % Progress)</Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default GaugeWidget
