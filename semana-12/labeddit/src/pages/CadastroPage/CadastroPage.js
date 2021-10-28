import React            from "react";
import Box              from '@mui/material/Box';
import CadastroForm     from './CadastroForm';




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


      <h1> Cadastro</h1>

      <CadastroForm textoBotao={textoBotao} setTexto={setTexto} />

    </Box>
  );
}
  
  export default Cadastro;
  