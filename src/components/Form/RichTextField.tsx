import { FC } from 'react'
// Mui
import { FormHelperText, styled } from '@mui/material'
// React-quill
import ReactQuill, { ReactQuillProps } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
// Styled Components
import { StyledLabel } from 'src/theme/StyledComponents'

interface RichTextProps extends ReactQuillProps {
    label?: string
    value: string
    onChange: (e: string) => void
    error?: boolean
    showHelperText?: boolean
    helperText?: string
}

const RichTextField: FC<RichTextProps> = (props) => {
    const { label, error, showHelperText = true, helperText, ...rest } = props

    return (
        <Root>
            <StyledLabel error={error} shrink>
                {label}
            </StyledLabel>
            <ReactQuill theme="snow" {...rest} className={error ? 'error' : ''} />
            {(error || showHelperText) && <FormHelperText error>{!!helperText ? helperText : ' '}</FormHelperText>}
        </Root>
    )
}

export default RichTextField

const Root = styled('div')(({ theme }) => ({
    my: 4,
    '& .ql-editor': {
        minHeight: 150,
    },
    '& .error': {
        border: `1px solid ${theme.palette.error.main}`,
    },
}))
