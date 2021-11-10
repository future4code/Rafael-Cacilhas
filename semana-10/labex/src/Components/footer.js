import * as React from 'react';
//import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

export default function Footer() {
    return (

        <Box 
        sx={ { 
            flexGrow: 1,
        }}>
        <AppBar enableColorOnDark position="static">
        <Toolbar>
        <Box 
        sx={ { 
            flexGrow: 1,
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>

                <Box> 
                    <h2> Siga a LabeX</h2>

                </Box>



                <Box
                sx={ { 
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'space-around',
                }}> 
                
                    <Box
                    sx={ { 
                        flexGrow: 0.5,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginRight: 10, 
                    }}>

                        <h5> Minha Conta</h5>

                    </Box>

                    <Box
                    sx={ { 
                        flexGrow: 0.5,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginLeft: 10, 

                        
                    }}>

                        <h5> Ajuda</h5>

                    </Box>
                    
                </Box>



                <Box
                sx={ { 
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'space-around',
                }}> 
                
                    <Box
                    sx={ { 
                        flexGrow: 0.5,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginRight: 10, 
                    }}>

                        <h5> Aspectos legais</h5>
                        
                    </Box>

                    <Box
                    sx={ { 
                        flexGrow: 0.5,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginLeft: 10, 

                        
                    }}>

                        <h5> Sobre</h5>

                    </Box>
                    



                </Box>

                <Box> 
                    
                    <p> Copyright</p>
                    
                </Box>
            </Box>


        </Toolbar>
        </AppBar>
        </Box>
    )
}