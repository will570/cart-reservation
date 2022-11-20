import { Container, Grid } from "@material-ui/core";
import React from "react";
import MessageCreator from "../components/Messages/CreateMessage";
import MessageDisplay from "../components/Messages/DisplayMessage";

function MessagePage() {
    return (
        <Container maxidth="lg">
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <MessageCreator />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <MessageDisplay />
                </Grid>
            </Grid>
        </Container>  
    );
}

export default MessagePage;