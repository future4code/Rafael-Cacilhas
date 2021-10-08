import React, {useState,useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import ListaMatch from "./listamatch";


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
justify-content:  top;
width:            70vw;
height:           60vh;
`

const ContainerHeader = styled.div`
border:             1px solid blue;
width:              65vw;
height:             5vh;
margin-bottom:      1%;
`




const Matches = () => {

    const [matches, setMatch]   = useState([]);

    const PegaMatch = () => {
        const URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-cacilhas-maryam/matches"
        let temp = []

        axios.get(URL)
        .then(  (res) => {
            for(let i = 0; i < res.data.matches.length; i++) {
                temp[i] =   res.data.matches[i]
            }
            setMatch(temp)
        })
        .catch( (err) => {
            console.log(err)
        })

    }


    const renderizaMatches = matches.map( (item)  => {
        return  <ListaMatch 
            name    =   {item.name} 
            photo   =   {item.photo}
            key     =   {item.id}
        />
    })
    
    
    useEffect( () => {
        PegaMatch()
    }, [])

    return(
            


        <Container>

            <Card>
                <ContainerHeader>       <h3>Aphrodite</h3>          </ContainerHeader>                                   
                
                {renderizaMatches}


            </Card>

        </Container>            
            

    )

}

export default Matches