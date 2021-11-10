import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import Box from '@mui/material/Box';


import { createTheme, ThemeProvider } from '@mui/material/styles';


import Matches from "./Components/matches"
import Navegar from "./Components/navegar"
import Header from "./Components/header"


import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from "@mui/material/Button";
import AdjustIcon from '@mui/icons-material/Adjust';


const ContainerHeader = styled.div`
border:             1px solid blue;
width:              65vw;
height:             5vh;
background-color:   "primary";
`

const Container = styled.div`
display:          flex;
flex-direction:   column;
align-items:      center;
`
const Card = styled.div`
border:           1px solid black;
display:          flex;
flex-direction:   column;
align-items:      center;
justify-content:  space-around;
width:            70vw;
height:           60vh;
`


const theme = createTheme({

  components: {
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
      },
    },
  },
  
  palette: {
    mode: 'dark',
    primary: {
      main: '#b71c1c',
    },
    secondary: {
      main: '#1a237e',
      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

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
    <ThemeProvider theme={theme}>
    <Box sx={{ display: "flex", flexDirection:   "column", alignItems:"center"  }}  >

      <Card>
      <Header />
      {paginaAtual()}
      </Card>

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


      <Button color="primary" variant="outlined" startIcon={<RestoreIcon />} onClick={() => {limparPagina()}} >
        Limpar
      </Button>


    </Box>
    </ThemeProvider >

  );
}

export default App;

