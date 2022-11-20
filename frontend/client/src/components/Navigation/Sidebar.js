import React from 'react'; 
import SidebarLink from './SidebarLink.js'; 
import {Box} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import useAuth from '../../hooks/useAuth.js';

function Sidebar() { 

    const { auth } = useAuth(); 

    return (
        <Box
        sx={{
            m:2, 
            p:2
        }}
        >
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
            >
                <Grid item xs>
                    <Typography variant="h5" gutterBottom>
                        Welcome 
                    </Typography>
                </Grid>

                <Grid item xs container spacing={2} direction="column" wrap="nowrap" zeroMinWidth>

                    <Grid item>
                        <SidebarLink text = "Reserve"  Icon={HomeIcon} route="/reservation"/> 
                    </Grid>

                    <Grid item>
                        <SidebarLink text = "Message" Icon={MailOutlineIcon} route="/message"/>   
                    </Grid>

                    {auth.isAdmin === true ? ( //if user is admin, show admin button, else show nothing 
                        <Grid item>
                            <SidebarLink text = "Admin" Icon={PermIdentityIcon} route="/admin/reservationTable" />
                        </Grid>
                    ) : ( null
                    )}

                    {auth.uid ? ( //if user exists, show logout button, else show login, both takes user to /login page
                        <Grid item>
                            <SidebarLink text = "Logout" Icon={PermIdentityIcon} route="/login"/> 
                        </Grid>
                    ) : (
                        <Grid item>
                            <SidebarLink text = "Login" Icon={PermIdentityIcon} route="/login"/> 
                        </Grid>
                    )}
                </Grid>
              
            </Grid>
        </Box>
    ); 
}

export default Sidebar; 