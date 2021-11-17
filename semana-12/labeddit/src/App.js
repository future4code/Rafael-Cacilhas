import React            from "react";
import {useState}       from 'react';
import {ThemeProvider}  from '@mui/material/styles';
import CssBaseline      from "@mui/material/CssBaseline";

import { BrowserRouter} from "react-router-dom";

import Router           from "./router/Router";
import theme            from "./constants/theme";

import Header           from "./components/Header/Header";



function App() {
  const token = localStorage.getItem('token')
  const [textoBotao,setTexto] = useState( token? "Logout":"Login")


  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter >

        <Header textoBotao={textoBotao} setTexto={setTexto}  />
        <Router textoBotao={textoBotao} setTexto={setTexto} />

      </BrowserRouter >
    </ThemeProvider>

  );
}

export default App;
