import React, { Component } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";

class DropzoneDialogD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: [],
    };
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  handleSave(files) {
    //Saving files to state for further use and closing Modal.
    this.setState({
      files: files,
      open: false,
    });
  }

  handleOpen() {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Button
          onClick={this.handleOpen.bind(this)}
          style={{ backgroundColor: "grey" }}
        >
          Add Image
        </Button>
        <DropzoneDialog
          open={this.state.open}
          onSave={this.handleSave.bind(this)}
          acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={this.handleClose.bind(this)}
        />
      </React.Fragment>
    );
  }
}

export default DropzoneDialogD;
