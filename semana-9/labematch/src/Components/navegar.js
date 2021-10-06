import React, {useEffect} from "react";
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
const Descrição = styled.body`
display:            block;
`




const Navegar = () => {

    const [nome, setNome]   = React.useState("");
    const [idade,setIdade]  = React.useState("");
    const [foto, setFoto]   = React.useState("");
    const [desc, setDesc]   = React.useState("");
    const [id,   setID]     = React.useState("");



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


    
    const verificaMatch = (id,escolha) => {

        console.log(id,escolha)

        const URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-cacilhas-maryam/choose-person";
        const header = "Content-Type: application/json"
        const body = {
            "id": "Cl3gXDxcQZkty8aoatXm",
            "choice": true
        }

        axios.post(URL,body,header)
        .then(  (res) => {
            console.log(res.data.isMatch)

            if(escolha === true && res.data.isMatch === true) {
                console.log("Match")
            }

            if(escolha === true && res.data.isMatch === false) {
                console.log("Você é feio")
            }



        }    )
        .catch( (err) => {
            console.log(err)
        }     )


    }









    useEffect( () => {
        pegaPerfil()
        verificaMatch( {id} ,true)

    }, [])




    return(
            
        <Container>

            <Card>
                <ContainerHeader>       <h3>Header</h3>                                         </ContainerHeader>
                <ContainerFoto>         <Foto src={foto} alt="Foto"/>                           </ContainerFoto>
                <ContainerNome>         <Titulo>  {nome},   </Titulo> <Idade>{idade}</Idade>    </ContainerNome>
                <ContainerDescrição>       <Descrição>  {desc}   </Descrição>       <Descrição>  {id}   </Descrição>                             </ContainerDescrição>
                <ContainerBotoes>
                    <Button variant="outlined" startIcon={<CancelIcon />}   />
                    <Button variant="outlined" startIcon={<FavoriteIcon />} />
                </ContainerBotoes>
            </Card>

        </Container>            
            
    )
}

export default Navegar