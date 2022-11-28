import React from 'react';
import {Button, Typography} from '@material-ui/core';
import { Box } from '@mui/material';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import DeNevePlaza from '../image/DeNevePlaza.jpg'
import SproulHall from '../image/SproulHall.jpg'
import RieberCourt from '../image/RieberCourt.jpg'
import HedrickCourt from '../image/HedrickCourt.jpg'

function Building(props) {
    /* 
    * This is the building component. 
    */
    
    const { auth } = useAuth();
    const buildingName = props.name;

    
    return (
        <Box width={0.9}>
            <Box 
                style={{
                    ...outerBoxStyle,
                    ...(buildingName === "De Neve Plaza" ? DeNevePicture : null),
                    ...(buildingName === "Sproul Hall" ? SproulPicture : null),
                    ...(buildingName === "Rieber Court" ? RieberPicture : null),
                    ...(buildingName === "Hedrick Court" ? HedrickPicture : null)}}
            >
                <Box justifyContent="space-between" m={3}>
                    <Box component="h2" display="inline" style={boxTextStyle}>
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
                        style={textStyle}
                    >
                        reserve
                    </Button>

                    <Box sx={{ 
                        backgroundColor: '#F0F8FF',
                        component: "fieldset",
                        mt: 3,
                        p: 2,
                        display: "block",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        borderRadius: '10px'
                    }}
                    >
                    {(buildingName === "De Neve Plaza" ? <><b>address:</b> 351 Charles E. Young Drive West Los Angeles, CA 90024<br />
                    <b>front desk:</b> 310-825-5451</> : null)}
                    {(buildingName === "Sproul Hall" ? <><b>address:</b> 240 De Neve Drive Los Angeles, CA 90024<br />
                    <b>front desk:</b> 310-825-2965</> : null)}
                    {(buildingName === "Rieber Court" ? <><b>address:</b> 310 De Neve Drive Los Angeles, CA 90024<br />
                    <b>front desk:</b> 310-825-2275</> : null)}
                    {(buildingName === "Hedrick Court" ? <><b>address:</b> 250 De Neve Drive Los Angeles, CA 90024<br />
                    <b>front desk:</b> 310-825-2965</> : null)}
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
    border: '2px solid grey',
    borderRadius: '10px',
    width: '1',
    fontFamily: 'Roboto, sans-serif',
    backgroundSize: '1150px'
}
const DeNevePicture = {
    backgroundImage: `url(${DeNevePlaza})`
}
const SproulPicture = {
    backgroundImage: `url(${SproulHall})`
}
const RieberPicture = {
    backgroundImage: `url(${RieberCourt})`
}
const HedrickPicture = {
    backgroundImage: `url(${HedrickCourt})`
}
const textStyle = {
    fontFamily: 'Roboto, sans-serif'
}
const boxTextStyle = {
    borderRadius: "5px",
    backgroundColor: "#F0F8FF"
}
export default Building; 
