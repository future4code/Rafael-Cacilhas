import axios from "axios";
import React from "react";
import styled from "styled-components";
import Header from "./Components/Header/index"
import PlaylistCreationPage from "./Components/PlaylistCreationPage/index";
import PlaylistManagerPage from "./Components/PlaylistManagerPage/index";



const AppContainer = styled.div`
  width:          95vw;
  height:         100vh;
  display:        flex;
  flex-direction: column;
  background-color: lightgreen;

`

export default class  App extends React.Component{

  state = {
    inputValue: '',
    playlistName: "",
    playlists: [],
    currentPage: "playlistCreationPage",
  }

  changePage = (atual) => {
    this.setState({
      currentPage: atual
    })
  }



  render(){

    const currentPage = () => {
      if(this.state.currentPage === "playlistCreationPage"){
        return <PlaylistCreationPage />
      } 
      else if(this.state.currentPage === "playlistManagerPage"){
        return <PlaylistManagerPage />
      }
    }

    let lista = this.state.playlists.map ((item) => {
      return <li key={item.id}> {item.name}  <button onClick={  this.removePlaylist( item.id )    }  >x</button></li>
    });


    return (
      <div>
        <Header 
        changePage = {this.changePage}
        />

        {currentPage()}        

      </div>

    );
  }
}

