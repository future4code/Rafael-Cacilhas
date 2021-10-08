import React from "react";
import axios from "axios";


export default class TelaCadastro extends React.Component{

    state= {
        nome: "",
        email: "",

    }

    handleNome = (event) => {
        this.setState({nome:    event.target.value    })
    }

    handleEmail = (event) => {
        this.setState({email:    event.target.value    })
    }

    cadastraUsuario = () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        const headers = {
            headers: {
            Authorization: "rafael-cacilhas-maryam"
            }
        };

        const body = {
            name: this.state.nome,
            email : this.state.email,

        };

        axios.post(url,body,{
            headers: {
            Authorization: "rafael-cacilhas-maryam"
            }
        })
        .then(  (res) => {
            alert("Cadastro com sucesso!")
        })
        .catch(  (err) => {
            alert(err.response.data)
        }) 




        
        this.setState({ nome:   "" })
        this.setState({ email:   "" })
        

    }


    render() {




        return (

            <div>


                <button onClick={this.props.irParaUsuarios}  >Lista de Usuários</button>

                <h2> Cadastro </h2>
                <input placeholder="Nome"   value={this.state.nome}     onChange={this.handleNome}         />  
                <br/>
                <input placeholder="Email"  value={this.state.email}    onChange={this.handleEmail}        />  
                <br/>
                <button onClick={() => this.cadastraUsuario()} >   Cadastrar          </button>


                
            </div>

        )

    }
}