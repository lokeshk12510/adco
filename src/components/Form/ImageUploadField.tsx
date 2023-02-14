import { Box, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import Images from 'src/config/images'

function ImageUploader() {
    const [file, setFile] = useState<string | null>(Images.ProjectImage)

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>): Promise<any> => {
        if (event?.target?.files) {
            const fileLoaded = URL.createObjectURL(event.target.files[0])
            const files = event.target.files

            console.log('files: ', files)
            setFile(fileLoaded)
        } else {
            setFile(file)
        }
    }

    return (
        <Root component="label">
            <input
                type="file"
                name="image"
                hidden
                onChange={handleChange}
                accept="image/jpg,.gif,.png,.svg,.webp audio/wav,.mp3"
            />
            <div className="center">
                <Typography> Upload Image </Typography>
            </div>
            {file && <img src={file} alt="files" />}
        </Root>
    )
}
export default ImageUploader

const Root = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    height: 'auto',
    width: '100%',
    minHeight: 90,
    padding: theme.spacing(2),
    borderRadius: '4px',
    cursor: 'pointer',
    background: theme.palette.grey[100],
    border: `1px dashed ${theme.palette.grey[600]}`,
    marginBottom: theme.spacing(4.5),
    '&:hover': {
        background: theme.palette.primary.light,
        border: `1px dashed ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        '& img': {
            boxShadow: theme.shadows[1],
        },
    },
    '& img': {
        display: 'flex',
        border: `2px solid ${theme.palette.common.white}`,
        boxShadow: theme.shadows[3],
        maxHeight: '75px',
        gap: '7px',
        borderRadius: theme.spacing(1.5),
        zIndex: 2,
    },
    '& .center': {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        color: 'inherit',
        zIndex: 1,
    },
}))
