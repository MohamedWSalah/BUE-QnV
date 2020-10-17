/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import BUEHeaderLogo from "../logos/BUE-logo.png";
import BritishFlag from "../logos/BritishFLag.png";
import Signing from "../logos/signing3.jpg";

import Drawer from "@material-ui/core/Drawer";

import {
  Avatar,
  Button,
  Divider,
  Menu,
  MenuItem,
  FormGroup,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  makeStyles,
} from "@material-ui/core";

function Header() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    btnHover: {
      "&:hover": {
        color: "red",
      },
    },
    HeaderImg: {
      boxShadow: "0 60px 5px 2px rgb(228,159,172,0.35)",
      borderTop: "1px solid black",
      height: "100px",
      marginTop: "0",
      width: "100%",
      backgroundImage: "url(" + Signing + ")",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      position: "relative",
      top: 0,
      left: 0,
    },
    layer: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup style={{ height: "6px", background: "red" }}></FormGroup>
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar style={{ height: "20px" }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img
              src={BUEHeaderLogo}
              style={{ height: 40, width: 90, paddingTop: 5 }}
            />
          </IconButton>
          <Typography className={classes.title}>
            <Button className={classes.btnHover}>Home</Button>
            <Button className={classes.btnHover}>Setup</Button>
            <Button className={classes.btnHover}>Boards</Button>
            <Button className={classes.btnHover}>Services</Button>
          </Typography>

          <div>
            <IconButton
              style={{ color: "black", width: "40px", height: "40px" }}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle style={{ height: 40, width: 40 }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.HeaderImg}>
        <div className={classes.layer}>
          <h1 style={{ textAlign: "center", color: "white" }}>Q&V Portal</h1>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
