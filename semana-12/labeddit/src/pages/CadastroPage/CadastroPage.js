import React            from "react";
import CadastroForm     from './CadastroForm';

import Typography       from '@mui/material/Typography';
import Box              from '@mui/material/Box';






const Cadastro = ({textoBotao, setTexto}) => {


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


<Typography  color = "textPrimary" variant="h3"> Cadastro </Typography>

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

        <CadastroForm textoBotao={textoBotao} setTexto={setTexto} />
      </Box>


    </Box>
  );
}
  
  export default Cadastro;
  