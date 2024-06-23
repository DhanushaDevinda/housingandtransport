import React, { useState } from "react";
import Container from "@mui/material/Container";
import { grey } from "../const";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Label from "../component/Label";
import Typography from "@mui/material/Typography";

import Input from "../component/Input";

const StyledContainer = styled(Container)(
  ({ theme }) => `
  
    @media (min-width: ${theme.breakpoints.values.md}px) {
      box-shadow: 0 0 6px 6px ${grey[300]};
    border-radius: 16px;
    margin:24px 0px;
  
  
    }
    padding: 24px;`
);

export default function CheckStatus() {
  const [formValues, setFormValues] = useState({
    erpNo: {
      value: "",
      error: false,
      errorMessage: "You must enter a Requester Name ",
    },
  });
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }} // Ensure the container takes up the full viewport height
    >
      <StyledContainer fixed>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            fontWeight: "bold",
          }}
        >
          <span>Current Status of &nbsp;</span>
          <span style={{ color: "#D5B16B" }}>
            Housing and Transport Allowance&nbsp;
          </span>
        </Typography>

        <Typography variant={"1rem"} gutterBottom>
          Please fill out your ERP number to check your housing and transport
          allowance status. Your satisfaction and productivity are paramount to
          us, and we aim to provide support tailored to your needs.
        </Typography>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} sm={4}>
            <Input
              placeholder="Enter ERP No"
              label="ERP No"
              name="erpNo"
              value={formValues.erpNo.value}
              labelText="ERP No"
              error={formValues.erpNo.error}
              helperText={
                formValues.erpNo.error && formValues.erpNo.errorMessage
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} sm={4}>
            <Label>
              <b>Requester Name</b>
            </Label>
            <Label>Nimal</Label>
          </Grid>

          <Grid item xs={6} sm={4}>
            <Label>
              <b>Accommodation Location</b>
            </Label>
            <Label>Jabel Ali</Label>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Label>
              <b>Status</b>
            </Label>
            <Label>Approve</Label>
          </Grid>
        </Grid>
      </StyledContainer>
    </Grid>
  );
}
