import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Forms from "./components/Form/Form";
import Posts from "./components/Posts/posts";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./components/Pictures/memories.png";
import useStyles from "./styles";
import { getPosts } from "./actions/posts";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const Classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={Classes.appBar} position="static" color="inherit">
        <Typography className={Classes.heading} variant="h3" align="center">
          Memories
        </Typography>
        <img
          className={Classes.image}
          src={memories}
          alt="memories"
          height="50"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={Classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Forms currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
