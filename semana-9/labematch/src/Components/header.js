import React        from "react"
import AppBar       from "@material-ui/core/AppBar";
import Toolbar      from "@material-ui/core/Toolbar";
import {styled}     from '@mui/material/styles';
import Box from '@mui/material/Box';





const Header = () =>{
    const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

    return (
        <div>
        
        <Box sx={{ flexGrow: 1 }}>                
            <Toolbar> <h3> Aphrodite </h3> </Toolbar>
        </Box> 

            <Offset />
        </div>

        

    )
}

export default Header