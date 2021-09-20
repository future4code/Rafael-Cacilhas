import React from 'react'
import Posts from './Posts'
import Mensagens from './Mensagens'

export default class Home extends React.Component {

    state = {
        secao: "posts"
    }



    vaiMensagens = () => {
        this.setState({  secao: "mensagens"    });

    };

    vaiPosts = () => {
        this.setState({     secao: "posts"    });
    };


    renderizaSecao = () => {

        switch(this.state.secao) {
            case "posts":
                return <Posts />
            case "mensagens":
                return <Mensagens  />
            default:
                return <p>Seção Inexistente</p> 
        }
    };



    render(){

        return(
            <div>
                    
                <h2>Home</h2>
                <button onClick={this.vaiPosts}> Posts </button>
                <button onClick={this.vaiMensagens}> Mensagens </button>
                <button onClick={this.props.deslogaUsuario}> Logout </button>

                {this.renderizaSecao()}



            </div>
        )


        
    }
}

