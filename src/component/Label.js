import { styled } from "@mui/material/styles";
import React from "react";
import { grey, red } from "../const";

const StyledLabel = styled("p")(
  ({ error }) => `
  margin-bottom: 4px !important;
  color: ${error ? red[500] : grey[900]};
`
);

const Label = ({ children, error }) => {
  return (
    <div>
      <StyledLabel error={error}>{children}</StyledLabel>
    </div>
  );
};

export default Label;
