import { useState } from 'react'
// Icons
import { CalendarMonthRounded } from '@mui/icons-material'
// Mui
import { FormControl, FormHelperText, OutlinedInput, SxProps, styled } from '@mui/material'
// Date-picker
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker'
// Momemt
import moment from 'moment'
// Constants
import { DATE_FORMAT } from 'src/config/contants'
// Styled components
import { StyledLabel } from 'src/theme/StyledComponents'

type Props<TInputDate, TDate> = {
    name?: string
    label?: string
    error?: boolean
    fullWidth?: boolean
    showHelperText?: boolean
    helperText?: string
    placeholder?: string
    onChange: (val: Date | null) => void
    sx?: SxProps
    // sx:SxProps
} & Omit<DatePickerProps<TInputDate, TDate>, 'renderInput'>

interface FormControlStyleProps {
    hasLabel: boolean
}

const DateField = <TInputDate, TDate = TInputDate>(props: Props<TInputDate, TDate>) => {
    const {
        name,
        label,
        error,
        fullWidth = true,
        disabled,
        showHelperText = true,
        helperText,
        onChange,
        placeholder = DATE_FORMAT,
        sx,
        ...restProps
    } = props

    const [open, setOpen] = useState(false)
    // Close when clicking outside date modal
    const handleClickAway = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Root
                variant="standard"
                fullWidth={fullWidth}
                // sx={sx}
                disabled={disabled}
                hasLabel={Boolean(label)}
                size="small"
                sx={sx}
            >
                {label && (
                    <StyledLabel error={error} shrink htmlFor={label}>
                        {label}
                    </StyledLabel>
                )}

                <DatePicker
                    open={open}
                    inputFormat={DATE_FORMAT}
                    onOpen={handleOpen}
                    closeOnSelect
                    onClose={handleClickAway}
                    disableMaskedInput
                    onChange={(date) => {
                        if (date) {
                            let val = moment(date).isValid() ? moment(date).toDate() : null
                            onChange(val)
                        }
                    }}
                    components={{
                        OpenPickerIcon: () => {
                            return <CalendarMonthRounded fontSize="small" />
                        },
                    }}
                    {...restProps}
                    renderInput={({ inputRef, inputProps, InputProps }) => {
                        return (
                            <OutlinedInput
                                fullWidth
                                id={label}
                                error={error}
                                ref={inputRef}
                                placeholder={placeholder}
                                onClick={() => !disabled && handleOpen()}
                                {...InputProps}
                                inputProps={{
                                    ...inputProps,
                                    placeholder: placeholder,
                                }}
                            />
                        )
                    }}
                />
                {(error || showHelperText) && <FormHelperText error>{!!helperText ? helperText : ' '}</FormHelperText>}
            </Root>
        </LocalizationProvider>
    )
}

export default DateField

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
