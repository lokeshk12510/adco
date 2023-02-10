import { Theme } from "@mui/material"
import MuiInput from "./Input"



const Overrides = (theme:Theme)=>{
    const input = MuiInput(theme)


    return Object.assign(
        input
    )
}

export default Overrides