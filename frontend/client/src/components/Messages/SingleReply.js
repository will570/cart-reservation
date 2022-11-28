import { Button, Typography } from "@material-ui/core";
import {useTheme, useMediaQuery, Dialog, DialogActions, DialogTitle} from '@mui/material'
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import DeleteIcon from "@material-ui/icons/Delete";
import useAuth from "../../hooks/useAuth";

function SingleReply ({ oneReply, message, clicked, setClicked }) {
    const { uid, adminStatus } = useAuth();
    const userID = uid.substring(1, uid.length - 1);

    const [sender, setSender] = useState("");

    useEffect(() => {
        getSender();
    }, [message.replies]);

    const getSender = async () => {
        await axios.get(`http://localhost:8800/api/user/getUserName/${oneReply.sender}`).then(res => {
            setSender(res.data);
        })
    }

    const handleDelete = (id) => {
        setClicked(!clicked);
        deleteReply(id);
    }

    const deleteReply = (id) => {
        try {
          axios.delete(`http://localhost:8800/api/reply/deleteReply/${id}`);
          axios.put(`http://localhost:8800/api/message/deleteReply/${message._id}/${id}`);
          setUserMessage("Reply Successfully Deleted!");
          setOpen(true);
        } catch (err) {
          setUserMessage(err.message);
          setOpen(true);
        }
      }

    /* Dialog Box Implementations */
    const [open, setOpen] = React.useState(false);
    const [userMessage, setUserMessage] = React.useState("");
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div>
            <Typography><strong>{sender}</strong>: {oneReply.content}</Typography>
            <Button size='small' color='primary' onClick={() => handleDelete(oneReply._id)} disabled={(!adminStatus && userID !== oneReply.sender)}>
                <DeleteIcon fontSize="small" />
                Delete
            </Button>
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
        </div>
    );
}

export default SingleReply;