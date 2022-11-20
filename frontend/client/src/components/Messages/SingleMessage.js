import React from "react";
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

function SingleMessage({ post }) {
    return (
        <Card>
            <div>
                <Typography variant="h6"></Typography>
                {/* <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography> */}
                <Typography variant='body2'>post time placeholder</Typography>
            </div>
            <div>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <CardContent>
                {/* <Typography variant="h5" gutterBottom>{post.message}</Typography> */}
                <Typography variant="h5" gutterBottom>post message placeholder</Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary' onClick={() => {}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default SingleMessage;