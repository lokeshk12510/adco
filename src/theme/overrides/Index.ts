import { Theme } from '@mui/material'
import MuiInput from './Input'
import FormControlLabel from './FormControlLabel'

const Overrides = (theme: Theme) => {
    return Object.assign(MuiInput(theme), FormControlLabel(theme))
}

export default Overrides
