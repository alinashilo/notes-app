import React from 'react';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FlightIcon from '@material-ui/icons/Flight';
import Typography from "@material-ui/core/Typography";

function Header() {
    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <FlightIcon />
                </IconButton>
                <Typography>
                    Notes
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header