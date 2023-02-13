import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Button, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import { StyledBox } from 'src/theme/StyledComponents'
import ProjectInfoForm from './Form'

const ProjectInfo = () => {
    return (
        <StyledBox>
            <Typography variant="h6" fontWeight={'bold'} mb={3}>
                Project Information
            </Typography>

            <ProjectInfoForm />

            <Stack direction={'row'} alignItems="center" justifyContent={'space-between'} my={4}>
                <Button sx={{ textDecoration: 'underline' }} color={'primary'} endIcon={<VisibilityOffIcon />}>
                    Hide Comments
                </Button>
                <Stack direction={'row'} alignItems="center" justifyContent={'space-between'} spacing={2}>
                    <Button variant="contained" color="neutral">
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary">
                        Save
                    </Button>
                </Stack>
            </Stack>
        </StyledBox>
    )
}

export default ProjectInfo
