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


    return (

        <Box sx={{ flexGrow: 1, margin: 0 }}>
        <AppBar position="static">
            <Toolbar>
            
            <Box
                sx={ { 
                    flexGrow: 0.33,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginRight: 5, 
                }}>

                    <Button variant="text" color="info" onClick={ gotoHome  }>   Home      </Button>
                    <Button variant="text" color="info" onClick={gotoAdmin}>  Admin     </Button>
                    <Button variant="text" color="info" onClick={gotoViagens}>   Viagens   </Button>



            </Box>

            <Box
                sx={ { 
                    flexGrow: 0.33,
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
                    flexGrow: 0.33,
                    display: 'flex',
                    justifyContent: 'flex-end',
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


/*
import * as React from 'react';
//import { styled, alpha } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';





export default function PrimarySearchAppBar() {




    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = false;

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
    };


    const menuId = 'primary-search-account-menu';

    const renderMenu = (
    <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
    >
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
        <MenuItem onClick={handleMenuClose}>Minha Conta</MenuItem>
    </Menu>
    );


    const renderMobileMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
    >
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
        <MenuItem onClick={handleMenuClose}>Minha Conta</MenuItem>
    </Menu>
    );




    return (
        <div>

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
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
            




                <Box
                sx={ { 
                    flexGrow: 0.33,
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
                    flexGrow: 0.33,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginLeft: 10, 
                }}>
                    <SearchIcon />
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Box>

            </Box>
            </Toolbar>
            </AppBar>
            </Box>

            {renderMenu}
            {renderMobileMenu}

        </div>
    );
}
*/