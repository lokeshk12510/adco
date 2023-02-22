import { Theme } from '@mui/material'

const FormControlLabel = (theme: Theme) => {
    return {
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    marginLeft: 0,
                    marginRight: 0,
                    width: '100%',
                    justifyContent: 'space-between',
                },
            },
        },
    }
}

export default FormControlLabel
