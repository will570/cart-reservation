import React from 'react'; 
import SidebarLink from './SidebarLink.js'; 
import {Grid} from '@material-ui/core';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';

import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function Sidebar() {
    return (
        <Box sx={{ 
            width: '100%', 
            height: '100%',
            display: 'flex', }}>
            <CssBaseline />
            <Paper
                sx={{
                p: 2, 
                width: '20%', 
                height: '100%', 
                minHeight: '100vh', 
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid 
                sx={{
                    minHeight: '100vh'
                }}
                container
                
                spacing={10}
                direction="column"
                justifyContent="flex-end"
                alignItems="center"
                >

                    <Grid item xs>
                        <Typography variant="h4" gutterBottom>
                            Welcome 
                        </Typography>
                    </Grid>

                    <Grid item xs container spacing={2}>

                        <Grid item>
                            <SidebarLink text = "Reservation"  Icon={HomeIcon} /> 
                        </Grid>

                        <Grid item>
                            <SidebarLink text = "Message Board" Icon={MailOutlineIcon} />   
                        </Grid>

                        <Grid item>
                            <SidebarLink text = "Logout" Icon={PermIdentityIcon} /> 
                        </Grid>
                    </Grid>
                  
                </Grid>
            </Paper>
        </Box>
    ); 
}

export default Sidebar; 