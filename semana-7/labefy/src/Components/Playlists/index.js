import React from "react";
import styled from "styled-components";
import PlaylistCard from "../PlaylistCard";


const PlaylistsContainer = styled.div`
    margin-top:       2vh;
    height:           60vh;
    width:            90vw;
    display:          flex;
    flex-direction:   column;
    align-items:      center;

`




class Playlists extends React.Component {

    state = {
        playlists : [
            {
                "id": "1",
                "name": "Hip Hop"
                
            },
            {
                "id":"2",
                "name":"Reggae"
            },
        ]
    }

    pegaPlaylist = () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers = {
            Authorization: "nome-sobrenome-turma"
        }
        
    }
    
    render(){

        const playlists = this.state.playlists.map( (item)  => {
            return  <PlaylistCard 
                name = {item.name} 
                changePage={this.props.changePage} 
            />
        })

        return(


            <PlaylistsContainer>
                {playlists}
            </PlaylistsContainer>

        );
    };

};

export default Playlists

