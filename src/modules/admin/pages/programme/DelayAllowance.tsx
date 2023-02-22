import { TableBody, TableRow, TableCell, Table } from '@mui/material'
import React from 'react'
import { ChartTable, WidgetBox } from 'src/theme/StyledComponents'

const DelayAllowance = () => {
    return (
        <WidgetBox>
            <header>Daily Allowance</header>
            <section>
                <ChartTable>
                    <Table size="small">
                        <TableBody>
                            <TableRow>
                                <TableCell width={'60%'}>Remaining Builders Delay Allowance</TableCell>
                                <TableCell>
                                    <li>10 Days</li>
                                </TableCell>
                                <TableCell>
                                    <li>10 %</li>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </ChartTable>
            </section>
        </WidgetBox>
    )
}

export default DelayAllowance
