import React            from "react";
import Box              from '@mui/material/Box';
import Button           from '@mui/material/Button';
import Typography       from '@mui/material/Typography';


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
      marginTop:      '3vh',
      flexDirection:  'column',
      alignItems:     'center',
      bgcolor:        'primary.lighter',
      width:          '100%',
      height:         '100vh'
    }}>




    <Typography  color = "textPrimary" variant="h3"> Login </Typography>

    <Box 
    sx={{
      border:         '1px solid black',
      marginTop:      '2vh',
      display:        'flex',
      flexDirection:  'column',
      height:         '40vh',
      width:          '80vw',
      maxWidth:       '750px',
      justifyContent: 'center',
      alignItems:     'center',
      backgroundColor: 'white'
      }}
    >


        <LoginForm textoBotao={textoBotao} setTexto={setTexto} />
        <Button onClick={() => gotoCadastro(history)} variant='text'>Não possui conta? Cadastre-se</Button>
      
      </Box>


    </Box>
  );
}
  
  export default Login;
  