import React from 'react';
//import button from '../components/button.js';
import {Button, Box, Typography} from '@material-ui/core';

function Building(props) {
    /* 
    * This is the building component. 
    */
    return (
        <Box width={1}>
            <Box 
                sx={{
                    component: "fieldset", 
                    m: 3,
                    display: "block",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    border: '3px solid grey',
                    width: '1', 
                }}
            >
                <Box justifyContent="space-between" m={3}>
                    <Box component="h2" display="inline">
                        {props.name} : {props.n_carts} 
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
                        onClick={() => {
                            alert('Reserved!');
                        }} 
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
                        <Typography variant="h1" component="h2">

                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Building; 