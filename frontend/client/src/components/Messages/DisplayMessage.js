import React from "react";
import SingleMessage from "./SingleMessage";
import { Grid, CircularProgress, Box, makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    smMargin: {
      margin: theme.spacing(1),
    },
    actionDiv: {
      textAlign: 'center',
    },
  }));
  

function MessageDisplay() {
    return (
        <Box>
            <Grid className={style.mainContainer} container alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={6}>
                    <SingleMessage />
                    <SingleMessage />
                </Grid>
            </Grid>
        </Box>
    );
}

export default MessageDisplay;