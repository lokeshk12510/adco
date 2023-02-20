import React from 'react'
// Mui
import { Grid } from '@mui/material'
// Styled components
import { StyledBox } from 'src/theme/StyledComponents'
// Components
import MonthlyChart from './monthlyChart'
import TotalChart from './totalChart'

const IncidentsInjuries = () => {
    return (
        <StyledBox>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <MonthlyChart />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TotalChart />
                </Grid>
            </Grid>
        </StyledBox>
    )
}

export default IncidentsInjuries
