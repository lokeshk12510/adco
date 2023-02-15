import { useState } from 'react'
// Icons
import { Visibility, VisibilityOff } from '@mui/icons-material'
// Mui
import { Button, Grid, Stack } from '@mui/material'
// RHF
import { Controller, useFormContext } from 'react-hook-form'
// Components
import FileUploader from '../Form/FileUploadField'
import RichTextField from '../Form/RichTextField'
import Comments from './comments/Index'

type CommentSectionProps = {
    onFormSubmit: (data: any) => void
    onFormCancel: () => void
}

const CommentSection = ({ onFormSubmit, onFormCancel }: CommentSectionProps) => {
    const methods = useFormContext()

    const [view, setView] = useState<boolean>(false)

    const { control, handleSubmit } = methods

    const handleCommentsViewToggle = () => {
        setView((t) => !t)
    }

    return (
        <Grid container rowSpacing={2}>
            <Grid item xs={12}>
                <Controller
                    control={control}
                    rules={{
                        required: { value: true, message: 'This field is required' },
                    }}
                    name="reviewer_comments"
                    render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                        return (
                            <RichTextField
                                label="Reviewer Comments"
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={!!Boolean(error)}
                                helperText={error?.message}
                            />
                        )
                    }}
                />
            </Grid>
            <Grid item xs={12} md={7} lg={5}>
                <Controller
                    control={control}
                    name="files"
                    render={({ field: { onChange, value, onBlur } }) => {
                        const handleOnChange = (val: any) => {
                            console.log(val.target.value)
                            onChange(val)
                        }

                        return <FileUploader onChange={handleOnChange} value={value} />
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <Stack direction={'row'} alignItems="center" justifyContent={'space-between'} my={4}>
                    <Button
                        sx={{ textDecoration: 'underline' }}
                        color={'primary'}
                        endIcon={view ? <VisibilityOff /> : <Visibility />}
                        onClick={handleCommentsViewToggle}
                    >
                        Hide Comments
                    </Button>
                    <Stack direction={'row'} alignItems="center" justifyContent={'space-between'} spacing={2}>
                        <Button variant="contained" color="neutral" onClick={onFormCancel}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleSubmit(onFormSubmit)}>
                            Save
                        </Button>
                    </Stack>
                </Stack>
            </Grid>
            {view && (
                <Grid item xs={12}>
                    <Comments />
                </Grid>
            )}
        </Grid>
    )
}

export default CommentSection
