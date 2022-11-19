import React from 'react'; 
import SidebarLink from './SidebarLink.js'; 
import {Box} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';

import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function Sidebar() {

    return (
        <Box
        sx={{
            m:2, 
            p:2
        }}
        >
            {/* <Paper
                sx={{
                p: 2, 
                width: '12%', 
                height: '100%', 
                minHeight: '100vh', 
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            > */}
                <Grid 
                sx={{
                    minHeight: '100vh',
                    width: '10%',
                }}
                container
                
                spacing={10}
                direction="column"
                alignItems="center"
                wrap="nowrap"
                zeroMinWidth
                >
                    <Grid item xs>
                        <Typography variant="h5" gutterBottom>
                            Welcome 
                        </Typography>
                    </Grid>

                    <Grid item xs container spacing={2} direction="column" wrap="nowrap" zeroMinWidth>

                        <Grid item>
                            <SidebarLink text = "Reserve"  Icon={HomeIcon} /> 
                        </Grid>

                        <Grid item>
                            <SidebarLink text = "Message" Icon={MailOutlineIcon} />   
                        </Grid>

                        <Grid item>
                            <SidebarLink text = "Logout" Icon={PermIdentityIcon} /> 
                        </Grid>
                    </Grid>
                  
                </Grid>
            {/* </Paper> */}
        </Box>
    ); 
}

export default Sidebar; 