import axios from "axios";
import React from "react";

export default class  App extends React.Component{

  state = {
    inputValue: '',
    playlistName: ""
  }



  criaPlaylist = () => {

    const headers = {
      headers: {
        Authorization: "rafael-cacilhas-maryam"
      }
    };

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const body = 
    {
      name: this.state.inputValue
    };
    

    axios.post(url,body,headers)
      .then(  (res) =>{
        console.log(res.data)
      })
      .catch( (err) => {
        console.log(err.response.data.message)
      })


  }


  




  mudaInput = (event) => {
    this.setState({ inputValue: event.target.value  });
  };


  render(){

    return (
      <div className="App">
        <h1> Labefy </h1>

        <input
          placeholder="Nome playlist"
          value={this.state.inputValue}
          onChange={this.mudaInput}
        />


        <button onClick={this.criaPlaylist} >Criar</button>



      </div>
    );
  }
}

