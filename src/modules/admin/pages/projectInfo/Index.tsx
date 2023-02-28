// Mui
import Typography from '@mui/material/Typography'
// RHF
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
// Components
import CommentSection from 'src/components/CommentSection/Index'
import PageContainer from 'src/components/pageContainer/Index'
import ProjectInfoForm from './Form'
// Styled-components
import { StyledBox } from 'src/theme/StyledComponents'
// Types
import { ProjectInfoFormValues, ProjectInfoFormValuesTypes } from './types'
import { Stack } from '@mui/material'
import AutoComplete from 'src/components/Form/AutoComplete'
import IconButton from '@mui/material/IconButton'
import { ExcelIcon } from '../../../../config/icons'

const ProjectInfo = () => {
    const methods = useForm<FieldValues>({
        defaultValues: ProjectInfoFormValues,
    })

    const handleOnSubmit = (data: ProjectInfoFormValuesTypes) => {
        console.log(data)
    }

    return (
        <PageContainer render={HeaderContent} title="Rebina Buildings">
            <StyledBox>
                <Typography variant="h6" fontWeight={'bold'} mb={3}>
                    Project Information
                </Typography>

                <FormProvider {...methods}>
                    <ProjectInfoForm />
                    <CommentSection
                        onFormCancel={() => console.log('cancel')}
                        onFormSubmit={handleOnSubmit}
                        methods={methods}
                    />
                </FormProvider>
            </StyledBox>
        </PageContainer>
    )
}

export default ProjectInfo

const HeaderContent = () => {
    return (
        <Stack direction={'row'} alignItems="center" justifyContent={'flex-end'} spacing={3}>
            <AutoComplete
                value={{ title: 'Feb 21', value: 1 }}
                options={[{ title: 'Feb 21', value: 1 }]}
                onChange={(e) => console.log(e)}
                name="search"
                showHelperText={false}
                sx={{ width: 200 }}
            />
            <IconButton>
                <ExcelIcon />
            </IconButton>
        </Stack>
    )
}
