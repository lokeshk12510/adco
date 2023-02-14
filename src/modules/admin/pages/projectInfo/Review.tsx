import AddCircleIcon from '@mui/icons-material/AddCircle'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Grid, IconButton, Typography, alpha, styled } from '@mui/material'
import Paper from '@mui/material/Paper'
interface StyledCardProps {
    status: boolean
}

const Review = () => {
    return (
        <Root>
            <Typography variant="h6" fontWeight={'semi-blod'} mb={2}>
                Sign Off & Review
            </Typography>
            <Grid container spacing={2}>
                {[...new Array(5)].map((item, i) => {
                    let status = i % 2 === 0

                    return (
                        <Grid item xs={12} md={6} lg={2.4} key={i}>
                            <StyledCard status={status}>
                                <div className="content">
                                    <>
                                        Contract Administrator <br /> {status ? '18/01/2023' : '-'}{' '}
                                    </>
                                    <IconButton color="primary" size="small">
                                        {status ? <EditIcon /> : <AddCircleIcon />}
                                    </IconButton>
                                </div>
                                <div className="footer">{status ? 'Approved' : 'Not Approved'}</div>
                            </StyledCard>
                        </Grid>
                    )
                })}
            </Grid>
        </Root>
    )
}

export default Review

const Root = styled(Box)(({ theme }) => ({
    background: theme.palette.grey[200],
    padding: theme.spacing(4),
    borderRadius: 7,
}))

const StyledCard = styled(Paper, { shouldForwardProp: (props) => props !== 'status' })<StyledCardProps>(
    ({ theme, status }) => {
        let color = status ? theme.palette.success.main : theme.palette.grey[600]
        let bgColor = status ? theme.palette.success.light : theme.palette.grey[100]

        return {
            width: '100%',
            border: `1px solid ${color}`,
            borderRadius: 5,
            overflow: 'hidden',
            cursor: 'pointer',
            boxShadow: 'none',
            '&:hover': {
                boxShadow: theme.shadows[5],
            },
            '& .content': {
                padding: theme.spacing(3),
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                fontSize: '14px',
                fontWeight: 'semi-bold',
            },
            '& .footer': {
                padding: theme.spacing(1),
                background: alpha(bgColor, 0.5),
                color: color,
                textAlign: 'center',
                borderTop: `1px solid ${bgColor}`,
                textTransform: 'uppercase',
                fontSize: '14px',
                fontWeight: 'bold',
            },
        }
    }
)
