import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    styled,
} from '@mui/material'
import { useState } from 'react'
import DoughnutChart from 'src/components/charts/DoughnutChart'
import { StyledBox } from 'src/theme/StyledComponents'
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

const ChartTable = styled(TableContainer)(({ theme }) => ({
    '& .MuiTable-root': {
        borderCollapse: 'separate',
        borderSpacing: '0 5px',
    },
    '& .MuiTableCell-head': {
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',
        paddingInline: 3,
        paddingBlock: 5,
        ...{ ...theme.typography.overline, fontWeight: 'bold' },
    },
    '& .MuiTableBody-root': {
        '& .MuiTableRow-root': {
            background: theme.palette.grey[200],
            '& .MuiTableCell-body': {
                borderTop: `1px solid ${theme.palette.grey[400]}`,
                borderBottom: `1px solid ${theme.palette.grey[400]}`,
                '&:first-of-type': {
                    borderLeft: `1px solid ${theme.palette.grey[400]}`,
                },
                '&:last-of-type': {
                    borderRight: `1px solid ${theme.palette.grey[400]}`,
                },
            },
            '&.highlight': {
                background: theme.palette.primary.light,
                '& .MuiTableCell-body': {
                    borderTop: `1px solid ${theme.palette.primary.main}`,
                    borderBottom: `1px solid ${theme.palette.primary.main}`,
                    '&:first-of-type': {
                        borderLeft: `1px solid ${theme.palette.primary.main}`,
                    },
                    '&:last-of-type': {
                        borderRight: `1px solid ${theme.palette.primary.main}`,
                    },
                },
            },
        },
    },
}))
