import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  title: {
    color: "#63625f",
  },
  loading: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    align: "center",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    opacity: 0.8,
    margin: "5%",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(6),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    marginTop: 30,
  },
}));
