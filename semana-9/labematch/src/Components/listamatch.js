import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';



const ContainerMatch = styled.div`
border:             1px solid purple;
width:              65vw;
height:             5vh;
display:            flex;
margin:             3%;
`


const ContainerFoto = styled.div`
border:             1px solid green;
width:              8vw;
height:             5vh;
display:            flex;
align-items:        center;
justify-content:    center;
`

const ContainerNome = styled.div`
border:             1px solid blue;
width:              60vw;
height:             5vh;
display:            flex;
align-items:        center;
`

const Texto = styled.h4`
margin-left:        5%;
`



const ListaMatch = (props) =>{

    return (
        <ContainerMatch>

            <ContainerFoto> 
                <Avatar alt={props.name} src={props.photo}  sx={{ width: 48, height: 48 }} />
            </ContainerFoto>

            <ContainerNome>
                <Texto> {props.name} </Texto>
            </ContainerNome>    
                
        </ContainerMatch>
    )
}

export default ListaMatch