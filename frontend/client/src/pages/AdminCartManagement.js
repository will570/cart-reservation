import React from 'react';
import {Grid} from '@material-ui/core';

import Sidebar from '../components/Navigation/Sidebar'; 
import CartList from '../components/CartList';
import Header from '../components/Header';

function AdminCartManagement(){
    return (
        <Grid container>
            <Grid item xs="auto">
                    <Sidebar />
            </Grid>
            <Grid item xs>
                <>
                <Header reservationPage={false}/>
                <CartList />
                </>
            </Grid>
        </Grid>
    )
}

export default AdminCartManagement