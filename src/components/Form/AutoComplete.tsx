// Mui
import { FormControl, FormHelperText, Autocomplete as MuiAutoComplete, TextField, styled } from '@mui/material'
// Styled components
import { StyledLabel } from 'src/theme/StyledComponents'

type OptionsValues = {
    title: string
    value: string
}

type Props = {
    name?: string
    label?: string
    value: OptionsValues
    options: object[]
    error?: boolean
    showHelperText?: boolean
    helperText?: string
    fullWidth?: boolean
    disabled?: boolean
    placeholder?: string
    onChange: (val: any) => void
}

interface FormControlStyleProps {
    hasLabel: boolean
}
const AutoComplete = (props: Props) => {
    const {
        name,
        label,
        error,
        showHelperText = true,
        helperText,
        fullWidth = true,
        disabled,
        onChange,
        placeholder,
        ...reset
    } = props

    return (
        <Root hasLabel={Boolean(label)} fullWidth={fullWidth} disabled={disabled}>
            {label && (
                <StyledLabel error={error} shrink htmlFor={label}>
                    {label}
                </StyledLabel>
            )}
            <MuiAutoComplete
                size="small"
                getOptionLabel={(option: any) => option.title || ''}
                onChange={(e, val) => {
                    onChange(val)
                }}
                autoHighlight
                openOnFocus
                clearOnBlur
                {...reset}
                isOptionEqualToValue={(item: any, current: any) => item.value === current.value}
                renderInput={(params) => (
                    <>
                        <TextField
                            {...params}
                            id={label}
                            error={error}
                            name={name}
                            variant={'outlined'}
                            fullWidth
                            placeholder={placeholder}
                            inputProps={{
                                ...params.inputProps,
                            }}
                        />
                    </>
                )}
            />
            {(error || showHelperText) && <FormHelperText error>{!!helperText ? helperText : ' '}</FormHelperText>}
        </Root>
    )
}

export default AutoComplete
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
