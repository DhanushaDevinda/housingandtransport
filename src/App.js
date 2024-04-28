import React from "react";
import { FormControl } from "@mui/base/FormControl";

import FileField from "../src/component/FileUpload";
import { useState } from "react";
import Input from "./component/Input";
import DatePicker from "./component/DatePicker";
import DropDown from "./component/DropDown";
import RadioButton from "./component/RadioButton";
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { grey } from "./const";

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
  background-color: #333333;
  margin-top:24px;
  @media only screen and (max-width: 600px) {
      width: -webkit-fill-available;
  }
`
);

function App() {
  const [files, setFiles] = useState([]);
  const [formValues, setFormValues] = useState({
    name: {
      value: "",
      error: false,
      errorMessage: "You must enter a name",
    },
    age: {
      value: "",
      error: false,
      errorMessage: "You must enter an age",
    },
    likes: {
      value: "",
      error: false,
      errorMessage: "You must enter your liked tech stacks",
    },
    jobTitle: {
      value: "full-stack",
      error: false,
      errorMessage: "You must choose your job title",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if (currentValue === "") {
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: true,
          },
        };
      }
    }

    setFormValues(newFormValues);
  };
  return (
    <div>
      {/* <Container>
        <form noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">Please enter your data</Typography>
          <Input
            placeholder="Enter your name"
            label="Name"
            name="name"
            labelText="Requester Name"
            value={formValues.name.value}
            onChange={handleChange}
            error={formValues.name.error}
            helperText={formValues.name.error && formValues.name.errorMessage}
          />
          <TextField
            placeholder="Enter your name"
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            required
            value={formValues.name.value}
            onChange={handleChange}
            error={formValues.name.error}
            helperText={formValues.name.error && formValues.name.errorMessage}
          />

          <TextField
            placeholder="Enter your age"
            label="Age"
            name="age"
            variant="outlined"
            fullWidth
            required
            type="number"
            value={formValues.age.value}
            onChange={handleChange}
            error={formValues.age.error}
            helperText={formValues.age.error && formValues.age.errorMessage}
          />

          <TextField
            placeholder="Describe the best tech stack you worked with and you like most?"
            label="Likes"
            name="likes"
            variant="outlined"
            fullWidth
            required
            value={formValues.likes.value}
            multiline
            rows={4}
            onChange={handleChange}
            error={formValues.likes.error}
            helperText={formValues.likes.error && formValues.likes.errorMessage}
          />

          <FormControl>
            <FormLabel>Job title</FormLabel>
            <RadioGroup
              name="jobTitle"
              value={formValues.jobTitle.value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="full-stack"
                control={<Radio />}
                label="Full stack"
              />
              <FormControlLabel
                value="backend"
                control={<Radio />}
                label="Backend"
              />
              <FormControlLabel
                value="frontend"
                control={<Radio />}
                label="Frontend"
              />
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            endIcon={<KeyboardArrowRight />}
          >
            Submit
          </Button>
        </form>
      </Container> */}

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }} // Ensure the container takes up the full viewport height
      >
        <Grid item>
          <StyledContainer fixed>
            <form noValidate onSubmit={handleSubmit}>
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  fontWeight: "bold",
                }}
              >
                <span>Ready to apply for&nbsp;</span>
                <span style={{ color: "#D5B16B" }}>
                  Housing and Transport Allowance&nbsp;
                </span>
              </Typography>

              <Typography variant="subtitle2" gutterBottom>
                Please fill out the following form to request your housing and
                transport allowance. Your satisfaction and productivity are
                paramount to us, and we aim to provide support tailored to your
                needs.
              </Typography>

              <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6}>
                  <Input
                    placeholder="Enter your name"
                    label="Name"
                    name="name"
                    value={formValues.name.value}
                    onChange={handleChange}
                    labelText="Requester Name"
                    error={formValues.name.error}
                    helperText={
                      formValues.name.error && formValues.name.errorMessage
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl defaultValue="" required>
                    <Input
                      placeholder="Enter your age"
                      label="age"
                      name="age"
                      value={formValues.name.value}
                      onChange={handleChange}
                      labelText="ERP No"
                      error={formValues.age.error}
                      helperText={
                        formValues.age.error && formValues.age.errorMessage
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl defaultValue="" required>
                    <Input labelText="Department" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl defaultValue="" required>
                    <DropDown labelText="Pay Grade" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl defaultValue="" required>
                    <Input labelText="Residence Details" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl defaultValue="" required>
                    <DatePicker labelText="Joining Date" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl defaultValue="" required>
                    <Input labelText="Move-out Location" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl defaultValue="" required>
                    <Input labelText="Mobile No" />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={{ xs: 3, sm: 3, md: 3 }}>
                <Grid item xs={12} sm={12} md={12}>
                  <FormControl>
                    <RadioButton
                      labelText="Housing Request Allowance"
                      options={[
                        { value: "Married", label: "Married" },
                        {
                          value: "Parent  or Children",
                          label: "Parent  or Children",
                        },
                        { value: "FC04 or above", label: "FC04 or above" },
                        { value: "Exception cases", label: "Exception cases" },
                      ]}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={{ xs: 3, sm: 3, md: 3 }}>
                <Grid item xs={12} sm={4} md={4}>
                  <FormControl defaultValue="" required>
                    <FileField
                      labelText="Attested marriage certificate"
                      multiple={true} // Allow multiple files to be selected
                      files={files} // Pass the files state
                      setFiles={setFiles} // Pass the function to update the files state
                      textfieldProps={"Upload Files"} // Props for the text field
                      autoCompleteProps={{ freeSolo: true }} // Props for the Autocomplete component
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <FormControl defaultValue="" required>
                    <FileField
                      labelText="Passport copy (Husband and Wife)"
                      multiple={true} // Allow multiple files to be selected
                      files={files} // Pass the files state
                      setFiles={setFiles} // Pass the function to update the files state
                      textfieldProps={"Upload Files"} // Props for the text field
                      autoCompleteProps={{ freeSolo: true }} // Props for the Autocomplete component
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <FormControl defaultValue="" required>
                    <FileField
                      labelText="Resident visa copy (Husband and Wife)"
                      multiple={true} // Allow multiple files to be selected
                      files={files} // Pass the files state
                      setFiles={setFiles} // Pass the function to update the files state
                      textfieldProps={"Upload Files"} // Props for the text field
                      autoCompleteProps={{ freeSolo: true }} // Props for the Autocomplete component
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6}>
                  <FormControl>
                    <RadioButton
                      labelText="Transport Request Allowance"
                      options={[
                        { value: "FC04 or above", label: "FC04 or above" },
                        { value: "Exception cases", label: "Exception cases" },
                      ]}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={{ xs: 1, sm: 2, md: 3 }}
                style={{ direction: "rtl" }}
              >
                <Grid item xs={12} sm={6}>
                  <StyledButton type="submit" variant="contained">
                    Submit
                  </StyledButton>
                </Grid>
              </Grid>
            </form>
          </StyledContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
