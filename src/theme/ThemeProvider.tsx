import { ReactNode } from 'react'
// Mui
import { CssBaseline, GlobalStyles, PaletteMode, ThemeProvider, createTheme } from '@mui/material'
// Theme
import { StyledEngineProvider, responsiveFontSizes } from '@mui/material'
import GlobalStyling from './globalStyles'
import overrides from './overrides/Index'
import themeOptions, { ThemeColor } from './themeOptions'

export type Settings = {
    mode: PaletteMode
    themeColor: ThemeColor
}

const themeConfig: Settings = {
    mode: 'light',
    themeColor: 'primary',
}

interface ThemeProps {
    children: ReactNode
}

const ThemeWrapper = (props: ThemeProps) => {
    const { children } = props

    const coreThemeConfig = themeOptions(themeConfig)

    let theme = createTheme(coreThemeConfig)

    theme = createTheme(theme, {
        components: { ...overrides(theme) },
    })

    theme = responsiveFontSizes(theme)

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles styles={() => GlobalStyling(theme) as any} />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default ThemeWrapper
