import React from "react";
import SingleMessage from "./SingleMessage";
import { Grid, CircularProgress, Box } from "@material-ui/core";

function MessageDisplay() {
    return (
        <Box>
            <Grid container alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={6}>
                    <SingleMessage />
                </Grid>
            </Grid>
        </Box>
        // <Box>
        //     <Grid 
        //         container 
        //         spacing={2}
        //         justifyContent='flex-end'
        //         alignItems='right'
        //         border={1}
        //     >
        //         <Grid item xs={4}>
        //             <Typography variant="h4">
        //                 Construct a new message
        //             </Typography>
        //             <TextField 
        //                 multiline
        //                 helperText="Enter message title"
        //                 sx={{ m: 1, p: 1 }}    
        //             />
        //             <TextField 
        //                 multiline
        //                 helperText="Enter message content"
        //                 sx={{ m: 1, p: 1 }}        
        //             />
        //             <Button variant="contained">
        //                 submit
        //             </Button>
        //         </Grid>
        //     </Grid>
        // </Box>
    );
}

export default MessageDisplay;