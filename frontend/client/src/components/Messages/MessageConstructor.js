import { Button, Paper, TextField, Typography, makeStyles } from "@material-ui/core";
import {useTheme, useMediaQuery, Dialog, DialogActions, DialogTitle} from '@mui/material'
import React, { useState } from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

function MessageConstructor({ currentId, setCurrentId }) {

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

  /* Dialog Box Implementations */
  const [open, setOpen] = React.useState(false);
  const [userMessage, setUserMessage] = React.useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClose = () => {
    setOpen(false);
  };

  const { uid } = useAuth();
  const userID = uid.substring(1, uid.length - 1);

  const [postData, setPostData] = useState({
    creator: userID,
    title: '',
    message: ''
  });

  const makePost = async (newPost) => {
    try {
      if (currentId) {
        const editedMessage = {
          title: newPost.title,
          content: newPost.message
        }
        await axios.put(`http://localhost:8800/api/message/editMessage/${currentId}`, editedMessage);
        setUserMessage(`Message Edited!`);
        setOpen(true);
      } else {
        const newMessage = {
          title: newPost.title,
          content: newPost.message,
          sender: newPost.creator,
          replies: []
        }
        await axios.post("http://localhost:8800/api/message/addMessage", newMessage);
        setUserMessage(`Message Created!`);
        setOpen(true);
      }
    } catch (err) {
      setUserMessage(`All fields required!`);
      setOpen(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    makePost(postData);
    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({ ...postData, title: '', message: '' });
  }

  return (
    <Paper className={style.paper}>
      <form className={`${style.root} ${style.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? "Edit" : "Construct"} a Message</Typography>
        <TextField name="title" variant="outlined" label="Title" multiline fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" multiline fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <Button className={style.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth disabled={!(postData.title && postData.message)}>submit</Button>
      </form>
      <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        > 
          <DialogTitle id="responsive-dialog-title">
            {userMessage}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
    </Paper>
  );
}

export default MessageConstructor;