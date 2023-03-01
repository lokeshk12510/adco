import React from 'react'
import ProgrammeWidget from './programmeWidget/Index'
import StatusWidget from './statusWidget/Index'
import ProgressWidget from './progressWidget/Index'
import DelayAllowance from './DelayAllowance'
import MileStoreWidget from './milestoneWidget/Index'
import FormSection from './formSection/Index'
import PageContainer from 'src/components/pageContainer/Index'

const Programme = () => {
    return (
        <PageContainer>
            <>
                <ProgrammeWidget />
                <StatusWidget />
                <ProgressWidget />
                <DelayAllowance />
                <MileStoreWidget />
                <FormSection />
            </>
        </PageContainer>
    )
}

export default Programme
