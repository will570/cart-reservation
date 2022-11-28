import { Box, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import MessageConstructor from "../components/Messages/MessageConstructor";
import MessageBoard from "../components/Messages/MessageBoard";
import Sidebar from "../components/Navigation/Sidebar";

function MessagePage() {
    const [currentId, setCurrentId] = useState(null);

    return (
        <Box sx={{
            flexGrow: 1, 
            m:2,
            p:2,
        }}>
            <Grid container direction='row' spacing={5}>
                <Grid item xs="auto">
                    <Sidebar />
                </Grid>
                <Grid container item xs direction='row' spacing={3}>
                    <Grid item xs={12} sm={7}>
                    <Typography variant="h2" mb={3} gutterButtom style={textStyle}>
                            Message
                    </Typography>
                        <MessageBoard setCurrentId={setCurrentId} /> 
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MessageConstructor currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>  
    );
}

const textStyle = {
    fontFamily: 'Roboto, sans-serif'
}

export default MessagePage;