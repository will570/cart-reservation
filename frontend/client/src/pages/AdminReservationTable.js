import React from 'react'
import {Grid} from '@material-ui/core';

import Sidebar from '../components/Navigation/Sidebar'; 
import ReservationList from '../components/ReservationList';
import Header from '../components/Header';

function AdminReservationTable(){
    return (
        <Grid container>
            <Grid item xs="auto">
                    <Sidebar />
            </Grid>
            <Grid item xs>
                <>
                <Header reservationPage={true} />
                <ReservationList />
                </>
            </Grid>
        </Grid>
    )
}

export default AdminReservationTable