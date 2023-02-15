// Mui
import { Box, Stack, styled } from '@mui/material'
// Components
import CommentBox from './CommentBox'

const Comments = () => {
    return (
        <Root>
            <Stack spacing={2}>
                <CommentBox />
                <CommentBox />
                <CommentBox />
            </Stack>
        </Root>
    )
}

export default Comments

const Root = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4.5),
    background: theme.palette.grey[100],
    borderRadius: theme.spacing(2),
}))
