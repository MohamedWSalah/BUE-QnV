import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    width: "73%",
  },
  gridCustom: {
    paddingLeft: "10px",
    marginTop: "20px",
  },
  paperC: {
    width: "73%",
  },
  textFieldAuto: {
    width: "auto",
  },
}));

function PersonalInfo() {
  const classes = useStyles();
  const [name, setName] = useState("Cat in the Hat");
  return (
    <center>
      <Grid container spacing={0}>
        <Grid item xs={6} className={classes.gridCustom}>
          <Paper
            label="Name"
            value={name}
            square={false}
            variant={"outlined"}
            className={classes.paperC}
          >
            <p>Personal Info</p>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="First name"
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Middle name"
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Gender"
                variant="outlined"
                size="small"
              />
            </form>
          </Paper>
        </Grid>
        <Grid item xs={6} className={classes.gridCustom}>
          <Paper square={false} variant={"outlined"} className={classes.paperC}>
            <p>Personal Info</p>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="First name"
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Middle name"
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Date of Birth"
                variant="outlined"
                size="small"
              />
            </form>
          </Paper>
        </Grid>
        <Grid item xs={6} className={classes.gridCustom} y>
          <Paper square={false} variant={"outlined"} className={classes.paperC}>
            <p>Personal Info</p>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="First name"
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Middle name"
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Date of Birth"
                variant="outlined"
                size="small"
              />
            </form>
          </Paper>
        </Grid>
        <Grid item xs={6} className={classes.gridCustom} y>
          <Paper square={false} variant={"outlined"} className={classes.paperC}>
            <p>Personal Info</p>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="First name"
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Middle name"
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                size="small"
              />
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Date of Birth"
                variant="outlined"
                size="small"
              />
            </form>
          </Paper>
        </Grid>
      </Grid>
    </center>
  );
}

export default PersonalInfo;
