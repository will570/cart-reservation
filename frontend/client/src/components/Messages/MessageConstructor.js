import { Button, Paper, TextField, Typography, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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

  const { uid } = useAuth();
  const userID = uid.substring(1, uid.length - 1);
  const setUserName = async () => {
    await axios.get(`http://localhost:8800/api/user/getUserName/${userID}`).then(res => {
      setPostData({ ...postData, creator: res.data });
    });
  }

  useEffect(() => {
    setUserName();
  }, [postData]);

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: ''
  });

  const makePost = async (newPost) => {
    const newMessage = {
      title: newPost.title,
      content: newPost.message,
      sender: newPost.creator,
      replies: []
    }
    try {
      if (currentId) {
        await axios.put(`http://localhost:8800/api/message/editMessage/${currentId}`, newMessage);
        alert("Message Edited!");
      } else {
        await axios.post("http://localhost:8800/api/message/addMessage", newMessage);
        alert("Message Created!");
      }
    } catch (err) {
      alert("all fields required");
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
    </Paper>
  );
}

export default MessageConstructor;