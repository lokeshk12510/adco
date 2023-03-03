import React from 'react'
import { CircleIcon, DiamondIcon, TriangleIcon } from 'src/config/icons'
// Mui
import { Grid, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Traffic = () => {
    return (
        <Box sx={(theme) => ({ p: 4, background: theme.palette.grey[100] })}>
            <Typography variant="h6" fontWeight={'bold'} mb={3}>
                Traffic Lights
            </Typography>
            <Grid container spacing={5}>
                <Grid item xs={6} sm={4} md={3} lg={2.33}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="subtitle2">HSE</Typography>
                        <CircleIcon />
                    </Stack>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2.33}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="subtitle2">Construction Programmee</Typography>
                        <DiamondIcon />
                    </Stack>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2.33}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="subtitle2">Key staff turnover</Typography>
                        <DiamondIcon />
                    </Stack>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2.33}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="subtitle2">Significant EOT outstanding</Typography>
                        <TriangleIcon />
                    </Stack>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2.33}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="subtitle2">Total Variations</Typography>
                        <DiamondIcon />
                    </Stack>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2.33}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="subtitle2">Margin MVT(Prior Month)</Typography>
                        <CircleIcon />
                    </Stack>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2.33}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="subtitle2">Contract Executed</Typography>
                        <CircleIcon />
                    </Stack>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2.33}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="subtitle2">Delayed EOT Approve</Typography>
                        <TriangleIcon />
                    </Stack>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2.33}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="subtitle2">Unapproved Variation</Typography>
                        <CircleIcon />
                    </Stack>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2.33}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="subtitle2">Client Decision/ Responses</Typography>
                        <TriangleIcon />
                    </Stack>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2.33}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="subtitle2">Letting Schedule</Typography>
                        <DiamondIcon />
                    </Stack>
                </Grid>
            </Grid>
            <Box
                component={Stack}
                direction={'row'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                spacing={10}
                p={4}
                mt={5}
                sx={(theme) => ({ background: theme.palette.common.white })}
            >
                <Typography variant="subtitle2" fontWeight={'bold'}>
                    Fast Completion Date{' '}
                    <Typography variant="subtitle2" component={'span'} pl={3}>
                        16 Jan 2023
                    </Typography>
                </Typography>
                <Typography variant="subtitle2" fontWeight={'bold'}>
                    Risk Score{' '}
                    <Typography variant="subtitle2" component={'span'} pl={3}>
                        5.0
                    </Typography>
                </Typography>
                <Typography variant="subtitle2" fontWeight={'bold'}>
                    Previous Risk Score{' '}
                    <Typography variant="subtitle2" component={'span'} pl={3}>
                        3.0
                    </Typography>
                </Typography>
            </Box>
        </Box>
    )
}

export default Traffic
