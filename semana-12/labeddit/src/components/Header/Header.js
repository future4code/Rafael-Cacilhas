import React            from 'react';
import AppBar           from '@mui/material/AppBar';
import Box              from '@mui/material/Box';
import Button           from '@mui/material/Button';
import {StyledToolbar}  from './styled';
import Logo             from '../logo.js';


import {gotoFeed, gotoLogin, gotoCadastro}    from '../../router/coordinator';
import {useHistory}                           from 'react-router-dom';


const Header = ({textoBotao, setTexto}) => {
    const history = useHistory()


    const ativaBotao = (history) => {

        if(textoBotao ==='Logout') {
            localStorage.removeItem('token')
            gotoLogin(history) 
            setTexto('Login')

        }

        if(textoBotao ==='Login') {
            gotoLogin(history) 

        }



    }


    return (

        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <StyledToolbar>
                
            <Button onClick = {  () => gotoFeed(history)    }       color="inherit" >  <Logo />   </Button>

            <Button onClick = {  () => gotoCadastro(history)   }    color="inherit" >   Cadastro    </Button>

            <Button onClick = {  () => ativaBotao(history)    }       color="inherit" >   {textoBotao}       </Button>

            </StyledToolbar>
        </AppBar>
        </Box>

    );
}

export default Header
