import React  from 'react'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final  from './components/Final'


export default class App extends React.Component {

  state = {
    etapa: "1",

  }

  atualizaEstado = () => {

    switch(this.state.etapa) {
      case "1":
        this.setState({  etapa: "2"    });
        break;

      case "2":
        this.setState({  etapa: "3"    });
        break;

      case "3":
        this.setState({  etapa: "final"    });
        break;

      case "final":
        this.setState({  etapa: "1"    });
        break;

      default: 
        return <p>Seção inexistente. Reinicie a página</p>
    };




};

  renderizaTela = () => {

    switch(this.state.etapa) {
      case "1":
        return <Etapa1 />;

      case "2":
        return <Etapa2 />;

      case "3":
        return <Etapa3/>;

      case "final":
        return <Final/>;

      default: 
        return <p>Seção inexistente. Reinicie a página</p>

    }

  };

  render(){
    return (
      <div className="App">


          {(this.state.etapa != "final") ? 
            <div><hr/><button onClick={ this.atualizaEstado }> Próxima página </button> <hr/></div>
            :
          <p></p>
          }    


        {console.log(this.state.etapa)}
        {this.renderizaTela()}



      </div>


    );
    }
}

