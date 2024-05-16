import React from "react";
import { selectClasses } from "@mui/base/Select";
import { blue, grey, red } from "../const";
import Label from "../component/Label";
import { styled } from "@mui/material/styles";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const StyledSelect = styled(Select)(
  ({ theme, error }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
    box-sizing: border-box;
    width: -webkit-fill-available !important; 

    padding: 8px 12px;
    border-radius: 8px;
    text-align: left;
    line-height: 1.5;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${error ? red[200] : grey[200]} !important;


    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    position: relative;
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
    };

    .MuiPaper-root{
      margin-top:8px;
    }

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      // background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${blue[400]};
     
    }
  
    &:focus {
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
    }
  
    
  
    &.${selectClasses.select} {
      border: 1px solid ${error ? red[200] : grey[200]} !important;

      outline: 0;
      border-color: ${blue[400]} !important;
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[700] : blue[200]
      };
    }
  
    & > svg {
      font-size: 1rem;
      position: absolute;
      height: 100%;
      top: 0;
      right: 10px;
    }
    `
);

const DropDown = ({
  labelText,
  options,
  error,
  helperText,
  onChange,
  name,
  value,
}) => {
  return (
    <div>
      <Label error={error}>{`${labelText} *`}</Label>
      <FormControl fullWidth>
        <StyledSelect
          name={name}
          error={error}
          value={value}
          onChange={onChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {options !== undefined &&
            options.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
        </StyledSelect>
      </FormControl>
      {/* <Select
        defaultValue={value}
        renderValue={(option) => {
          if (option == null || option.value === "none") {
            return "Select an option…";
          }
          return `${option.label}`;
        }}
        name={name}
        error={error}
        onChange={(event) => console.log(event.target.value)}
      >
        {options !== undefined &&
          options.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
      </Select> */}
      {error && <span style={{ color: red[500] }}>{helperText}</span>}
    </div>
  );
};

export default DropDown;
