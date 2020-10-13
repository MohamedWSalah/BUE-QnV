import React, { Component, useEffect, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import BUEHeaderLogo from "../logos/BUE-logo.png";
import BritishFlag from "../logos/BritishFLag.png";
import Signing from "../logos/signing2.jpg";
import {
  Avatar,
  Button,
  Divider,
  Menu,
  MenuItem,
  FormGroup,
  FormControlLabel,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  makeStyles,
  CardMedia,
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
              style={{ width: "40px", height: "40px", paddingright: "100px" }}
            >
              <Avatar src={BritishFlag} style={{ height: 40, width: 40 }} />
            </IconButton>

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
      <CardMedia
        hover
        className={classes.visuallyHidden}
        image={Signing}
        style={{ height: "100px" }}
      ></CardMedia>
    </div>
  );
}

export default Header;
