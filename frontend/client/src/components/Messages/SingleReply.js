import { Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import DeleteIcon from "@material-ui/icons/Delete";

function SingleReply ({ oneReply, message }) {
    const [sender, setSender] = useState("");

    useEffect(() => {
        getSender();
    });

    const getSender = async () => {
        await axios.get(`http://localhost:8800/api/user/getUserName/${oneReply.sender}`).then(res => {
            setSender(res.data);
        })
    }

    const deleteReply = (id) => {
        try {
          axios.delete(`http://localhost:8800/api/reply/deleteReply/${id}`);
          axios.put(`http://localhost:8800/api/message/deleteReply/${message._id}/${id}`);
          alert("Message Successfully Deleted!")
        } catch (err) {
          alert(err);
        }
      }

    return (
        <div>
            <Typography><strong>{sender}</strong>: {oneReply.content}</Typography>
            <Button size='small' color='primary' onClick={() => deleteReply(oneReply._id)}>
                <DeleteIcon fontSize="small" />
                Delete
            </Button>
        </div>
    );
}

export default SingleReply;