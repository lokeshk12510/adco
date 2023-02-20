import { useState } from 'react'
// Mui
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
// Components
import DoughnutChart from 'src/components/charts/DoughnutChart'
// Styled-components
import { ChartTable, StyledBox } from 'src/theme/StyledComponents'
// data
import { DoughnutDataProps, doughnutData } from './data'

const DoughnutSection = () => {
    const [data] = useState<DoughnutDataProps>(doughnutData)

    const { columns, rows } = data

    let chartArr = columns.slice(1).map((item) => {
        return rows[rows.length - 1][item.key]
    })

    const chartData = {
        labels: columns.slice(1).map((item) => item.title),
        datasets: [
            {
                label: 'Total',
                data: chartArr as number[],
                // backgroundColor: (context: ScriptableContext<'doughnut'>) => {
                //     const chart = context.chart
                //     if (!chart.chartArea) {
                //         return null
                //     }
                //     return getGradient(chart)
                // },
                // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 0.5,
                spacing: 1,
                radius: 60,
                cutout: '60%',
                hoverOffset: 4,
                borderRadius: 2,
            },
        ],
    }

    return (
        <StyledBox sx={{ overflow: 'auto' }}>
            <Typography variant="h6" fontWeight={'semi-bold'} mb={3}>
                Total Hours Worked
            </Typography>
            <ChartTable>
                <Box sx={{ width: 250, left: 0, position: 'sticky' }}>
                    <DoughnutChart data={chartData} />
                </Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.length > 0 &&
                                columns.map((item, i) => {
                                    return <TableCell key={i}>{item.title}</TableCell>
                                })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.length > 0 &&
                            rows.map((item, i) => {
                                return (
                                    <TableRow key={i} className={rows.length - 1 === i ? 'highlight' : ''}>
                                        {columns.length > 0 &&
                                            columns.map((col, i) => {
                                                return <TableCell key={i}>{item[col.key]}</TableCell>
                                            })}
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
            </ChartTable>
        </StyledBox>
    )
}

export default DoughnutSection
