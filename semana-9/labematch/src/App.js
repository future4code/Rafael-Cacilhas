import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";


import Matches from "./Components/matches"
import Navegar from "./Components/navegar"


import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from "@mui/material/Button";
import AdjustIcon from '@mui/icons-material/Adjust';



const Container = styled.div`
display:          flex;
flex-direction:   column;
align-items:      center;
`



function App() {

  const [value, setValue] = useState(1);


  
  const paginaAtual = () => {
    if( value === 0){
      return <Matches />
    } 
    else if(value ===1 ){
      return <Navegar />
    }
  }

  const limparPagina = () => {
    const URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael-cacilhas-maryam/clear"
    const header = "Content-Type: application/json"

    axios.put(URL,header)
        .then(  (res) => {
            console.log(res.data)  //trocar por um alert
        }    )
        .catch( (err) => {
            console.log(err)
        }     )
  


  }


  return (
    <Container>

      {paginaAtual()}



      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Matches" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Navegar" icon={<AdjustIcon />} />
        
      </BottomNavigation>

      <Button variant="outlined" startIcon={<RestoreIcon />} onClick={() => {limparPagina()}} >
        Limpar
      </Button>


    </Container>
  );
}

export default App;

