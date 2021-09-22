import React from "react";
import axios from "axios";
import TelaCadastro from "./components/TelaCadastro";
import TelaUsuarios from "./components/TelaUsuarios";




const headers = {
  headers: {
    Authorization: "rafael-cacilhas-maryam"
  }
};


export default class App extends React.Component {

  state =  {
    name  :   "rafael",
    email :   "rafael@gmail.com",
    users :   [""],
    tela  :   "usuarios",

  };


escolheTela = () => {

  switch (this.state.tela) {

    case "cadastro":
      return <TelaCadastro irParaUsuarios={this.irParaUsuarios} />

    case "usuarios":
      return <TelaUsuarios irParaCadastro={this.irParaCadastro} /> 

    default: 
      return <div> Página não encontrada </div>

  }

}

irParaCadastro = () => {

  this.setState({
    tela: "cadastro"
  })
}


irParaUsuarios = () => {

  this.setState({
    tela: "usuarios"
  })
}

getAllUsers = () => {

  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";


  axios
    .get(url, headers)
    .then(  (res) => {
      this.setState({ users: "rafa" } );
    }  )
    .catch((err) => {
      console.log(err.response);
    });

  };



  createUser = () => {

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      "name"  :  this.state.name,
      "email" :  this.state.email
  };


    axios
      .post(url,body,headers)
      .then( (res) => {   

        this.getAllUsers();
        console.log(res);
      } )
      .catch(   (err) => {
        console.log(err.response.data.message)
      });

  }







  render(){









  return (
    <div className="App">

      {this.escolheTela()}


      



    </div>
  );


  }



}


