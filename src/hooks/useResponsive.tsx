// Mui
import { Breakpoint, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

/**
 * This hook will return a boolean for media query value
 *
 * @param query Query to limit the size
 * @param key Breakpoint used to identified by screen width
 * @param start To set the starting point of the screen width
 * @param end To set the ending point of the screen width
 * @returns A hook to get the boolean value of props is matched
 *
 * const isMd = useResponsive("up", "md")
 *
 * console.log(isMd)  // true if current screen above 'md'
 *
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
