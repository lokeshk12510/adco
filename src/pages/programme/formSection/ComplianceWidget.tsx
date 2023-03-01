import { Box, Grid } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import SwitchField from 'src/components/Form/SwitchField'
import { WidgetBox } from 'src/theme/StyledComponents'

const ComplianceWidget = () => {
    return (
        <WidgetBox>
            <header>Compliance with Programme guidelines</header>
            <section>
                <Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Controller
                                name="issuedToClient"
                                render={({ field: { ref, ...restFields } }) => {
                                    return (
                                        <SwitchField
                                            label="Contact Programme Statused and Issued to Client Fortnightly"
                                            labelPlacement="start"
                                            {...restFields}
                                        />
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller
                                name="procurement"
                                render={({ field: { ref, ...restFields } }) => {
                                    return (
                                        <SwitchField
                                            label="Design & Procurement Checked against Construction Programme"
                                            labelPlacement="start"
                                            {...restFields}
                                        />
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller
                                name="tradePartners"
                                render={({ field: { ref, ...restFields } }) => {
                                    return (
                                        <SwitchField
                                            label="SRPs Prepared Weekly & Issued to Trade Partners"
                                            labelPlacement="start"
                                            {...restFields}
                                        />
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller
                                name="contractAttached"
                                render={({ field: { ref, ...restFields } }) => {
                                    return (
                                        <SwitchField
                                            label="Statused Contract programme attached"
                                            labelPlacement="start"
                                            {...restFields}
                                        />
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Controller
                                name="constructionAttached"
                                render={({ field: { ref, ...restFields } }) => {
                                    return (
                                        <SwitchField
                                            label="Statused Construction (Target) programme attached"
                                            labelPlacement="start"
                                            {...restFields}
                                        />
                                    )
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </section>
        </WidgetBox>
    )
}

export default ComplianceWidget
