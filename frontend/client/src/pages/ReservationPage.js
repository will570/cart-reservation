import React from 'react';
import {Grid} from '@material-ui/core';
import {Typography, Box} from '@mui/material';
import Dropdown from '../components/dropdown';
import Sidebar from '../components/Sidebar'; 

function ReservationPage() {

    return (
        <Box
        sx={{
            flexGrow: 1, 
            m:2,
            p:2 
        }}
        >
            <Grid container spacing={5} direction="row">
                <Grid item xs="auto">
                    <Sidebar />
                </Grid>
                <Grid container item xs direction="column" spacing={5}> 
                    <Grid item xs>
                        <Typography variant="h2" gutterButtom>
                            Reservation
                        </Typography>
                    </Grid>
                    <Dropdown />
                </Grid>
            </Grid>
        </Box>
    );
}

export default ReservationPage; 