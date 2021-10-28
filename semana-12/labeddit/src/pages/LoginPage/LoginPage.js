import React            from "react";
import Box              from '@mui/material/Box';
import Button           from '@mui/material/Button';

import {gotoCadastro}       from '../../router/coordinator';
import {useHistory}         from 'react-router-dom';
import LoginForm            from './LoginForm';
import useUnprotectedPage   from '../../hooks/useUnprotectedPage';



const Login = ({textoBotao, setTexto}) => {

  useUnprotectedPage()


const history = useHistory()

  return (

    <Box 
    sx={{
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      bgcolor:        'primary.lighter',
      width:          '100%',
      height:         '100vh'
    }}>


      <h1> Login</h1>

      <LoginForm textoBotao={textoBotao} setTexto={setTexto} />
      <Button onClick={() => gotoCadastro(history)} variant='text'>Não possui conta? Cadastre-se</Button>

    </Box>
  );
}
  
  export default Login;
  