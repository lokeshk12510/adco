import { FormControl, FormHelperText, OutlinedInput, OutlinedInputProps, styled } from '@mui/material'
import { FC } from 'react'
import { StyledLabel } from 'src/theme/StyledComponents'

interface InputFieldProps extends OutlinedInputProps {
    label?: string
    showHelperText?: boolean
    helperText?: string
}

interface FormControlStyleProps {
    hasLabel: boolean
}

const InputField: FC<InputFieldProps> = (props) => {
    const { fullWidth = true, sx, disabled, label, error, showHelperText = true, helperText, ...rest } = props

    return (
        <Root
            variant="standard"
            fullWidth={fullWidth}
            sx={sx}
            disabled={disabled}
            hasLabel={Boolean(label)}
            size="small"
        >
            {label && (
                <StyledLabel error={error} shrink htmlFor={label}>
                    {label}
                </StyledLabel>
            )}

            <OutlinedInput fullWidth id={label} error={error} {...rest} />

            {(error || showHelperText) && <FormHelperText error>{!!helperText ? helperText : ' '}</FormHelperText>}
        </Root>
    )
}

export default InputField

const Root = styled(FormControl, {
    shouldForwardProp: (props) => props !== 'hasLabel',
})<FormControlStyleProps>(({ theme, hasLabel }) => ({
    '& .MuiInputLabel-root': {
        '&.MuiInputLabel-shrink': {
            // normal
            '&.MuiInputLabel-formControl': {
                transform: 'translate(1px, -1px) scale(0.75)',
                '&.Mui-disabled': {
                    color: theme.palette.action.disabled,
                },
            },
        },
    },

    '& .MuiOutlinedInput-root': {
        ...(hasLabel && {
            marginTop: theme.spacing(4.5),
        }),
        '&.Mui-disabled': {
            background: theme.palette.action.disabledBackground,
        },
    },
    '& .MuiFormHelperText-root.Mui-disabled': {
        color: theme.palette.action.disabled,
    },
}))
