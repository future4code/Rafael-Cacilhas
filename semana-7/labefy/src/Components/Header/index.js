import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    height:             10vh;
    display:            flex;
    align-items:        center;
    justify-content:    space-around;
    border:             1px solid black;

`

const Buttons = styled.button`
    height:             6vh;
    border-radius:      10%;
    background-color:   black;
    color:              white;
`

const ButtonsContainer = styled.div`
    display:            flex;
    justify-content:    space-between;
    width:              55vw;

`

const Header = (props) => {
    return(
        <HeaderContainer>
            <h1>Labefy</h1>

            <ButtonsContainer>
                <Buttons onClick={() => props.changePage("playlistCreationPage")}   > Cadastrar Playlist</Buttons>
                <Buttons onClick={() => props.changePage("playlistManagerPage") }   > Gerenciar Playlists</Buttons>
            </ButtonsContainer>

        </HeaderContainer>
    )

}

export default Header