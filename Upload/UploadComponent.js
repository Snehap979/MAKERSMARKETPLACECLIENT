import React, { useState, useRef } from "react";
import { Grid, Button } from "@material-ui/core";
import uploadPictureToS3 from "../S3UploadComponent";

const FileUpload = ({ handleUploadResult }) => { // Receive function as prop
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles(files);
    setDragging(false);
  };

  // const handleUpload = async () => {
  //   try {
  //     console.log("selectedFiles[0], selectedFiles[0].name", selectedFiles[0], selectedFiles[0].name);
  //     let res = await uploadPictureToS3(selectedFiles[0], selectedFiles[0].name);
  //     handleUploadResult(res); // Pass upload result to parent
  //   } catch (error) {
  //     console.error("Error uploading picture:", error);
  //   }
  // };
  const handleUpload = async () => {
    try {
      console.log("selectedFiles[0], selectedFiles[0].name", selectedFiles[0], selectedFiles[0].name);
      let res = await uploadPictureToS3(selectedFiles[0], selectedFiles[0].name);
      console.log("res", res);
      handleUploadResult(res); // Pass upload result to parent
    } catch (error) {
      console.error("Error uploading picture:", error);
    }
  };

  return (
    <Grid container>
      <input
        type="file"
        multiple
        style={{ display: "none" }}
        onChange={handleFileChange}
        ref={fileInputRef}
        direction="row"
      />
      <Grid
        item
        className={`dropzone ${dragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{ color: "black", margin: 8 }}
      >
        <Button style={{ background: "#C9B79C" }} variant="contained" onClick={() => fileInputRef.current.click()}>
          Select Files
        </Button>
      </Grid>
      <Grid item style={{ marginTop: 8 }}>
        <Button variant="contained" onClick={handleUpload} style={{ background: "#C9B79C" }}>
          Upload
        </Button>
      </Grid>

      <div>
        {selectedFiles.map((file, index) => (
          <div key={index}>{file.name}</div>
        ))}
      </div>
    </Grid>
  );
};

export default FileUpload;
