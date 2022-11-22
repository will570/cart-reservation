import React from "react";
import { Card, CardActions, CardContent, Button, Typography, makeStyles, CardHeader } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import moment from "moment";
import axios from "../../api/axios";

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

  const deleteSingleMessage = (id) => {
    try {
      axios.delete(`http://localhost:8800/api/message/deleteMessage/${id}`);
      alert("Message Successfully Deleted!")
    } catch (err) {
      alert(err);
    }
  }

  return (
    <Card className={style.card}>
      <div>
        <Typography className={style.header} variant="body1">{post.sender}</Typography>
        <Typography className={style.header} variant='body2'>created: {moment(post.createdAt).fromNow()}</Typography>
        <Typography className={style.header} variant='body2'>edited: {moment(post.updatedAt).fromNow()}</Typography>
      </div>
      <CardHeader title={post.title} />
      <CardContent>
        <Typography className={style.title} variant="body1" gutterBottom>{post.content}</Typography>
      </CardContent>
      <CardActions className={style.cardActions}>
        <Button size='small' color='primary' onClick={() => {}}>
          <EditIcon fontSize="small" onClick={() => setCurrentId(post._id)} />
          Edit
        </Button>
        <Button size='small' color='primary' onClick={() => deleteSingleMessage(post._id)}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default SingleMessage;