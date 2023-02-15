// Mui
import { Pagination, Stack, styled } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
// Components
import CollapseRow from './CollapseRow'
// Types
import { rows } from './types'

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
                            <CollapseRow key={row.project} row={row} />
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
