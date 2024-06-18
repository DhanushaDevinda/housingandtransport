import React from "react";
import { FormControl } from "@mui/base/FormControl";
import dayjs from "dayjs";

import FileField from "../component/FileUpload";
import { useState } from "react";
import Input from "../component/Input";
import DatePicker from "../component/DatePicker";
import DropDown from "../component/DropDown";
import RadioButton from "../component/RadioButton";
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { grey } from "../const";

import Button from "@mui/material/Button";

const StyledContainer = styled(Container)(
  ({ theme }) => `
  
    @media (min-width: ${theme.breakpoints.values.md}px) {
      box-shadow: 0 0 6px 6px ${grey[300]};
    border-radius: 16px;
    margin:24px 0px;
    }
    padding: 24px;`
);

const StyledButton = styled(Button)(
  ({ theme }) => `
  import { blue, grey, red } from "../const";
    background-color: ${grey[800]};
    margin-top:24px;
        width: -webkit-fill-available;
    &:hover {
      background-color: ${grey[700]};
    }
  `
);

function Login() {
  const [formValues, setFormValues] = useState({
    userName: {
      value: "",
      error: false,
      errorMessage: "You must enter a User Name ",
    },
    password: {
      value: "",
      error: false,
      errorMessage: "You must enter Password",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value === "") {
      setFormValues({
        ...formValues,
        [name]: {
          ...formValues[name],
          value,
          error: true,
        },
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: {
          ...formValues[name],
          value,
          error: false,
        },
      });
    }
  };
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }} // Ensure the container takes up the full viewport height
      >
        <Grid item>
          <StyledContainer fixed>
            <Input
              placeholder="Enter User Name"
              label="User Name"
              name="userName"
              value={formValues.userName.value}
              onChange={handleChange}
              labelText="User Name"
              error={formValues.userName.error}
              helperText={
                formValues.userName.error && formValues.userName.errorMessage
              }
            />
            <Input
              placeholder="Enter Password"
              label="Password"
              name="Password"
              value={formValues.password.value}
              onChange={handleChange}
              labelText="Password"
              error={formValues.password.error}
              helperText={
                formValues.password.error && formValues.password.errorMessage
              }
            />
            <StyledButton type="submit" variant="contained">
              Submit
            </StyledButton>
          </StyledContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
