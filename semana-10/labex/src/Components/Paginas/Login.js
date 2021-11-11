
import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




export default function Login() {

    const [email,setEmail] = useState("astrodev@gmail.com.br")
    const [password,setPass] = useState("123456")


    const history = useHistory()

    const autenticaUsuario = (mail,senha) => {

        const URL       = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-cacilhas-maryam/login'
        const header    = "Content-Type: application/json"
        const body      = {
            email: mail,
            password: senha,
        }


        axios.post(URL, body,header)
        .then((resposta ) => {
            localStorage.setItem('token', resposta.data.token)
            history.goBack()
            /*     return <Alert severity="success">Login bem sucedido!</Alert>*/
        }).catch( (erro) => {
            console.log('Deu errado:', erro)
            /*     return <Alert severity="error">Login mal sucedido</Alert>*/

        })
    

    }

    const mudaEmail = (event) => {
        setEmail(event.target.value)

    }

    const mudaSenha = (event) => {
        setPass(event.target.value)
    }

    return (
        <div>

        
            <Box 
            sx={ { 
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                margin: 0,
                marginBottom: 10, 
                fontFamily: '"Montserrat"',
                height: '50vh',
            }}>

                        
                <Box 
                sx={ { 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>

                    <Typography  variant="h1" component="div" >
                        Login                        
                    </Typography>

                    <Typography  variant="h6" component="div" >
                        Por favor, digite seu e-mail e senha
                    </Typography>

                </Box>
                <Box
                sx={ { 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontFamily: '"Montserrat"',
                }}>

                    <Typography  variant="h7" component="div" >
                        E-mail 
                    </Typography>
                    
                    <input 
                    placeholder="email"
                    value={email}
                    onChange={mudaEmail}
                    type="text" 
                    name="email" />
                    <br/>

                    <Typography  variant="h7" component="div" >
                        Senha 
                    </Typography>                    
                    <input 
                    placeholder="Senha"
                    value={password}
                    onChange={mudaSenha}
                    type="password" 
                    name="password" />






                </Box>
                <Box
                sx={ { 
                    display:        'flex', 
                    flexDirection:  'column',
                    alignItems:     'center',
                }}>

                    <Button size='900'  onClick={() => {autenticaUsuario(email,password)}     } variant="contained"><h2> Login</h2></Button>
                    <Button variant="text"><body> Esqueci a senha</body></Button>
                        
                        
                </Box>
            </Box>


            
        </div>
    )
}