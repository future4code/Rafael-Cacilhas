
import {useHistory} from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from "styled-components";

import Logo from '../Img/transparente.png';


const Img = styled.img`
@media only screen and (max-width: 800px) {
    
    opacity: 0.3;
    transform: rotate(-45deg);
    display: inline;

    max-width: 90vw;
    

    position: absolute;
    top:    16vh;
    left:   25vw;
}

transform: rotate(-45deg);

` 

const Caixa = styled.div`
@media only screen and (max-width: 800px) {

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    margin-top: 20;
    margin-bottom: 20;


    width: 100%;
    height: 70vh;
}

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    margin-top: 20;

    width: 100%;
    height: 65vh;
`

const Inicial = styled.div`
@media only screen and (max-width: 800px) {

position:               absolute;
    top:                    20vh;
    right:                  10vw;
    bottom:                 0vh;
    left:                   30vw;

    display:            flex;
    flex-direction:     column;
    justify-content:    space-around;
    align-items:        center;
    height:             50vh;
    margin-bottom:      20;
    margin-left:        0;


}

    display:            flex;
    flex-direction:     column;
    justify-content:    space-around;
    align-items:        center;
    height:             50vh;
    width:              33vw;
    margin-left:        0;

`

export default function HomePage() {

    const history = useHistory()

    const gotoViagens = () => {
        history.push("/viagens")
    }



    return (
        <Box
        sx={ { 
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0, 
        }}>

            <Caixa>



                <Img src={Logo}  />

                <Inicial>
                    <Box 
                    sx={ { 
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 0,
                        marginBottom: 10, 
                        fontFamily: '"Montserrat"',

                    }}>

                        <Typography  variant="h1" component="div" >
                            Vá para o espaço.
                        </Typography>

                        <Typography  variant="h6" component="div" >
                            Ao invés de ficar olhando as estrelas 
                            nossa empresa te leva até lá!
                        </Typography>
                    </Box>

                    <Button onClick={gotoViagens} size='900' variant="contained"><h2>Quero viajar!</h2></Button>
                </Inicial>

            </Caixa>



            <Box
            sx={ { 
                flexGrow: 1,
                width: 1,
                height: '50vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                margin: 0, 
                marginLeft:0,
                marginTop:10,
            }}>


            
                <Typography  variant="h4" component="div" >
                    Últimas viagens
                </Typography>

            </Box>





        </Box>
    )
}