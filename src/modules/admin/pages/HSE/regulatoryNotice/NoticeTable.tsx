// mUI
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
// types
import { ChartDataProps } from 'src/components/charts/ChartTypes'
// styled-components
import { ChartTable } from 'src/theme/StyledComponents'

const NoticeTable = ({ data }: { data: ChartDataProps }) => {
    const { rows, columns } = data

    return (
        <ChartTable>
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
                                <TableRow key={i}>
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
    )
}

export default NoticeTable
