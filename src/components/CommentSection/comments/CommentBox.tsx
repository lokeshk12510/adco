import { Delete } from '@mui/icons-material'
import { Avatar, Box, IconButton, Stack, styled } from '@mui/material'
import Typography from '@mui/material/Typography'
import Images from 'src/config/images'

const CommentBox = () => {
    return (
        <Root>
            <Stack direction={'row'} alignItems={'flex-start'} spacing={4}>
                <Avatar alt="Brad" src={Images.ProfileImg}>
                    B
                </Avatar>

                <Stack spacing={2}>
                    <Typography variant="subtitle1" fontWeight={'bold'}>
                        Test User 1
                    </Typography>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                    </Typography>
                </Stack>
                <IconButton>
                    <Delete />
                </IconButton>
            </Stack>
        </Root>
    )
}

export default CommentBox

const Root = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(3.5),
    background: theme.palette.common.white,
    boxShadow: theme.shadows[3],
    borderRadius: theme.spacing(2),
    minHeight: 120,
}))
