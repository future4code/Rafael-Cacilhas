import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    margin:             1%;
    margin-top:         5%;
    height:             30vh;
    width:              90vw;
    display:            flex;
    flex-direction:     column;
    align-items:        center;
    justify-content:    space-around;

    div{
        display:        flex;
        align-items:    center;
        justify-content: space-around;
    }

`

const TrackContainer = styled.div`
    margin:            10%;
    font-weight:        bold;
    width:              30vw;
    
`

const ArtistContainer = styled.div`
    margin-right:       10%;
    width:              30vw;

`
const URLContainer = styled.div`
`

const DeleteButton = styled.p`
    color:              red;
`




const CardMusica = (props) => {
    return(
        <CardContainer>
            <div>
                <TrackContainer>{props.name}</TrackContainer>
                <ArtistContainer>{props.artist}</ArtistContainer>
                <DeleteButton>X</DeleteButton>
            </div>
            <audio controls="controls">
                <source src={props.url} type="mp4"/>
            </audio>
        </CardContainer>
    )

}

export default CardMusica