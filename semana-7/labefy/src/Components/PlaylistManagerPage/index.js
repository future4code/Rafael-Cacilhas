import React from "react";
import styled from "styled-components";
import PlaylistDetail from "../PlaylistDetail";
import Playlists from "../Playlists";



const PlaylistManagerContainer = styled.div`
    margin-top:       2vh;
    margin:           10%;
    height:           60vh;
    display:          flex;
    flex-direction:   column;
    align-items:      center;

`



class PlaylistManagerPage extends React.Component {

    state ={
        currentPage: "playlists"
    }

    changePage = (atual) => {
        this.setState({  currentPage: atual   })
    }

    render(){

        const renderCurrentPage = () => {
            if(this.state.currentPage === "playlists") {
                return <Playlists changePage = {this.changePage} />
            }
            else if (this.state.currentPage === "details") {
                return <PlaylistDetail changePage = {this.changePage}  />

            }
        }
    
        return(
            <PlaylistManagerContainer>
                {renderCurrentPage()}

            </PlaylistManagerContainer>

        );
};

};

export default PlaylistManagerPage

