
import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import TripDetailsPage from "./TripDetailsPage"

export default function AdminHomePage() {

    const [pag,setPag] = useState("nada")


    const history = useHistory()

    useEffect( () => {
        const token = window.localStorage.getItem("token")

        if(token === null) {
            history.push('/login')
        }
    }, [history])


    const renderizaPagina = () => {
        return <TripDetailsPage />
    }

return (


    <Box 
    sx={ { 
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 0,
        marginBottom: 10, 
        fontFamily: '"Montserrat"',
    }}>
        <Box sx={{ height: 25  }}>
        </Box>


        <Box sx={{ marginBottom: 10  }}>
            <Typography  variant="h1" component="div" >
                Admin
            </Typography>
        </Box>

        <Box sx={ { display: 'flex', width: 600, justifyContent: 'space-around'}}  >
            <Button   size='900' variant="contained"><h2>Nova viagem</h2></Button>
            <Button   size='900' variant="contained"><h2>Editar viagens</h2></Button>
        </Box>


        <Box sx={{ height: 400, marginTop: 10  }}>
            <h2>quede a pag?</h2>
            {renderizaPagina}
        </Box>




    </Box>
    )
}