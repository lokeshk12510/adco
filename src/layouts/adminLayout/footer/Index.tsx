// Mui
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const Footer = () => {
    return (
        <Root>
            <Typography color={'neutral'} variant="overline">
                &copy; Copyright {new Date().getFullYear()}{' '}
                <Typography component={'span'} color={'primary'} variant="inherit">
                    ADCO
                </Typography>{' '}
                Constructions Pty Ltd
            </Typography>
        </Root>
    )
}

export default Footer

const Root = styled('footer')(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '40px',
    fontSize: '12px',
    background: theme.palette.grey[200],
    '& .MuiTypography-root': {
        lineHeight: 1,
    },
    position: 'absolute',
    bottom: 0,
}))
