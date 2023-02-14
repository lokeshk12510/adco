import { Box, Button, TextField } from '@mui/material'
import { StyledLabel } from 'src/theme/StyledComponents'

interface FileUploaderProps {
    onChange: (e: React.InputHTMLAttributes<HTMLInputElement>) => void
    value: any
}

const FileUploader = ({ onChange, value, ...props }: FileUploaderProps) => {
    const handleChange = (e: any) => {
        onChange(e)
    }

    return (
        <>
            <StyledLabel shrink>Attachment</StyledLabel>
            <Box
                component="label"
                sx={{
                    display: 'block',
                    height: 'auto',
                    width: '100%',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    '&:hover': { outline: `1px solid #000` },
                }}
            >
                <input type="file" name="excel" hidden onChange={handleChange} />
                <TextField
                    sx={{
                        pointerEvents: 'none',
                        '& input': { padding: '10px 14px' },
                        '& .MuiInputBase-root': {
                            padding: 1,
                        },
                    }}
                    value={value || ''}
                    fullWidth
                    placeholder="No File selected"
                    InputProps={{
                        startAdornment: (
                            <Button
                                variant="contained"
                                color="neutral"
                                sx={{ whiteSpace: 'nowrap', minWidth: '110px' }}
                            >
                                Choose File
                            </Button>
                        ),
                    }}
                    {...props}
                />
            </Box>
        </>
    )
}

export default FileUploader
