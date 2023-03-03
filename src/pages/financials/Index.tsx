import React from 'react'
import { StyledBox } from 'src/theme/StyledComponents'
import PageContainer from '../../components/pageContainer/Index'
import Table from './Table'
import Typography from '@mui/material/Typography'
import { Button, Stack } from '@mui/material'

const Financials = () => {
    return (
        <PageContainer title="Financials">
            <StyledBox>
                <Typography variant="h6" fontWeight="semi-bold" mb={3}>
                    Turnover Cash Flow
                </Typography>
                <Table />

                <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} spacing={2} py={5}>
                    <Button variant="contained" color="primary">
                        Save
                    </Button>
                    <Button variant="contained" color="neutral">
                        Cancel
                    </Button>
                </Stack>
            </StyledBox>
        </PageContainer>
    )
}

export default Financials
