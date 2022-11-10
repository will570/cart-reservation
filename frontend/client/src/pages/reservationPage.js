import React from 'react';
//import button from '../components/button.js';
import {Drawer, Divider, Box} from '@material-ui/core';
import Building from '../components/building';

function ReservationPage() {
    /* 
    * This is the skeleton for the reservation page. 
    */

    return (
        <div className="reservation">
            <Box component="h1" display="inline" m={3} pl = {15}>
                        Reservation 
            </Box>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 200 },
                }}
                open
                >
            <Box component="h2" display="inline" m={3}>
                        Hello 
            </Box>
            </Drawer>
            <Box
                component="main"
                justify="flex-start"
                sx={{ flexGrow: 1, pl: 15}}
            >
                <Building/>
            </Box>
            
        </div>
    );
}

export default ReservationPage; 