import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import { StyledBox } from 'src/theme/StyledComponents'
import ContentWidget from './ContentWidget'

import TabList from './TabList'

const General = () => {
    return (
        <StyledBox>
            <Typography variant="h6" fontWeight={'bold'} mb={3}>
                Monthly Sustainability Records
            </Typography>

            <Box sx={(theme) => ({ background: theme.palette.grey[100], p: 3, borderRadius: theme.spacing(1) })}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={3}>
                        <TabList />
                    </Grid>
                    <Grid item xs={12} sm={8} md={9}>
                        <ContentWidget />
                    </Grid>
                </Grid>
            </Box>
        </StyledBox>
    )
}

export default General
