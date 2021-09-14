import React  from 'react'
import Login  from "./components/Login/Login"
import Home   from "./components/Home/Home"

export default class App extends React.Component {

  state = {
    estaLogado: true
  }



  renderizaPagina(){
    if(this.state.estaLogado === false) {
      return (    <Login className="login" logaUsuario={this.logaUsuario}   />)
    }

    else if (this.state.estaLogado === true) {
      return (       <Home className="home"  deslogaUsuario={this.deslogaUsuario}   />)
    }
  }


  logaUsuario = ()  =>  {
    this.setState({ estaLogado: true  }) ;

  };

  deslogaUsuario  = ()  =>  {
    this.setState({  estaLogado: false   }) ;

  };



  render(){
    return (
      <div className="App">

        <h1> App </h1>
        <p> {this.state.estaLogado ? "esta logado": "não está logado"} </p>
        <hr/>

        {this.renderizaPagina()}





      </div>

    )

    
  }
}





