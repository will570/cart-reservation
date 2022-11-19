import React from 'react';
import {Grid, Box} from '@material-ui/core';
import Typography from '@mui/material/Typography';

import Dropdown from '../components/dropdown';
import Sidebar from '../components/Navigation/Sidebar'; 

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