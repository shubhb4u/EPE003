import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'; 

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="AppBar"> 
        <Toolbar className="Toolbar"> 
        <img className="logo" src="epe.png" alt="Epe image" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="Typography"> 
            Request for Information
          </Typography>
          <Button color="inherit" className="Button">Login</Button> 
          <Button color="inherit" className="Button">Logout</Button> 

        </Toolbar>
      </AppBar>
    </Box>
  );
}
