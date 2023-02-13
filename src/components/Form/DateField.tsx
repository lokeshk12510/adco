import { OutlinedInput } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useState } from 'react'

const DateField = () => {
    const [value, setValue] = useState(null)

    const onChange = (val: any) => {
        setValue(val)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
                value={value}
                onChange={onChange}
                renderInput={({ inputRef, inputProps, InputProps }) => {
                    return (
                        <OutlinedInput
                            ref={inputRef}
                            {...InputProps}
                            inputProps={{
                                ...inputProps,
                                disabled: true,
                            }}
                        />
                    )
                }}
            />
        </LocalizationProvider>
    )
}

export default DateField
