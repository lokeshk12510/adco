import { styled } from '@mui/material'
import { FC, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { StyledLabel } from 'src/theme/StyledComponents'

interface RichTextProps {
    label: string
}

const RichTextField: FC<RichTextProps> = ({ label }) => {
    const [value, setValue] = useState('')

    return (
        <Root>
            <StyledLabel shrink>{label}</StyledLabel>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
        </Root>
    )
}

export default RichTextField

const Root = styled('div')(({ theme }) => ({
    my: 4,
    '& .ql-editor': {
        minHeight: 150,
    },
}))
