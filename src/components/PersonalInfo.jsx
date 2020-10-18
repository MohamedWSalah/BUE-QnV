import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DropzoneDialogD from "./Upload";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Joi, { errors, join } from "joi-browser";
import PIvalidation from "./schemas/PISchema";
import {
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "../App.css";
import { common } from "@material-ui/core/colors";
import CountrySelect from "./Countries";

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
    border: "3px solid rgba(0, 0, 0, 1)",
  },
  gridCustom: { paddingLeft: "10px", marginTop: "20px" },
  paperC: {
    width: "90%",
    height: "100%",
  },
  textFieldAuto: {
    width: "40%",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  parag: {
    position: "relative",
    top: "-13px",
    backgroundColor: "white",
    display: "inline",
    height: "auto",
    fontWeight: "bold",
  },
}));

function PersonalInfo(props) {
  const classes = useStyles();
  const { onNext, onBack, activeStep, steps, click, sendObj } = props;
  const [Terrors, setErrors] = useState({});
  const [personalInfoState, setPInfoState] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    country: "",
    gender: "",
    idType: "",
    idNumber: "",
    mobileNumber: "",
    secondMobileNumber: "",
    Landline: "",
    email: "",
    RCountry: "",
    city: "",
    street: "",
    zipcode: "",
  });

  const handleChange = (event) => {
    setPInfoState(event.target.value);
  };

  const handleCountryChange = (value) => {
    setPInfoState({
      ...personalInfoState,
      country: value,
    });
  };

  const validates = () => {
    const result = PIvalidation(personalInfoState);

    if (!result.error) return true;
    var i = 0;
    const newObj = {};
    for (let item of result.error.details) {
      var x = result.error.details[i].path[0];

      newObj[x] = true;
      i++;
    }
    setErrors(newObj);
    alert(result.error.details[0].message);
    return false;
  };

  const submitForm = () => {
    let cont = validates();
    if (cont === true) {
      click(personalInfoState);
      onNext();
    }
  };
  return (
    <center>
      <Grid container spacing={0}>
        <Grid item md={6} sm={12} className={classes.gridCustom}>
          <Paper
            label="Name"
            square={false}
            variant={"outlined"}
            className={classes.paperC}
            //style={{ marginLeft: "15vw" }}
          >
            <p className={classes.parag}>Personal Info</p>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                error={"firstName" in Terrors ? true : false}
                autoFocus
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="First name"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPInfoState({
                    ...personalInfoState,
                    firstName: e.target.value,
                  });
                }}
              />

              <TextField
                className={classes.textFieldAuto}
                error={"middleName" in Terrors ? true : false}
                id="outlined-basic"
                label="Middle name"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPInfoState({
                    ...personalInfoState,
                    middleName: e.target.value,
                  });
                }}
              />
              <TextField
                className={classes.textFieldAuto}
                error={"lastName" in Terrors ? true : false}
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPInfoState({
                    ...personalInfoState,
                    lastName: e.target.value,
                  });
                }}
              />
              <TextField
                className={classes.textFieldAuto}
                error={"dateOfBirth" in Terrors ? true : false}
                id="outlined-basic"
                label="Date of birth"
                variant="outlined"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                onChange={(e) => {
                  setPInfoState({
                    ...personalInfoState,
                    dateOfBirth: e.target.value,
                  });
                }}
              />
              <FormControl
                variant="outlined"
                className={classes.textFieldAuto}
                size="small"
              >
                <CountrySelect
                  error={"country" in Terrors ? true : false}
                  onC={handleCountryChange}
                />
              </FormControl>

              <FormControl
                variant="outlined"
                className={classes.textFieldAuto}
                size="small"
              >
                <InputLabel
                  id="outlined-label"
                  style={{ backgroundColor: "white" }}
                >
                  Gender
                </InputLabel>
                <Select
                  error={"gender" in Terrors ? true : false}
                  labelId="outlined-label"
                  id="outlined"
                  value={personalInfoState.gender}
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setPInfoState({
                      ...personalInfoState,
                      gender: e.target.value,
                    });
                  }}
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                variant="outlined"
                className={classes.textFieldAuto}
                size="small"
              >
                <InputLabel
                  id="outlined-label"
                  style={{ backgroundColor: "white" }}
                >
                  ID Type
                </InputLabel>
                <Select
                  error={"idType" in Terrors ? true : false}
                  labelId="outlined-label"
                  id="outlined"
                  value={personalInfoState.idType}
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setPInfoState({
                      ...personalInfoState,
                      idType: e.target.value,
                    });
                  }}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={"Passport"}>Passport</MenuItem>
                  <MenuItem value={"IdentificationCard"}>
                    IdentificationCard
                  </MenuItem>
                </Select>
              </FormControl>

              <TextField
                className={classes.textFieldAuto}
                error={"idNumber" in Terrors ? true : false}
                id="outlined-basic"
                label="ID number"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPInfoState({
                    ...personalInfoState,
                    idNumber: e.target.value,
                  });
                }}
              />
            </form>
          </Paper>
        </Grid>
        {/*========================ContactInfo==========================*/}
        <Grid item md={6} sm={12} className={classes.gridCustom}>
          <Paper
            square={false}
            variant={"outlined"}
            className={classes.paperC}
            //style={{ marginRight: "15vw" }}
          >
            <p className={classes.parag}>Contact Info</p>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                error={"mobileNumber" in Terrors ? true : false}
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPInfoState({
                    ...personalInfoState,
                    mobileNumber: e.target.value,
                  });
                }}
              />
              <TextField
                className={classes.textFieldAuto}
                error={"secondMobileNumber" in Terrors ? true : false}
                id="outlined-basic"
                label="2nd Mobile No"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPInfoState({
                    ...personalInfoState,
                    secondMobileNumber: e.target.value,
                  });
                }}
              />
              <TextField
                error={"Landline" in Terrors ? true : false}
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Landline"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPInfoState({
                    ...personalInfoState,
                    Landline: e.target.value,
                  });
                }}
              />
              <TextField
                error={"email" in Terrors ? true : false}
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Email address"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPInfoState({
                    ...personalInfoState,
                    email: e.target.value,
                  });
                }}
              />

              <TextField
                error={"RCountry" in Terrors ? true : false}
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Residence Country"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPInfoState({
                    ...personalInfoState,
                    RCountry: e.target.value,
                  });
                }}
              />
              <TextField
                error={"city" in Terrors ? true : false}
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="City"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPInfoState({
                    ...personalInfoState,
                    city: e.target.value,
                  });
                }}
              />
              <TextField
                error={"street" in Terrors ? true : false}
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Street"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPInfoState({
                    ...personalInfoState,
                    street: e.target.value,
                  });
                }}
              />
              <TextField
                error={"zipcode" in Terrors ? true : false}
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Zip/PostalCode"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPInfoState({
                    ...personalInfoState,
                    zipcode: e.target.value,
                  });
                }}
              />
            </form>
          </Paper>
        </Grid>
        {/*=====================Required Files======================*/}
        <Grid
          item
          md={4}
          sm={12}
          className={classes.gridCustom}
          style={{ width: "100%" }}
        >
          <Paper
            square={false}
            variant={"outlined"}
            className={classes.paperC}

            //style={{ marginLeft: "15vw" }}
          >
            <p className={classes.parag}>Birth Certificate</p>
            <div className={classes.root} noValidate autoComplete="off">
              {/*<DropzoneDialogD className={classes.textFieldAuto} />*/}
              <DropzoneDialogD
                dropZoneText={
                  "Drag and drop your Birth Certificate here or click"
                }
              />
            </div>
          </Paper>
        </Grid>
        <Grid
          item
          md={4}
          sm={12}
          className={classes.gridCustom}
          style={{ width: "100%" }}
        >
          <Paper
            square={false}
            variant={"outlined"}
            className={classes.paperC}
            //style={{ marginLeft: "15vw" }}
          >
            <p className={classes.parag}>Personal Photo</p>
            <div className={classes.root} noValidate autoComplete="off">
              <DropzoneDialogD
                dropZoneText={"Drag and drop your Personal Photo here or click"}
              />
            </div>
          </Paper>
        </Grid>
        <Grid
          item
          md={4}
          sm={12}
          className={classes.gridCustom}
          style={{ width: "100%" }}
        >
          <Paper
            square={false}
            variant={"outlined"}
            className={classes.paperC}
            //style={{ marginLeft: "15vw" }}
          >
            <p className={classes.parag}> ID</p>
            <div className={classes.root} noValidate autoComplete="off">
              <DropzoneDialogD
                dropZoneText={
                  "Drag and drop your Identification photo here or click"
                }
              />
            </div>
          </Paper>
        </Grid>
      </Grid>

      <div style={{ paddingTop: "20px" }}>
        <Button
          disabled={activeStep === 0}
          onClick={onBack}
          className={classes.backButton}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={submitForm}
          style={{ backgroundColor: "red" }}
          endIcon={<ArrowRightIcon />}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </center>
  );
}

export default PersonalInfo;
