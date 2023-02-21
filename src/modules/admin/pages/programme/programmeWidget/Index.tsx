import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { ChartTable, WidgetBox } from 'src/theme/StyledComponents'

const ProgrammeWidget = () => {
    return (
        <WidgetBox>
            <header>
                <Typography>Programme</Typography>
            </header>
            <section>
                <ChartTable>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" width={'40%'}></TableCell>
                                <TableCell align="center">SP1</TableCell>
                                <TableCell align="center">SP2</TableCell>
                                <TableCell align="center">SP3</TableCell>
                                <TableCell align="center">SP4</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[...new Array(8)].map((item, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell>Contract Award</TableCell>
                                        <TableCell>
                                            <li>10-01-2023</li>
                                        </TableCell>
                                        <TableCell>
                                            <li>10-01-2023</li>
                                        </TableCell>
                                        <TableCell>
                                            <li>10-01-2023</li>
                                        </TableCell>
                                        <TableCell>
                                            <li>10-01-2023</li>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </ChartTable>
            </section>
        </WidgetBox>
    )
}

export default ProgrammeWidget
