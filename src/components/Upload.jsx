import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";

class DropzoneDialogD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      initialFiles: [],
    };
  }

  handleSave = (files) => {
    //Saving files to state for further use and closing Modal.
    this.setState({
      files: files,
      open: false,
    });
  };

  render() {
    return (
      <DropzoneArea
        onChange={(files) => this.handleSave(files)}
        dropzoneText={this.props.dropZoneText}
      />
    );
  }
}

export default DropzoneDialogD;
