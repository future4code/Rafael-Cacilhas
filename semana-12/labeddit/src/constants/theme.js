import { createTheme} from '@mui/material/styles';

import {primaryColor,neutralColor}          from "./cores";
import {backgroundLighter,backgroundDark}   from "./cores";
import {success}                            from "./cores";



const theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
    },

    palette: {
        type: 'dark',
        background: {
            default:    backgroundDark,
            dark:       backgroundDark,
        },
        primary: {
            main:           primaryColor,
            contrastText:   'white',
        },

        secondary: {
            light:          '#0066ff',
            main:           neutralColor,
            contrastText:   primaryColor,
        },

        success: {
            main:          success,
        },

        text: {
            primary: primaryColor
        }
    }



})

export default theme;