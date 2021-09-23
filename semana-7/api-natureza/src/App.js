import React from "react";
import axios from "axios";


export default class App extends React.Component {



  state = {
    atividade: {},
    missoes: [],
    pokemon: [],
    nada: "",

  }

  componentDidMount() {

    this.pegaMissoes();
    this.pegaPokemon();


  }

  doesNothing = () => {
    this.setState ({ nada: "ei"})

  }

  pegaAtividadeAleatoria = () => {

    const url = "http://www.boredapi.com/api/activity/"

    axios.get(url)
    .then(  (res) => {
      this.setState ({ atividade: res.data})


    }   )
    .catch( (err) => {
      console.log(err)
    }   )
          

  }

  

  pegaMissoes = () => {
    const url = "https://api.spacexdata.com/v3/missions"

    axios.get(url)
    .then(  (res) => {  
      this.setState({missoes: res.data})  

    }    )
    .catch( (err) => {
      console.log(err)
    }     )


  }




  pegaPokemon = () => {
    let poke = []

    for(let i = 1; i <= 15; i++){

      const url = `https://pokeapi.co/api/v2/pokemon/${i}/`
      axios.get(url)
      .then((res) => {
        poke[i] = res.data
      })
      .catch( (err) => {
        console.log(err)
      } )


    }

    this.setState({pokemon:poke })



  }



  render() {



    const {activity, type, participants, price} = this.state.atividade


    const saida = this.state.missoes.map( (item) => {
      return (
        <p key={item.mission_id}>Nome: {item.mission_name}</p>
      )
    })

    const listaPokemon = this.state.pokemon.map( (item) => {
      return ( 
        <p key={item.id}>Nome: {item.name}   </p>
      )
    })
    


    return (

      <div className="App">


        <h1>APIs na natureza </h1>
        <hr />




        <h2> Bored API </h2>
        <p> Está entediado? </p>
        <button onClick={this.pegaAtividadeAleatoria}> Aperte aqui </button>



        <h3>Atividade:</h3> 
        <p>Nome:            {activity}       </p>
        <p>Tipo:            {type}           </p>
        <p>Participantes:   {participants}   </p>
        <p> Preço:          {price}          </p>

        <hr />

        <h2> API SpaceX </h2>
        <p> Missões da SpaceX </p>
        {saida}

        <hr />

        <h2> Pokedex</h2>
        <button onClick={this.doesNothing}> Aperte aqui </button>


        {listaPokemon}






      </div>
    );
  }
}

