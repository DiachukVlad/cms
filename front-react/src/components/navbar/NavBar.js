import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import LightThemeIcon from "@material-ui/icons/WbSunnyOutlined";
import DarkThemeIcon from "@material-ui/icons/Brightness2Outlined";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ThemeContext } from "../../context/Theme/ThemeState";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backdropFilter: "blur(20px)",
    backgroundColor: theme.palette.background.paper + "B7",
    padding: "0px 30px",
  },
  toolbar: {
    padding: "0px",
    maxWidth: "1280px",
    width: "100%",
    margin: "auto",
  },
  name: {
    fontWeight: "bold",
    fontSize: "18px",
    color: theme.palette.text.primary,
    marginRight: "20px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  spacer: {
    flexGrow: "1",
  },
  button: {
    marginRight: "10px",
  },
  iconSpacer: {
    width: "24px",
    height: "24px",
  },
  icon: {
    position: "absolute",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <AppBar elevation={3} className={classes.appbar} color="transparent">
      <MuiToolbar className={classes.toolbar}>
        <Typography className={classes.name}>Serwis samochodowy</Typography>
        <div className={classes.spacer} />
        <Button
          size="small"
          variant="outlined"
          className={classes.button}
          onClick={() => setTheme(theme === "light" ? "dark" : "light", true)}
        >
          <div className={classes.iconSpacer} />
          <Zoom in={theme === "light"}>
            <LightThemeIcon className={classes.icon} />
          </Zoom>
          <Zoom in={theme === "dark"}>
            <DarkThemeIcon className={classes.icon} />
          </Zoom>
        </Button>
      </MuiToolbar>
    </AppBar>
  );
};

export default Navbar;
