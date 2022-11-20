import React from "react";
import { Card, CardActions, CardContent, Button, Typography, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import moment from "moment";

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

function SingleMessage({ post }) {
    return (
        <Card className={style.card}>
            <div>
                <Typography className={style.header} variant="body1">post creator placeholder</Typography>
                {/* <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography> */}
                <Typography className={style.header} variant='body2'>posted time placeholder</Typography>
            </div>
            <CardContent>
                {/* <Typography variant="h5" gutterBottom>{post.message}</Typography> */}
                <Typography className={style.title} variant="h5" gutterBottom>post message placeholder</Typography>
            </CardContent>
            <CardActions className={style.cardActions}>
                <Button size='small' color='primary' onClick={() => {}}>
                    <EditIcon fontSize="small" />
                    Edit
                </Button>
                <Button size='small' color='primary' onClick={() => {}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default SingleMessage;