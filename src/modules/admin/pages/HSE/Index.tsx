// Mui
import { Grid, Typography } from '@mui/material'
// Styled Components
import { StyledBox } from 'src/theme/StyledComponents'
// Components
import AverageWorkersOnSite from './averageWorkersOnSite/Index'
import DoughnutSection from './totalHoursWorked/Index'
import IncidentsInjuries from './incidentsInjuries/Index'
import RegulatoryNotice from './regulatoryNotice/Index'

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
                <Grid item xs={12}>
                    <IncidentsInjuries />
                </Grid>
                <Grid item xs={12}>
                    <RegulatoryNotice />
                </Grid>
            </Grid>
        </StyledBox>
    )
}

export default HSE
