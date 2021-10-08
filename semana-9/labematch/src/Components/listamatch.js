import React from "react";
import styled from "styled-components";


const ContainerMatch = styled.div`
border:             1px solid purple;
width:              65vw;
height:             5vh;
display:            flex;
margin:             1%;
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
`


const Foto = styled.img`
margin-top:         2px;
max-width:          8vw;
max-height:         5vh;
`



const ListaMatch = (props) =>{

    return (
        <ContainerMatch>

            <ContainerFoto> 
                <Foto src={props.photo} />
            </ContainerFoto>

            <ContainerNome>
                {props.name}
            </ContainerNome>    
                
        </ContainerMatch>
    )
}

export default ListaMatch