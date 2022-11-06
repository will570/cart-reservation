import React from 'react';
//import button from '../components/button.js';
import {Button, Box, Grid} from '@material-ui/core';

function ReservationPage() {
    /* 
    * This is the skeleton for the reservation page. 
    */
    return (
        <div className="reservation">
            <Box component="h1" display="inline" m={3}>
                        De Neve 
            </Box>
            
            <Box 
                sx={{
                    component: "fieldset", 
                    m: 3,
                    display: "block",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    border: '3px solid grey', }}
            >
                <Box justifyContent="space-between" m={3}>
                    <Box component="h2" display="inline">
                        De Neve 
                    </Box>
                    <Box component="h2" display= "inline" >
                        : 20 
                    </Box>
                </Box>
                <Box sx={{ 
                    border: '1px dashed grey',
                    component: "fieldset",
                    m: 3,
                    p: 2,
                    display: "block",
                    justifyContent: "flex-start",
                    alignItems: "flex-start", 
                }}>  
                
                    <Button variant="contained"
                        p={2} 
                        sx={{m: 5, p: 3, backgroundColor: '#ecece4'}}
                    >
                        Reserve
                    </Button>

                    <Box sx={{ 
                        backgroundColor: '#ecece4',
                        component: "fieldset",
                        mt: 3,
                        p: 2,
                        display: "block",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                    >  
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default ReservationPage; 