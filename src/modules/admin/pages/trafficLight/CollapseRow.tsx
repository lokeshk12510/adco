import * as React from 'react'
// Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { CircleIcon, DiamondIcon, TriangleIcon } from 'src/config/icons'
// Mui
import { Grid, Stack, colors } from '@mui/material'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
// Components
import MultiProgressbar from 'src/components/MultiProgressbar'
// Types
import { TableDataProps } from './types'

function CollapseRow(props: { row: TableDataProps }) {
    const { row } = props

    const [open, setOpen] = React.useState(false)

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className="main-row">
                <TableCell>{row.project}</TableCell>
                <TableCell>{row.projectName}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.contractType}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.projectManager}</TableCell>
                <TableCell>{row.constructionManager}</TableCell>
                <TableCell>
                    <MultiProgressbar
                        colorVariants={[
                            { color: colors.green['A700'], width: '50%' },
                            { color: colors.yellow[600], width: '25%' },
                            { color: colors.red['400'], width: '25%' },
                        ]}
                        label="50%"
                    />
                </TableCell>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow sx={{ background: 'transparent' }}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ p: 2 }}>
                            <Grid container spacing={5}>
                                <Grid item xs={3} lg={2.33}>
                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Typography variant="subtitle2">HSE</Typography>
                                        <CircleIcon />
                                    </Stack>
                                </Grid>
                                <Grid item xs={3} lg={2.33}>
                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Typography variant="subtitle2">Construction Programmee</Typography>
                                        <DiamondIcon />
                                    </Stack>
                                </Grid>
                                <Grid item xs={3} lg={2.33}>
                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Typography variant="subtitle2">Key staff turnover</Typography>
                                        <DiamondIcon />
                                    </Stack>
                                </Grid>
                                <Grid item xs={3} lg={2.33}>
                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Typography variant="subtitle2">Significant EOT outstanding</Typography>
                                        <TriangleIcon />
                                    </Stack>
                                </Grid>
                                <Grid item xs={3} lg={2.33}>
                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Typography variant="subtitle2">Total Variations</Typography>
                                        <DiamondIcon />
                                    </Stack>
                                </Grid>
                                <Grid item xs={3} lg={2.33}>
                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Typography variant="subtitle2">Margin MVT(Prior Month)</Typography>
                                        <CircleIcon />
                                    </Stack>
                                </Grid>
                                <Grid item xs={3} lg={2.33}>
                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Typography variant="subtitle2">Contract Executed</Typography>
                                        <CircleIcon />
                                    </Stack>
                                </Grid>
                                <Grid item xs={3} lg={2.33}>
                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Typography variant="subtitle2">Delayed EOT Approve</Typography>
                                        <TriangleIcon />
                                    </Stack>
                                </Grid>
                                <Grid item xs={3} lg={2.33}>
                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Typography variant="subtitle2">Unapproved Variation</Typography>
                                        <CircleIcon />
                                    </Stack>
                                </Grid>
                                <Grid item xs={3} lg={2.33}>
                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Typography variant="subtitle2">Client Decision/ Responses</Typography>
                                        <TriangleIcon />
                                    </Stack>
                                </Grid>
                                <Grid item xs={3} lg={2.33}>
                                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Typography variant="subtitle2">Letting Schedule</Typography>
                                        <DiamondIcon />
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Box
                                component={Stack}
                                direction={'row'}
                                justifyContent={'flex-start'}
                                alignItems={'center'}
                                spacing={10}
                                p={4}
                                mt={5}
                                sx={(theme) => ({ background: theme.palette.common.white })}
                            >
                                <Typography variant="subtitle2" fontWeight={'bold'}>
                                    Fast Completion Date{' '}
                                    <Typography variant="subtitle2" component={'span'} pl={3}>
                                        16 Jan 2023
                                    </Typography>
                                </Typography>
                                <Typography variant="subtitle2" fontWeight={'bold'}>
                                    Risk Score{' '}
                                    <Typography variant="subtitle2" component={'span'} pl={3}>
                                        5.0
                                    </Typography>
                                </Typography>
                                <Typography variant="subtitle2" fontWeight={'bold'}>
                                    Previous Risk Score{' '}
                                    <Typography variant="subtitle2" component={'span'} pl={3}>
                                        3.0
                                    </Typography>
                                </Typography>
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default CollapseRow
