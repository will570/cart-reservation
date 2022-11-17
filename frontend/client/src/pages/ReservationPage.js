import React from 'react';
//import button from '../components/button.js';
import {Button, Grid, Box} from '@material-ui/core';
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
            <Grid container spacing={2}>
                <Grid item xs={2}>

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
                </Grid>
            <Grid item xs={8}>
                <Dropdown/>
            </Grid>
            </Grid>
        </div>
    );
}

export default ReservationPage; 