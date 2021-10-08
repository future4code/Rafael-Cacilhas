import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";


import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from "@mui/material/Button";
import CancelIcon from '@mui/icons-material/Cancel';



const Container = styled.div`
display:          flex;
flex-direction:   column;
align-items:      center;
`


const Card = styled.div`
border:           1px solid black;
display:          flex;
flex-direction:   column;
align-items:      center;
justify-content:  space-around;
width:            70vw;
height:           60vh;
`

const ContainerHeader = styled.div`
border: 1px solid blue;
width:              65vw;
height:             5vh;

`


const ContainerFoto = styled.div`
border: 1px solid green;
width:              40vw;
height:             25vh;
display:            flex;
align-items:        center;
justify-content:    center;

`

const ContainerNome = styled.div`
border: 1px solid blue;
width:              65vw;
height:             5vh;

`

const ContainerDescrição = styled.div`
border: 1px solid green;
width:              65vw;
height:             15vh;

`

const ContainerBotoes = styled.div`
border: 1px solid pink;

width:            65vw;
display:          flex;
align-items:      center;
justify-content:  space-around;
`


const Foto = styled.img`
margin-top:         2px;
max-width:          40vw;
max-height:         23vh;
`

const Titulo = styled.h2`
display:            inline;
`

const Idade = styled.h3`
display:            inline;
`
const Descrição = styled.p`
display:            block;
`




const Navegar = () => {

    const [nome, setNome]       = useState("");
    const [idade,setIdade]      = useState("");
    const [foto, setFoto]       = useState("");
    const [desc, setDesc]       = useState("");
    const [id,   setID]         = useState("");




    const pegaPerfil = () => {
        const URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-cacilhas-maryam/person";

        axios.get(URL)
        .then(  (res) => {  
            setNome(res.data.profile.name) 
            setFoto(res.data.profile.photo)
            setDesc(res.data.profile.bio)
            setIdade(res.data.profile.age) 
            setID(res.data.profile.id) 
        }    )
        .catch( (err) => {
            console.log(err)
        }     )

    }


    
    const verificaMatch = (escolhaUser) => {


        const URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-cacilhas-maryam/choose-person";
        const header = "Content-Type: application/json"
        const body = {
            "id": id,
            "choice": escolhaUser
        }
        axios.post(URL,body,header)
        .then(  (res) => {
            console.log(escolhaUser, res.data.isMatch)
        }    )
        .catch( (err) => {
            console.log(err)
        }     )



        pegaPerfil()
        

    }






    useEffect( () => {
        pegaPerfil()
    }, [ ])


    return(
            
        <Container>

            <Card>
                <ContainerHeader>       <h3>Header</h3>                                             </ContainerHeader>
                <ContainerFoto>         <Foto src={foto} alt="Foto"/>                               </ContainerFoto>
                <ContainerNome>         <Titulo>     {nome},   </Titulo> <Idade>{idade}</Idade>     </ContainerNome>
                <ContainerDescrição>    <Descrição>  {desc}    </Descrição>                         </ContainerDescrição>
                <ContainerBotoes>
                    <Button variant="outlined" startIcon={<CancelIcon />}   onClick={() => {verificaMatch(false)    }} />
                    <Button variant="outlined" startIcon={<FavoriteIcon />} onClick={() => {verificaMatch(true)     }} />
                </ContainerBotoes>
            </Card>

        </Container>            
            
    )
}

export default Navegar