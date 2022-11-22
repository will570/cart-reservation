import React from 'react';
import {Button, Typography} from '@material-ui/core';
import { Box } from '@mui/material';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import DeNevePlaza from '../image/DeNevePlaza.jpg'

function Building(props) {
    /* 
    * This is the building component. 
    */
    
    const { auth } = useAuth();
    const buildingName = props.name;

    
    return (
        <Box width={0.9}>
            <Box 
                style={outerBoxStyle}
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
                            props.handleClick(buildingName, auth.uid);
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

const outerBoxStyle = {
    component: "fieldset", 
    margin: 3,
    display: "block",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    border: '3px solid blue',
    borderRadius: '10px',
    backgroundImage: `url(${DeNevePlaza})`,
    width: '1',
    fontFamily: "Calisto MT, serif"
}

export default Building; 
