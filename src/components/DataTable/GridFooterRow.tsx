// Mui
import { Pagination, PaginationItem, Stack, Typography } from '@mui/material'
import {
    gridPageCountSelector,
    gridPageSelector,
    gridPageSizeSelector,
    gridRowCountSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid'

const GridFooterRow = ({ stickyRowCount = 0 }) => {
    const apiRef = useGridApiContext()
    const page = useGridSelector(apiRef, gridPageSelector)
    const pageCount = useGridSelector(apiRef, gridPageCountSelector)
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector)
    const rowCount = useGridSelector(apiRef, gridRowCountSelector) - stickyRowCount

    if (rowCount) {
        return (
            <Stack direction={'row'} alignItems="center" justifyContent={'space-between'} py={3}>
                <Typography>
                    Showing {page * pageSize + 1} to{' '}
                    {rowCount > pageSize * (page + 1) ? pageSize * (page + 1) : rowCount} of {rowCount} entries
                </Typography>
                <Pagination
                    count={pageCount}
                    page={page + 1}
                    onChange={(event, value) => apiRef.current.setPage(value - 1)}
                    color="primary"
                    shape="rounded"
                    //showFirstButton showLastButton
                    renderItem={(item) => (
                        <PaginationItem components={{ previous: PreviousButton, next: NextButton }} {...item} />
                    )}
                />
            </Stack>
        )
    } else {
        return <></>
    }
}

export default GridFooterRow

const PreviousButton = () => {
    return <>Previous</>
}

const NextButton = () => {
    return <>Next</>
}
