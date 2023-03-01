import React from 'react'
import { WidgetBox } from 'src/theme/StyledComponents'
import { Box, Grid, Typography } from '@mui/material'
import GaugeWidget from './GaugeWidget'

const ProgressWidget = () => {
    let chartProps = {
        value: 18.24,
        total: 100,
        target: 23.54,
    }

    return (
        <WidgetBox>
            <header>Actual progress vs planned</header>
            <section>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={6}>
                        <GaugeWidget {...chartProps} title="Contract Programme" />
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <GaugeWidget {...chartProps} title="CONSTRUCTION (TARGET) PROGRAMME" />
                    </Grid>
                    <Grid item xs={12}>
                        <Box className="rowStyle" display={'flex'} justifyContent={'center'}>
                            <Typography mx={3}>
                                Contract value % Costs to date{' '}
                                <Typography component={'span'} fontWeight={'bold'}>
                                    25%
                                </Typography>
                            </Typography>
                            <Typography mx={3}>
                                Prelim value % Costs to date{' '}
                                <Typography component={'span'} fontWeight={'bold'}>
                                    23%
                                </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </section>
        </WidgetBox>
    )
}

export default ProgressWidget
