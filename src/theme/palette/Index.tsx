// ** Type Imports

import { PaletteMode } from '@mui/material'
import { ThemeColor } from '../themeOptions'

const Palette = (mode: PaletteMode, themeColor: ThemeColor) => {
    // ** Vars
    const lightColor = '58, 53, 65'
    const darkColor = '231, 227, 252'
    const mainColor = mode === 'light' ? lightColor : darkColor

    const primaryGradient = () => {
        if (themeColor === 'primary') {
            return '#0047BA'
        } else if (themeColor === 'secondary') {
            return '#9C9FA4'
        } else if (themeColor === 'success') {
            return '#93DD5C'
        } else if (themeColor === 'error') {
            return '#FF8C90'
        } else if (themeColor === 'warning') {
            return '#FFCF5C'
        } else {
            return '#6ACDFF'
        }
    }

    console.log(mode)

    return {
        customColors: {
            main: mainColor,
            primaryGradient: primaryGradient(),
            tableHeaderBg: mode === 'light' ? '#F9FAFC' : '#3D3759',
        },
        common: {
            black: '#000',
            white: '#FFF',
        },
        mode: mode,
        primary: {
            light: '#E3EEFF',
            main: '#0047BB',
            dark: '#0047BB',
            contrastText: '#FFF',
        },
        secondary: {
            light: '#273666',
            main: '#293454',
            // main: '#2A3041',
            dark: '#192446',
            contrastText: '#FFF',
        },
        success: {
            light: '#D9F4E8',
            main: '#1EA067',
            dark: '#1EA067',
            contrastText: '#FFF',
        },
        error: {
            light: '#FF6166',
            main: '#FF4C51',
            dark: '#E04347',
            contrastText: '#FFF',
        },
        warning: {
            light: '#FFCA64',
            main: '#FF6600',
            dark: '#E09E00',
            contrastText: '#FFF',
        },
        info: {
            light: '#32BAFF',
            main: '#16B1FF',
            dark: '#139CE0',
            contrastText: '#FFF',
        },
        white: {
            dark: '#fff',
            main: '#fff',
            light: '#fff',
        },
        black: {
            light: '#000000B2',
            main: '#000000B2',
            dark: '#000000CC',
        },
        grey: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100: '#D5D5D5',
            A200: '#AAAAAA',
            A400: '#616161',
            A700: '#303030',
        },
        text: {
            primary: `rgba(${mainColor}, 0.87)`,
            secondary: `rgba(${mainColor}, 0.68)`,
            disabled: `rgba(${mainColor}, 0.38)`,
        },
        divider: `rgba(${mainColor}, 0.12)`,
        background: {
            paper: mode === 'light' ? '#FFF' : '#312D4B',
            default: mode === 'light' ? '#F4F5FA' : '#28243D',
        },
        action: {
            active: `rgba(${mainColor}, 0.54)`,
            hover: `rgba(${mainColor}, 0.04)`,
            selected: `rgba(${mainColor}, 0.08)`,
            disabled: `rgba(${mainColor}, 0.3)`,
            disabledBackground: `rgba(${mainColor}, 0.18)`,
            focus: `rgba(${mainColor}, 0.12)`,
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    }
}

export default Palette
