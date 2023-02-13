import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Grid, Pagination, Stack, colors, styled } from '@mui/material'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import MultiProgressbar from 'src/components/MultiProgressbar'
import { CircleIcon, TriangleIcon } from 'src/config/icons'
import { DiamondIcon } from '../../../../config/icons'

interface CompleteProps {
    success: number
    warning: number
    error: number
}

function createData(
    project: number,
    projectName: string,
    state: string,
    contractType: string,
    category: string,
    projectManager: string,
    constructionManager: string,
    complete: CompleteProps
) {
    return {
        project,
        projectName,
        state,
        contractType,
        category,
        projectManager,
        constructionManager,
        complete,
    }
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props
    const [open, setOpen] = React.useState(false)

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className="main-row">
                <TableCell component="th" scope="row">
                    {row.project}
                </TableCell>
                <TableCell align="right">{row.projectName}</TableCell>
                <TableCell align="right">{row.state}</TableCell>
                <TableCell align="right">{row.contractType}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.projectManager}</TableCell>
                <TableCell align="right">{row.constructionManager}</TableCell>
                <TableCell align="right">
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

const rows = [
    createData(
        3460,
        'Setup new project 1',
        'NSW',
        'Design & Construct',
        'Stable',
        'Ben Matarranz ',
        'Michael Kouknas',
        {
            success: 46,
            warning: 34,
            error: 20,
        }
    ),
    createData(
        3461,
        'Setup new project 2',
        'NSW',
        'Design & Construct',
        'Stable',
        'Ben Matarranz ',
        'Michael Kouknas',
        {
            success: 46,
            warning: 34,
            error: 20,
        }
    ),
    createData(
        3462,
        'Setup new project 3',
        'NSW',
        'Design & Construct',
        'Stable',
        'Ben Matarranz ',
        'Michael Kouknas',
        {
            success: 46,
            warning: 34,
            error: 20,
        }
    ),
    createData(
        3463,
        'Setup new project 4',
        'NSW',
        'Design & Construct',
        'Stable',
        'Ben Matarranz ',
        'Michael Kouknas',
        {
            success: 46,
            warning: 34,
            error: 20,
        }
    ),
    createData(
        3464,
        'Setup new project 4',
        'NSW',
        'Design & Construct',
        'Stable',
        'Ben Matarranz ',
        'Michael Kouknas',
        {
            success: 46,
            warning: 34,
            error: 20,
        }
    ),
    createData(
        3465,
        'Setup new project 4',
        'NSW',
        'Design & Construct',
        'Stable',
        'Ben Matarranz ',
        'Michael Kouknas',
        {
            success: 46,
            warning: 34,
            error: 20,
        }
    ),
    createData(
        3466,
        'Setup new project 4',
        'NSW',
        'Design & Construct',
        'Stable',
        'Ben Matarranz ',
        'Michael Kouknas',
        {
            success: 46,
            warning: 34,
            error: 20,
        }
    ),
]

export default function CollapsibleTable() {
    return (
        <Box p={5}>
            <Typography variant="h6" fontWeight="bold" mb={3}>
                Traffic Lights
            </Typography>
            <TableContainer component={Root}>
                <Table aria-label="collapsible table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Project #</TableCell>
                            <TableCell>Project Name</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Contract Type</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Project Manager</TableCell>
                            <TableCell>Construction Manager</TableCell>
                            <TableCell sx={{ minWidth: '250px' }}>Complete %</TableCell>
                            <TableCell width={'5%'} />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.project} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack direction={'row'} alignItems="center" justifyContent={'space-between'} py={3}>
                <Typography variant="subtitle2">Showing 1 to 7 of 7 entries</Typography>
                <Pagination count={1} page={1} color="primary" shape="rounded" />
            </Stack>
        </Box>
    )
}

const Root = styled(Paper)(({ theme }) => ({
    background: 'transparent',
    '&.MuiTableContainer-root': {
        '& .MuiTable-root': {
            borderCollapse: 'separate',
            borderSpacing: '0 5px',
            '& .MuiTableHead-root': {
                background: theme.palette.primary.light,
                position: 'relative',
                top: '-5px',
                '& .MuiTableCell-head': {
                    color: theme.palette.common.black,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    padding: theme.spacing(3),
                    borderBottom: 'none',
                },
            },

            '& .MuiTableBody-root': {
                '& .MuiTableRow-root': {
                    background: 'transparent',
                    '&.main-row': {
                        background: theme.palette.common.white,
                    },
                    '& .MuiTableCell-root': {
                        whiteSpace: 'nowrap',
                    },
                },
            },
        },
    },
}))
