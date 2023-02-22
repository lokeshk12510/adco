import React from 'react'
import ProgrammeWidget from './programmeWidget/Index'
import StatusWidget from './statusWidget/Index'
import ProgressWidget from './progressWidget/Index'
import DelayAllowance from './DelayAllowance'
import MileStoreWidget from './milestoneWidget/Index'
import FormSection from './formSection/Index'

const Programme = () => {
    return (
        <>
            <ProgrammeWidget />
            <StatusWidget />
            <ProgressWidget />
            <DelayAllowance />
            <MileStoreWidget />
            <FormSection />
        </>
    )
}

export default Programme
