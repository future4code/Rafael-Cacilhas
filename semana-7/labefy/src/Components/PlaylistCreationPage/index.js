import React from "react";
import styled from "styled-components";
import axios from "axios";


const PlaylistCreationFormContainer = styled.div`
  margin-top:       2vh;
  height:           60vh;
  display:          flex;
  flex-direction:   column;
  align-items:      center;

`
const PlaylistCreationForm = styled.form`
  display:          flex;
  flex-direction:   column;
  align-items:      center;
  justify-content:  space-around;
  height:           10vh;


` 


class PlaylistCreationPage extends React.Component {

  state ={
    inputNameValue: "",

  }

  changeInputNameValue = (e) => {
    this.setState({ inputNameValue: e.target.value })

  }

    render(){
    
      return(
          <PlaylistCreationFormContainer>
            <h1>Cadastrar nova playlist </h1>
            <PlaylistCreationForm >

              <label>Criar Playlist</label>
              <input 
              placeholder="Nome da playlist"
              value={this.state.inputNameValue} 
              type="text" 
              onChange = {this.changeInputNameValue} /> 
              <button  type="submit">Cadastrar</button>

            </PlaylistCreationForm >

          </PlaylistCreationFormContainer>
          
      );
  };

};

export default PlaylistCreationPage

