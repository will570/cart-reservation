import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

function MessageCreator() {
    const [postData, setPostData] = useState({
        creator:  '',
        title: '',
        message: ''
    });

    const handleSubmit = () => {

    }

    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Construct a Message</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <Button variant="contained" color="primary" size="large" type="submit">submit</Button>
            </form>
        </Paper>
    );
}

export default MessageCreator;