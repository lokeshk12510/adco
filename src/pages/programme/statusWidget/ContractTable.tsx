import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { ChartTable } from 'src/theme/StyledComponents'

const ContractTable = () => {
    return (
        <ChartTable>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" width={'40%'}>
                            Constract Programme
                        </TableCell>
                        <TableCell align="center">SP1</TableCell>
                        <TableCell align="center">SP2</TableCell>
                        <TableCell align="center">SP3</TableCell>
                        <TableCell align="center">SP4</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {[...new Array(3)].map((item, i) => {
                        return (
                            <TableRow key={i}>
                                <TableCell>Forecast PC (Rescheduled)</TableCell>
                                <TableCell>
                                    <li className={i === 1 ? 'sp1' : ''}>10-01-2023</li>
                                </TableCell>
                                <TableCell>
                                    <li className={i === 1 ? 'sp2' : ''}>10-01-2023</li>
                                </TableCell>
                                <TableCell>
                                    <li className={i === 1 ? 'sp3' : ''}>10-01-2023</li>
                                </TableCell>
                                <TableCell>
                                    <li className={i === 1 ? 'sp4' : ''}>10-01-2023</li>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </ChartTable>
    )
}

export default ContractTable
