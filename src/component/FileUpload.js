import { Close } from "@mui/icons-material";
import { Autocomplete, ButtonBase, TextField } from "@mui/material";
import React, { Fragment, useRef } from "react";
import FileUploadOutlined from "@mui/icons-material/FileUploadOutlined";
import { styled } from "@mui/material/styles";
import { blue, grey, red } from "../const";
import Label from "./Label";

const StyledTextField = styled(TextField)(
  ({ theme }) => `
  .MuiFormLabel-root {
    top: -5px !important;}
  `
);

const StyledAutocomplete = styled(Autocomplete)(
  ({ theme }) => `

  .MuiAutocomplete-tag{
    margin: -8px;
  }

  .MuiAutocomplete-input {
    min-width: 0px !important;

}
  .MuiChip-label{
    width: 35px; /* Adjust the width to display approximately 15 characters */
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 15px;
    padding-right: 11px; /* Corrected the padding value */
    white-space: nowrap;
  }
      .MuiInputBase-root {
        width: -webkit-fill-available;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        height: 44px;
        border-radius: 8px;
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
        border: 1px solid ${
          theme.palette.mode === "dark" ? grey[700] : grey[200]
        } !important;
  
      
        &:hover {
          border-color: ${blue[400]} !important;
          
        }

        &:focus {
            box-shadow: 0 0 0 3px ${
              theme.palette.mode === "dark" ? blue[600] : blue[200]
            };
          }
        
      }
    `
);

const FileField = ({
  textfieldProps,
  autoCompleteProps,
  multiple,
  files,
  setFile,
  labelText,
  onChange,
  name,
  error,
  helperText,
  secondaryText = "",
}) => {
  const fileRef = useRef(null);

  // // Handler to handle file selection
  // const handleCarouselFiles = (e) => {
  //   const selectedFiles = e.target.files;
  //   if (selectedFiles.length <= 2 && files.length < 2) {
  //     if (multiple) {
  //       // If multiple files can be selected, add all selected files to the state
  //       setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  //     } else {
  //       // If only one file can be selected, set the selected file as the state
  //       setFiles(selectedFiles);
  //     }
  //   }
  // };

  // Handler to open file input when clicking on text field or upload icon
  const handleCarouselInput = () => {
    fileRef.current.click();
  };

  return (
    <Fragment>
      {/* Autocomplete component to display selected files */}
      <Label error={error}>{`${labelText} *`}</Label>
      <StyledAutocomplete
        multiple
        options={Array.from(files)}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            label={files.length > 0 ? "" : textfieldProps}
            disabled
            onClick={handleCarouselInput}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {files.length > 0 && (
                    <ButtonBase
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setFile(name, []);
                      }}
                      sx={{
                        paddingRight: "0.5rem",
                      }}
                    >
                      <Close />
                    </ButtonBase>
                  )}
                  <ButtonBase onClick={handleCarouselInput}>
                    <FileUploadOutlined />
                  </ButtonBase>
                </Fragment>
              ),
            }}
            sx={{
              color: "inherit",
              "& .MuiInputBase-root , & .MuiInputBase-input": {
                paddingRight: "1rem !important",
                cursor: "pointer",
              },
            }}
          />
        )}
        value={Array.from(files)}
        onChange={(event, newValue) => {
          event.preventDefault();
          setFile(name, newValue);
        }}
        open={false}
        sx={{
          caretColor: "transparent",
          cursor: "pointer",
          "& .Mui-disabled,& .MuiInputLabel-root": {
            color: "rgba(0,0,0,0.6)",
            backgroundColor: "transparent",
          },
        }}
        {...(autoCompleteProps ?? {})}
      />

      {/* Hidden file input */}
      <input
        name={name}
        type="file"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={(e) => {
          // handleCarouselFiles(e);
          onChange(e);
        }}
        multiple={multiple}
      />
      {secondaryText !== "" && (
        <span style={{ fontSize: "14px", color: grey[600] }}>
          {secondaryText}
          <br />
        </span>
      )}

      {error && <span style={{ color: red[500] }}>{helperText}</span>}
    </Fragment>
  );
};

export default FileField;
