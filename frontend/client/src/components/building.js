import React from 'react';
import {Button, Typography} from '@material-ui/core';
import { Box } from '@mui/material';

function Building(props) {
    /* 
    * This is the building component. 
    */
    const { auth } = useAuth();
    const buildingName = props.name;
    const handleClick = async (buildingName, uid) => {
        const { cartID } = await axios.put(`http://localhost:8800/api/reservation/reserveCart/${buildingName}/${uid}`);
        alert("Successfully reserved the cart at " + buildingName);
    }
    
    return (
        <Box width={0.9}>
            <Box 
                sx={{
                    component: "fieldset", 
                    m: 3,
                    display: "block",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    border: '3px solid blue',
                    width: '1', 
                }}
            >
                <Box justifyContent="space-between" m={3}>
                    <Box component="h2" display="inline">
                        {buildingName} : {props.n_carts} 
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
                            handleClick(buildingName, auth.uid);
                        }} 
                        sx={{m: 5, p: 3, backgroundColor: '#ecece4'}}
                    >
                        Reserve
                    </Button>

                    <Box sx={{ 
                        backgroundColor: '#fff59d',
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
