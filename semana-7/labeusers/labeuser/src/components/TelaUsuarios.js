import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
    border:     1px solid black;
    padding:    10px;
    margin:     10px;
    width:      300px;
    ` 

export default class TelaCadastro extends React.Component{

    state={
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    deletaUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios.delete(url, {
            headers: {
                Authorization: "rafael-cacilhas-maryam"
            }
        })
        .then( (res) => {
            this.pegarUsuarios()
        }  )
        .catch((err) => {
            console.log(err.response.data)
        }) 


    }


    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "rafael-cacilhas-maryam"
            }
        })
        .then(  (res) => {
            this.setState({
                usuarios: res.data
            })

        }  )
        .catch( (err) => {
            alert("Erro!")

        } )

    }

    render() {

        const listaUsuarios = this.state.usuarios.map( (item) => {
            return <CardUsuario key={item.id}> 
                        <p> 
                        {item.name} 
                        <button onClick={() => this.deletaUsuario(item.id)} > x </button>
                        </p>
                    </CardUsuario>
        }  )




        return (

            <div>

                
                <button onClick={this.props.irParaCadastro}  >Cadastro</button>

                <h2> Usuários </h2>
                {listaUsuarios}

                
            </div>

        )

    }
}