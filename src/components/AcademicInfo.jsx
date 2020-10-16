import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DropzoneDialogD from "./Upload";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

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

function AcademicInfo(props) {
  const classes = useStyles();
  const { onNext, onBack, activeStep, steps } = props;

  const [academicInfoState, setAInfo] = useState({
    university: "",
    specialization: "",
    graduationDate: "",
    GPA: "",
    percentage: "",
    letterGrade: "",
    highestLevelOfEducation: "",
  });

  const handleChange = (event) => {
    setAInfo(event.target.value);
  };

  const submitForm = () => {
    onNext();
    console.log(academicInfoState);
  };

  return (
    <center>
      <Grid container spacing={0}>
        <Grid item md={12} sm={12} className={classes.gridCustom}>
          <Paper
            label="Name"
            square={false}
            variant={"outlined"}
            className={classes.paperC}
            //style={{ marginLeft: "15vw" }}
          >
            <p className={classes.parag}>AcademicInfo</p>

            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="University"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setAInfo({
                    ...academicInfoState,
                    university: e.target.value,
                  });
                }}
              />

              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Specialization"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setAInfo({
                    ...academicInfoState,
                    specialization: e.target.value,
                  });
                }}
              />
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Graduation Date"
                variant="outlined"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                onChange={(e) => {
                  setAInfo({
                    ...academicInfoState,
                    graduationDate: e.target.value,
                  });
                }}
              />
              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="GPA"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setAInfo({
                    ...academicInfoState,
                    GPA: e.target.value,
                  });
                }}
              />

              <TextField
                className={classes.textFieldAuto}
                id="outlined-basic"
                label="Percentage"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setAInfo({
                    ...academicInfoState,
                    percentage: e.target.value,
                  });
                }}
              />
              <FormControl
                variant="outlined"
                className={classes.textFieldAuto}
                size="small"
              >
                <InputLabel
                  id="outlined-label"
                  style={{ backgroundColor: "white" }}
                >
                  Letter Grade
                </InputLabel>
                <Select
                  labelId="outlined-label"
                  id="outlined"
                  value={academicInfoState.gender}
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setAInfo({
                      ...academicInfoState,
                      letterGrade: e.target.value,
                    });
                  }}
                >
                  <MenuItem value={"A"}>A</MenuItem>
                  <MenuItem value={"B"}>B</MenuItem>
                  <MenuItem value={"C"}>C</MenuItem>
                  <MenuItem value={"D"}>D</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                variant="outlined"
                className={classes.textFieldAuto}
                size="small"
                style={{ width: "81.4%" }}
              >
                <InputLabel
                  id="outlined-label"
                  style={{ backgroundColor: "white" }}
                >
                  Highest Level of Education
                </InputLabel>
                <Select
                  labelId="outlined-label"
                  id="outlined"
                  value={academicInfoState.highestLevelOfEducation}
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setAInfo({
                      ...academicInfoState,
                      highestLevelOfEducation: e.target.value,
                    });
                  }}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={"Highschool Dimploma"}>
                    Highschool Dimploma
                  </MenuItem>
                  <MenuItem value={"Associate's Degree"}>
                    Associate's Degree
                  </MenuItem>
                  <MenuItem value={"Bachelor's Degree"}>
                    Bachelor's Degree
                  </MenuItem>
                  <MenuItem value={"Master's Degree"}>Master's Degree</MenuItem>
                </Select>
              </FormControl>
            </form>
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
            <p className={classes.parag}>Certificate</p>
            <div className={classes.root} noValidate autoComplete="off">
              {/*<DropzoneDialogD className={classes.textFieldAuto} />*/}
              <DropzoneDialogD
                dropZoneText={"Drag and drop your Certificate here or click"}
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
            <p className={classes.parag}>Transcript</p>
            <div className={classes.root} noValidate autoComplete="off">
              <DropzoneDialogD
                dropZoneText={"Drag and drop your Transcript here or click"}
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
            <p className={classes.parag}> Grade scale</p>
            <div className={classes.root} noValidate autoComplete="off">
              <DropzoneDialogD
                dropZoneText={"Drag and drop your file or click"}
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

export default AcademicInfo;
