import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/navbar/Navbar";
import Login from "./Login/Login";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    padding: "64px 30px 30px",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("xs")]: {
      padding: "64px 30px 30px",
    },
    [theme.breakpoints.down(350)]: {
      padding: "64px 5% 5%",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <Navbar />
      <div className={classes.root}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
