import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";
import PersonalInfo from "./PersonalInfo";
import AcademicInfo from "./AcademicInfo";
import ProgramSelection from "./ProgramSelection";

import "../Body.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: "red",
  },
  paperC: {
    width: "20%",
    height: "100%",
  },
}));

function getSteps() {
  return ["Personal Information", "Academic Information", "Program Selection"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Personal Information";
    case 1:
      return "Academic Information";
    case 2:
      return "Program Selection";
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const personalInfoTest = {};

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const formRenderNumber = (num) => {
    if (num === 0) {
      return (
        <PersonalInfo
          onNext={handleNext}
          onBack={handleBack}
          activeStep={activeStep}
          steps={steps}
        />
      );
    }
    if (num === 1) {
      return (
        <AcademicInfo
          onNext={handleNext}
          onBack={handleBack}
          activeStep={activeStep}
          steps={steps}
        />
      );
    }
    if (num === 2) {
      return (
        <ProgramSelection
          onNext={handleNext}
          onBack={handleBack}
          activeStep={activeStep}
          steps={steps}
        />
      );
    }
  };
  console.log("Step number ", activeStep);
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {formRenderNumber(activeStep)}

      <div style={{ marginTop: "15px" }}>
        {activeStep === steps.length ? (
          <center>
            <Paper
              label="Name"
              square={false}
              variant={"outlined"}
              className={classes.paperC}
              style={{ marginTop: "10vw" }}
            >
              <p>Your form has been submitted</p>
              <p>We will contact you shortly</p>
            </Paper>
          </center>
        ) : (
          <div>
            <div>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                item
                xs={12}
              ></Grid>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
