import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    margin:             10%;
    height:             10vh;
    width:              50vw;
    display:            flex;
    align-items:        center;
    justify-content:    space-around;

`

const NameContainer = styled.div`
    margin:             5%;
`

const DeleteButton = styled.p`
    color:              red;
`



const PlaylistCard = (props) => {
    return(
        <CardContainer>
            <button onClick={() => props.changePage("details")} >Abrir Playlist</button>
            <NameContainer>{props.name}</NameContainer> 
            <DeleteButton>X</DeleteButton>
        </CardContainer>
    )

}

export default PlaylistCard