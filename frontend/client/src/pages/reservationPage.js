import React from 'react';
//import button from '../components/button.js';
import {Button, Drawer, Divider, Box} from '@material-ui/core';
import Dropdown from '../components/dropdown';

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
                <Button variant="contained"
                        shape="round"
                        p={2} 
                        sx={{m: 5, p: 3, backgroundColor: '#99dfff'}}
                >
                    Logout
                </Button>
            </Drawer>
            <Box
                component="main"
                justify="flex-start"
                sx={{ flexGrow: 1, pl: 15, pt: 3}}
            >
                <Dropdown/>
            </Box>
            
        </div>
    );
}

export default ReservationPage; 