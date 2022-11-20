import { Button, Paper, TextField, Typography, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const style = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    paper: {
      padding: theme.spacing(2),
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    buttonSubmit: {
      marginBottom: 10,
    },
  }));

function MessageCreator() {

    const [postData, setPostData] = useState({
        creator:  '',
        title: '',
        message: ''
    });

    const handleSubmit = () => {
      
    }

    return (
        <Paper className={style.paper}>
            <form className={`${style.root} ${style.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Construct a New Message</Typography>
                <TextField name="title" variant="outlined" label="Title" multiline fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" multiline fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <Button className={style.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>submit</Button>
            </form>
        </Paper>
    );
}

export default MessageCreator;