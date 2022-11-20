import { Box, Grid } from "@material-ui/core";
import React from "react";
import MessageCreator from "../components/Messages/CreateMessage";
import MessageDisplay from "../components/Messages/DisplayMessage";
import Sidebar from "../components/Navigation/Sidebar";

function MessagePage() {
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
                        <MessageDisplay /> 
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <MessageCreator />
                    </Grid>
                </Grid>
            </Grid>
        </Box>  
    );
}

export default MessagePage;