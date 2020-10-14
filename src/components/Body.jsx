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

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

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
      return <PersonalInfo></PersonalInfo>;
    }
    if (num === 1) {
      return <h1>222</h1>;
    }
    if (num === 2) {
      return <h1>3333</h1>;
    }
  };
  console.log(activeStep);
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
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
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
              >
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  style={{ backgroundColor: "red" }}
                  endIcon={<ArrowRightIcon />}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Grid>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
