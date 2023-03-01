import { Box, Grid } from '@mui/material'
import React from 'react'
import RichTextField from 'src/components/Form/RichTextField'
import { WidgetBox } from 'src/theme/StyledComponents'
import CommentWidget from './CommentWidget'
import { FormProvider, useForm } from 'react-hook-form'
import ComplianceWidget from './ComplianceWidget'

const FormSection = () => {
    const handleChange = (e: string) => {
        console.log(e)
    }

    const methods = useForm({
        defaultValues: {
            ReviewerComments: '',
            Attachments: [],
            issuedToClient: false,
            procurement: false,
            tradePartners: false,
            contractAttached: false,
            constructionAttached: false,
        },
    })

    return (
        <Box>
            <FormProvider {...methods}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <WidgetBox>
                            <header>Risks/Issues</header>
                            <section>
                                <RichTextField value="" onChange={(e) => handleChange(e)} />
                            </section>
                        </WidgetBox>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <WidgetBox>
                            <header>MITIGATION</header>
                            <section>
                                <RichTextField value="" onChange={(e) => handleChange(e)} />
                            </section>
                        </WidgetBox>
                    </Grid>
                </Grid>
                <ComplianceWidget />
                {/* comments */}
                <CommentWidget />
            </FormProvider>
        </Box>
    )
}

export default FormSection
