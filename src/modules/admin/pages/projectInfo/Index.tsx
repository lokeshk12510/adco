// Mui
import Typography from '@mui/material/Typography'
// RHF
import { FormProvider, useForm } from 'react-hook-form'
// Components
import CommentSection from 'src/components/CommentSection/Index'
import ProjectInfoForm from './Form'
// Styled-components
import { StyledBox } from 'src/theme/StyledComponents'
// Types
import { ProjectInfoFormValues, ProjectInfoFormValuesTypes } from './types'

const ProjectInfo = () => {
    const methods = useForm<ProjectInfoFormValuesTypes>({
        defaultValues: ProjectInfoFormValues,
    })

    const handleOnSubmit = (data: ProjectInfoFormValuesTypes) => {
        console.log(data)
    }

    return (
        <StyledBox>
            <Typography variant="h6" fontWeight={'bold'} mb={3}>
                Project Information
            </Typography>

            <FormProvider {...methods}>
                <ProjectInfoForm />
                <CommentSection onFormCancel={() => console.log('cancel')} onFormSubmit={handleOnSubmit} />
            </FormProvider>
        </StyledBox>
    )
}

export default ProjectInfo
