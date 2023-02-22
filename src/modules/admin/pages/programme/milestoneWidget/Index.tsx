import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import { WidgetBox } from 'src/theme/StyledComponents'
import MilestoneChart from './MilestoneChart'

const MileStoreWidget = () => {
    return (
        <WidgetBox>
            <header>Construction Milestore Tracking</header>
            <section>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <MilestoneChart />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={2}>
                            {[...new Array(6)].map((item, i) => {
                                return (
                                    <Box key={i} className="rowStyle">
                                        Milestone {i + 1}- Start on Site
                                    </Box>
                                )
                            })}
                        </Stack>
                    </Grid>
                </Grid>
            </section>
        </WidgetBox>
    )
}

export default MileStoreWidget
