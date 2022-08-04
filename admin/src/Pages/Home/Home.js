import React from 'react';
import Container from "@mui/material/Container";
import useStyles from "./style";

const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      Donate
    </Container>
  )
}

export default Home
