import React from 'react'
import { StyledBox } from 'src/theme/StyledComponents'
import PageContainer from '../../components/pageContainer/Index'
import Table from './Table'

const Financials = () => {
    return (
        <PageContainer title="Financials">
            <StyledBox>
                <Table />
            </StyledBox>
        </PageContainer>
    )
}

export default Financials
