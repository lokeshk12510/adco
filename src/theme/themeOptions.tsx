import breakpoints from './breakpoints/index'
import palette from './palette/Index'
import shadows from './shadows/index'
import spacing from './spacing/Index'
import { Settings } from './ThemeProvider'

export type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'dark' | 'light'

const themeOptions = (settings: Settings) => {
    const { mode, themeColor } = settings

    const themeConfig = {
        palette: palette(mode, themeColor),
        typography: {
            fontFamily: [
                'Inter',
                'sans-serif',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
        ...spacing,
        shadows: shadows(mode),
        breakpoints: breakpoints(),
        shape: {
            borderRadius: 6,
        },
        mixins: {
            toolbar: {
                minHeight: 64,
            },
        },
    }

    return themeConfig
}

export default themeOptions
