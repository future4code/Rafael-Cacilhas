import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Rotas from "./Components/rotas"



const theme = createTheme({

  typography: {
    
    fontFamily: [
      '"Montserrat"','sans-seriff',
    ].join(','),

    h1: {
      fontWeight: 900,
      fontSize: '6rem',
      '@media (min-width:800px)': {
        fontSize: '6rem',
      },
      '@media (max-width:800px)': {
        fontSize: '6rem',
      },
    },

    h2: {
      color:'#202363', 
      fontWeight: 500,
      fontSize: '3rem',
      '@media (min-width:800px)': {
        fontSize: '3rem',
      },
      '@media (max-width:800px)': {
        fontSize: '3rem',
      },
    },

    h6: {
      fontSize: '1.8rem',
    },

  },




  components: {
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
      },
    },
  },
  
  palette: {
    mode: 'dark',

    primary: {
      main: '#000000',
    },

    secondary: {
      main: '#02065b',
    },
    info:{
      main: '#ffffff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});


function App() {




  return (
    <ThemeProvider theme={theme}>


      <Rotas />



    </ThemeProvider>
  );
}
export default App;
