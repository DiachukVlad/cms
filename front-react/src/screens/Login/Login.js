import React, { useState } from "react";
import PaddedSite from "../../components/PaddedSite/PaddedSite";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { fields } from "./fields";

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

const createValues = () => {
  const values = {};
  fields.forEach((field) => (values[field.id] = ""));
  return values;
};

const isDisabled = (values) => {
  let isDisabled = false;
  Object.keys(values).forEach((key) => {
    if (!values[key]) {
      isDisabled = true;
    }
  });

  return isDisabled;
};

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = useState(createValues());

  const handleLogin  = () => {

  }

  return (
    <Card elevation={3} className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.header}>
        Zaloguj się
      </Typography>
      <form className={classes.column}>
        {fields.map((field) => (
          <TextField
            key={field.id}
            variant="outlined"
            label={field.name}
            type={field.type ? field.type : "text"}
            className={classes.input}
          />
        ))}
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          disabled={isDisabled(values)}
        >
          Zaloguj się
        </Button>
      </form>
    </Card>
  );
};

export default PaddedSite(Login);
