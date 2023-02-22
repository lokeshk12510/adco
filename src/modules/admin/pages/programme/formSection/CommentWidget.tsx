import React from 'react'
import { WidgetBox } from 'src/theme/StyledComponents'
import CommentSection from '../../../../../components/CommentSection/Index'
import { useFormContext } from 'react-hook-form'

const CommentWidget = () => {
    const methods = useFormContext()

    return (
        <WidgetBox>
            <header>COMMENTARY</header>
            <section>
                <CommentSection
                    methods={methods}
                    onFormCancel={() => console.log()}
                    onFormSubmit={() => console.log()}
                />
            </section>
        </WidgetBox>
    )
}

export default CommentWidget
