import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom';
import Box from '@mui/material/Box';




export default function TripDetailsPage() {

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
            height: '50vh',
        }}>            
        
        
            <h1>Detalhes das viagens</h1>
        
        
        
        
        
        
        
        </Box>
    )
}