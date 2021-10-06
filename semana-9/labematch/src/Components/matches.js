import React, {useState,useEffect} from "react";
import styled from "styled-components";
import axios from "axios";



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
const ContainerMatch = styled.div`
border: 1px solid purple
width:              65vw;
height:             5vh;
display:            flex;
`

const ContainerFoto = styled.div`
border: 1px solid green;
width:              8vw;
height:             5vh;
display:            flex;
align-items:        center;
justify-content:    center;
`

const ContainerNome = styled.div`
border: 1px solid blue;
width:              60vw;
height:             5vh;
`


const Foto = styled.img`
margin-top:         2px;
max-width:          5vw;
max-height:         5vh;
`

const Titulo = styled.h2`
display:            inline;
`




const Matches = () => {

    const [matches, setMatch]   = React.useState([]);

    const PegaMatch = () => {

        const URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-cacilhas-maryam/matches"
        let temp = []

        axios.get(URL)
        .then(  (res) => {

            for(let i = 0; i < res.data.matches.length; i++) {
                temp[i] =   res.data.matches[i]
            }

            setMatch(temp)
        }    )
        .catch( (err) => {
            console.log(err)
        }     )

        {   console.log(matches[0]   )   }
    }

    useEffect( () => {
        {PegaMatch()}
    }, [])

    return(
            


        <Container>

            <Card>
                <ContainerHeader>       <h3>Header</h3>          </ContainerHeader>

                <ContainerMatch>
                    <ContainerFoto>         <Foto src={matches[0].photo} alt="Foto"/>                           </ContainerFoto>
                    <ContainerNome>         <Titulo>  {matches[0].name  }   </Titulo>     </ContainerNome>
                </ContainerMatch>                                         

            </Card>

        </Container>            
            

    )

}

export default Matches