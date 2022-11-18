import { Box, Button, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function MessagePage() {
    return (
        <div className="message">
            <CssBaseline />
            <Grid 
                container 
                spacing={2}
                direction='column'
                justifyContent='flex-start'
                sx={{ border: 1, borderRight: 1, width: 1/2}}
            >
               <Grid item>
                    <Typography variant='h4'>
                        supposedly the message title
                    </Typography>
                </Grid> 
                <Grid item>
                    <Typography variant='body1'>
                        supposedly the message content
                    </Typography>
                </Grid> 
                <Grid item>
                    <Typography variant='body2'>
                        supposedly the list of message replies
                    </Typography>
                </Grid> 
            </Grid>

            <Grid 
                container 
                spacing={2}
                justifyContent='flex-end'
                alignItems='right'
                border={1}
            >
                <Grid item xs={4}>
                    <Typography variant="h4">
                        Construct a new message
                    </Typography>
                    <TextField 
                        multiline
                        helperText="Enter message title"
                        sx={{ m: 1, p: 1 }}    
                    />
                    <TextField 
                        multiline
                        helperText="Enter message content"
                        sx={{ m: 1, p: 1 }}        
                    />
                    <Button variant="contained">
                        submit
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default MessagePage;