import React from "react";
import styled from "styled-components";

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

  const [value, setValue] = React.useState(0);

  
  const paginaAtual = () => {
    if( value === 0){
      return <Matches />
    } 
    else if(value ===1 ){
      return <Navegar />
    }
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

      <Button variant="outlined" startIcon={<RestoreIcon />}>
        Limpar
      </Button>


    </Container>
  );
}

export default App;

