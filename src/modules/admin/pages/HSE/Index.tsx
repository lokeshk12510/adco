import { Grid, Typography } from '@mui/material'
import { StyledBox } from 'src/theme/StyledComponents'
import AverageWorkersOnSite from './AverageWorkersOnSite/Index'
import DoughnutSection from './DoughnutSection/Index'

const HSE = () => {
    return (
        <StyledBox sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Typography variant="h5" fontWeight={'bold'} mb={3}>
                HSE
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <DoughnutSection />
                </Grid>
                <Grid item xs={12} md={8}>
                    <AverageWorkersOnSite />
                </Grid>
            </Grid>
        </StyledBox>
    )
}

export default HSE
