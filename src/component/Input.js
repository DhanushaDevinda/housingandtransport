import { styled } from "@mui/material/styles";
import React from "react";
import { blue, grey, red } from "../const";
import { Input as MInput, inputClasses } from "@mui/base/Input";
import Label from "../component/Label";

const StyledInput = styled(MInput)(
  ({ theme, error }) => `
  
    .${inputClasses.input} {
      width: -webkit-fill-available;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 8px 12px;
      border-radius: 8px;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${error ? red[200] : grey[700]};

      &:hover {
        border-color: ${error ? red[200] : blue[400]};
      }
  
      &:focus {
        outline: 0;
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${
          theme.palette.mode === "dark" ? blue[600] : blue[200]
        };
      }
    }
  `
);

const Input = ({
  labelText,
  helperText,
  onChange,
  label,
  name,
  error,
  value,
}) => {
  console.log("🚀 ~ error:", error, helperText);

  return (
    <div>
      <Label error={error}>{`${labelText} *`}</Label>
      <StyledInput
        placeholder="Write your name here"
        onChange={onChange}
        label={label}
        name={name}
        error={error}
        value={value}
      />
      {error && <span style={{ color: red[500] }}>{helperText}</span>}
    </div>
  );
};

export default Input;
