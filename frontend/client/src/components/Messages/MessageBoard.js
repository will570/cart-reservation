import React, { useEffect, useState } from "react";
import SingleMessage from "./SingleMessage";
import { Grid, Box, makeStyles } from "@material-ui/core";
import axios from "../../api/axios";

function MessageBoard({ setCurrentId }) {

  const style = makeStyles((theme) => ({
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    smMargin: {
      margin: theme.spacing(1),
    },
    actionDiv: {
      textAlign: 'center',
    },
  }));

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  });

  const getPosts = async () => {
    axios.get("http://localhost:8800/api/message/getAllMessages").then(res => {
      const postList = res.data;
      setPosts(postList);
    });
  } 

  return (
    <Box style={{maxHeight: 600, overflow: 'auto'}}>

      <Grid className={style.mainContainer} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <SingleMessage post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MessageBoard;