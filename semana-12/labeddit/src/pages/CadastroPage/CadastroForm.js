import React            from "react";
import Box              from '@mui/material/Box';
import TextField        from '@mui/material/TextField';
import Button           from '@mui/material/Button';

import useForm          from '../../hooks/useForm';
import {useHistory}     from 'react-router-dom';
import {cadastro}       from '../../services/user.js';



import IconButton     from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility     from '@mui/icons-material/Visibility';
import VisibilityOff  from '@mui/icons-material/VisibilityOff';




const CadastroForm = ({textoBotao, setTexto}) => {

    const [form,onChange,clear] = useForm({username:'',email:'', password:''})
    const history = useHistory()

    const enviaForm = (event) => {
        event.preventDefault()
        setTexto('Logout')
        cadastro(form, clear,history)
    }

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });


    const handleClickShowPassword = () => {
        setValues({
        ...values,
        showPassword: !values.showPassword,
        });
    };



    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };




    return (

    <form onSubmit={enviaForm}>
        <Box sx={{display:'flex', flexDirection:'column'}} >

        <TextField
                required 
                margin={"normal"}
                label='Nome de usuário'
                type='text'
                variant="outlined" 
                name={'username'}
                value={form.nome}
                onChange={onChange}
            />


            <TextField
                required 
                margin={"normal"}
                label='Email'
                type='email'
                variant="outlined" 
                name={'email'}
                value={form.email}
                onChange={onChange}
            />


            <TextField 
                required
                label='Password'
                type= {values.showPassword ? 'text':'password'}
                variant="outlined" 
                name={'password'}
                value={form.password}
                onChange={onChange}
                InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                    <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}>
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                ),
                }}
            />

            <Box  
                type={'submit'} 
                sx={{
                    display:'flex', 
                    flexDirection:'column', 
                    marginTop: 2}} 
            >
                <Button  
                    type='submit' 
                    variant='contained'
                > 
                    Cadastrar
                </Button>
            </Box>

            </Box>
            <br/>

    </form>



    );
}

export default CadastroForm;
