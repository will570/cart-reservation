import React, { useEffect, useState } from "react";
import { Card, CardActions, CardContent, Button, Typography, makeStyles, CardHeader, Collapse, styled, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from "moment";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import SingleReply from "./SingleReply";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <Button {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function SingleMessage({ post, setCurrentId }) {

  const style = makeStyles({
    header: {
      padding: '0 16px',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '15px',
      height: '100%',
      position: 'relative',
    },
    grid: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '20px',
    },
    title: {
      padding: '0 16px',
    },
    cardActions: {
      padding: '0 16px 8px 16px',
      display: 'flex',
      justifyContent: 'space-between',
    },
  });

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteSingleMessage = (id) => {
    try {
      axios.delete(`http://localhost:8800/api/message/deleteMessage/${id}`);
      alert("Message Successfully Deleted!")
    } catch (err) {
      alert(err);
    }
  }

  const [replies, setReplies] = useState([]);
  const [sender, setSender] = useState("");

  const [reply, setReply] = useState('');
  const { uid } = useAuth();
  const userID = uid.substring(1, uid.length - 1);

  useEffect(() => {
    getSender();
  }, [reply]);

  useEffect(() => {
    getReplies();
  });

  const getReplies = async () => {
    await axios.get(`http://localhost:8800/api/message/getAllReplies/${post._id}`).then(res => {
      const replyList = res.data;
      setReplies(replyList);
    });
  } 

  const getSender = async () => {
    await axios.get(`http://localhost:8800/api/user/getUserName/${post.sender}`).then(res => {
      setSender(res.data);
    })
  }

  const handleClick = async () => {
    const newReply = {
      content: reply,
      sender: userID
    };
    const res = await axios.post("http://localhost:8800/api/reply/addReply", newReply);
    await axios.put(`http://localhost:8800/api/message/addReply/${post._id}/${res.data}`);
    setReply('');
    alert("Reply Posted!");
  }

  return (
    <Card className={style.card}>
      <div>
        <Typography className={style.header} variant="body1">{sender}</Typography>
        <Typography className={style.header} variant='body2'>created: {moment(post.createdAt).fromNow()}</Typography>
        <Typography className={style.header} variant='body2'>edited: {moment(post.updatedAt).fromNow()}</Typography>
      </div>
      <CardHeader title={post.title} />
      <CardContent>
        <Typography className={style.title} variant="body1" gutterBottom>{post.content}</Typography>
      </CardContent>
      <CardActions className={style.cardActions}>
        <Button size='small' color='primary' onClick={() => setCurrentId(post._id)}>
          <EditIcon fontSize="small" />
          Edit
        </Button>
        <Button size='small' color='primary' onClick={() => deleteSingleMessage(post._id)}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {!replies ? <Typography /> : replies.map((oneReply) => (
            !oneReply ? <Typography /> : <SingleReply key={oneReply._id} oneReply={oneReply} message={post} />
          ))}
          <TextField variant="outlined" label="Reply" multiline fullWidth value={reply} onChange={(e) => setReply(e.target.value)} />
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!reply} variant='contained' color='primary' onClick={handleClick} >
            Reply
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default SingleMessage;