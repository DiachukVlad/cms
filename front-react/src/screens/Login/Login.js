import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import PaddedSite from "../../components/PaddedSite/PaddedSite";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { fields } from "./fields";
import axios from 'axios'
import MainPage from "../../components/mainPage/MainPage";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "640px",
    margin: "auto",
    padding: "20px",
  },
  header: {
    marginBottom: "20px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "10px",
  },
}));

// const createValues = () => {
//   const values = {};
//   fields.forEach((field) => (values[field.id] = ""));
//   return values;
// };

// const isDisabled = (values) => {
//   let isDisabled = false;
//   Object.keys(values).forEach((key) => {
//     if (!values[key]) {
//       isDisabled = true;
//     }
//   });

//   return isDisabled;
// };

const Login = () => {
  const classes = useStyles();
  // const [values, setValues] = useState(createValues());
  const [email, setEmail] = useState('qwe@gmail.com')
  const [pass, setPass] = useState('Qwerty1234')
  const navigate = useNavigate();

  const handleLogin = (e) => {
    axios.post("/auth/local", { identifier: email, password: pass }).then((res) => {
      navigate("/")
    }).catch(err => {
      console.log(err)
    })
    e.preventDefault()
  }

  return (
    <Card elevation={3} className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.header}>
        Zaloguj się
      </Typography>
      <form className={classes.column}
        onSubmit={handleLogin}
      >
        <TextField
          variant="outlined"
          label={"Adres e-mail"}
          type="email"
          className={classes.input}
          value={email}
          onChange={email => { setEmail(email.target.value) }}
        />
        <TextField
          variant="outlined"
          label={"Password"}
          type="password"
          className={classes.input}
          value={pass}
          onChange={pass => { setPass(pass.target.value) }}
        />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
        >
          Zaloguj się
        </Button>
      </form>
    </Card>
  );
};

export default PaddedSite(Login);
