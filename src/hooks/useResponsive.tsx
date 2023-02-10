// @mui
import { Breakpoint, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

/* 
	This hook will return a boolean for media query value

	const isMd = useResponsive("up", "md")

	console.log(isMd)  // true if current screen above 'md' 

*/

const useResponsive = (query: string, key: Breakpoint, start: number = 0, end: number = 0) => {
    const theme = useTheme()

    const mediaUp = useMediaQuery(theme.breakpoints.up(key))

    const mediaDown = useMediaQuery(theme.breakpoints.down(key))

    const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end))

    const mediaOnly = useMediaQuery(theme.breakpoints.only(key))

    if (query === 'up') {
        return mediaUp
    }

    if (query === 'down') {
        return mediaDown
    }

    if (query === 'between') {
        return mediaBetween
    }

    if (query === 'only') {
        return mediaOnly
    }
    return null
}

export default useResponsive
