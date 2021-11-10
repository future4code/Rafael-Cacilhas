import React, {useState,useEffect} from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

const App = () => {

	const [pokeList, setList]  = useState([]);
	const [pokeName, setName]   = useState("");

  
  useEffect( () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setList( response.data.results)
      })
      .catch(err => {
        console.log(err);
      });

  }, [])


  const changePokeName = event => {
    setName(event.target.value )
  };

    return (
      <div className="App">

        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>

          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}

        </select>


        {pokeName && <PokeCard pokemon={pokeName} />}

      </div>
    );
  
}

export default App;
