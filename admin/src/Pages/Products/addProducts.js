import React, { useState } from "react";
import * as api from "../../app/api";
import {
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import useStyles from "./style";
const AddProducts = () => {
  const initialState = {
    title: "",
    image: null,
    text: "",
    link:"",
  };
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [state, setState] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const fileSelectedHandler = (event) => {
    let file = event.target.files[0].name;
    setState({
      ...state,
      [event.target.name]: event.target.files[0],
    });
    setUrl(file)
    console.log(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = await new FormData();
    formData.append("title", state.title);
    formData.append("text", state.text);
    formData.append("image", state.image);
    formData.append("link", state.link);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    try {
      const response = await api.createProducts(formData, config);
      console.log(response);
      setMessage(response.data.message);
      setSuccess(true)
    } catch (e) {
      setMessage(e.response.data.message);
    }
  };
  return (
    <Container component="main" maxWidth="sm">
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h5">Create Products</Typography>

        <form
          className={classes.form}
          onSubmit={handleSubmit}
          encType="multipart/form"
        >
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                name="title"
                label="Title"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="text"
                label="Text"
                fullWidth
                 multiline
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="link"
                label="Link"
                fullWidth
                 multiline
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" >{url}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                component="label"
              >
                Upload image
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  name="image"
                  id="image"
                  onChange={fileSelectedHandler}
                />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Create Products
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color={success ? "primary" : "error"} >
                {message}
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AddProducts;
