import React from 'react'; 
import SidebarLink from './SidebarLink.js'; 
import {Box} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import useAuth from '../../hooks/useAuth.js';
import logo from '../../image/Cartgoers-logos.jpeg';

function Sidebar() { 

    const { userToken, adminStatus } = useAuth(); 

    const handleChange = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("userID");
        localStorage.removeItem("adminStatus");
    }

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
                    <Box style={logoStyle}>
                    </Box>

                <Grid item xs container spacing={2} direction="column" wrap="nowrap" zeroMinWidth>

                    <Grid item>
                        <SidebarLink text = "Reserve"  Icon={HomeIcon} route="/reservation"/> 
                    </Grid>

                    <Grid item>
                        <SidebarLink text = "Message" Icon={MailOutlineIcon} route="/message"/>   
                    </Grid>

                    {adminStatus === true ? ( //if user is admin, show admin button, else show nothing 
                        <Grid item>
                            <SidebarLink text = "Admin" Icon={PermIdentityIcon} route="/admin/reservationTable"/>
                        </Grid>
                    ) : ( null
                    )}

                    {userToken ? ( //if user exists, show logout button, else show login, both takes user to /login page
                        <Grid item>
                            <div onClick={handleChange}>
                                <SidebarLink text = "Logout" Icon={PermIdentityIcon} route="/login"/> 
                            </div>
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

const logoStyle = {
    backgroundImage: `url(${logo})`,
    width: '120px',
    height: '120px',
    backgroundSize: '120px 120px',
    borderRadius: '10px',
    marginTop: '50px'
}

export default Sidebar; 