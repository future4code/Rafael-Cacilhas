
import React, {useEffect}   from "react";
import {useHistory}         from 'react-router-dom';
import Box                  from '@mui/material/Box';
import Typography           from '@mui/material/Typography';
import Button               from '@mui/material/Button';

import CreateTripPage from "./CreateTripPage"

export default function AdminHomePage() {



    const history = useHistory()

    useEffect( () => {
        const token = window.localStorage.getItem("token")

        if(token === null) {
            history.push('/login')
        }
    }, [history])



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


        <Box sx={{ height: 800, marginTop: 10  }}>
            <CreateTripPage />
        </Box>




    </Box>    )
}