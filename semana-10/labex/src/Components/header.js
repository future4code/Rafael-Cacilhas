import * as React from 'react';
import {useHistory} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';


export default function ButtonAppBar() {

    const history = useHistory()

    const gotoHome = () => {
        history.push("/")
    }

    const gotoAdmin = () => {
        history.push("/admin")
    }

    const gotoViagens = () => {
        history.push("/viagens")
    }

    const gotoTemp = () => {
        history.push("/criar")
    }


    return (

        <Box sx={{ flexGrow: 1, margin: 0, width: '100%',}}>
        <AppBar position="static">
            <Toolbar>
            
            <Box
                sx={ { 
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginRight: 5, 
                }}>

                    <Button variant="text" color="info" onClick={ gotoHome  }>  Home        </Button>
                    <Button variant="text" color="info" onClick={gotoAdmin}>    Admin       </Button>
                    <Button variant="text" color="info" onClick={gotoViagens}>  Viagens     </Button>
                    <Button variant="text" color="info" onClick={gotoTemp}>     Temp        </Button>



            </Box>

            <Box
                sx={ { 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10, 
                }}>
                    <Typography  variant="h6" component="div" >
                        LabeX
                    </Typography>
            </Box>


            <Box 
                sx={ { 
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginLeft: 10, 
                }}>
                    <SearchIcon />
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Box>

        </Toolbar>
        </AppBar>
        </Box>
    );
}