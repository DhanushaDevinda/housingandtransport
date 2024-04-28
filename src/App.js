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
    requesterName: {
      value: "",
      error: false,
      errorMessage: "You must enter a Requester Name ",
    },
    erpNo: {
      value: "",
      error: false,
      errorMessage: "You must enter an ERP No",
    },
    department: {
      value: "",
      error: false,
      errorMessage: "You must enter your Department",
    },
    payGrade: {
      value: "none",
      error: false,
      errorMessage: "You must choose your Pay Grade",
    },
    residenceDetails: {
      value: "",
      error: false,
      errorMessage: "You must enter your Residence Details",
    },
    joiningDate: {
      value: "",
      error: false,
      errorMessage: "You must choose your Joining Date",
    },
    moveOutLocation: {
      value: "",
      error: false,
      errorMessage: "You must enter your Move-out Location",
    },
    mobileNo: {
      value: "",
      error: false,
      errorMessage: "You must enter your Mobile No",
    },
    transportRequestAllowance: {
      value: "",
      error: false,
      errorMessage: "You must choose option",
    },
    housingRequestAllowance: {
      value: "",
      error: false,
      errorMessage: "You must choose option",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if (currentValue === "" || currentValue === "none") {
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
    console.log("🚀 ~ handleSubmit ~ newFormValues:", newFormValues);
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
                    placeholder="Enter name"
                    label="Requester Name"
                    name="requesterName"
                    value={formValues.requesterName.value}
                    onChange={handleChange}
                    labelText="Requester Name"
                    error={formValues.requesterName.error}
                    helperText={
                      formValues.requesterName.error &&
                      formValues.requesterName.errorMessage
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    placeholder="Enter ERP No"
                    label="ERP No"
                    name="erpNo"
                    value={formValues.erpNo.value}
                    onChange={handleChange}
                    labelText="ERP No"
                    error={formValues.erpNo.error}
                    helperText={
                      formValues.erpNo.error && formValues.erpNo.errorMessage
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input
                    placeholder="Enter Department"
                    labelText="Department"
                    name="department"
                    value={formValues.department.value}
                    onChange={handleChange}
                    error={formValues.department.error}
                    helperText={
                      formValues.department.error &&
                      formValues.department.errorMessage
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DropDown
                    placeholder="Enter Pay Grade"
                    labelText="Pay Grade"
                    name="payGrade"
                    value={formValues.payGrade.value}
                    onChange={handleChange}
                    error={formValues.payGrade.error}
                    helperText={
                      formValues.payGrade.error &&
                      formValues.payGrade.errorMessage
                    }
                    options={[
                      {
                        value: 0,
                        label: "Select an option",
                      },
                      { value: 1, label: "FC01" },
                      { value: 2, label: "FC02" },
                      { value: 3, label: "FC03" },
                      { value: 4, label: "FC04" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl defaultValue="" required>
                    <Input
                      placeholder="Enter Residence Details"
                      labelText="Residence Details"
                      name="residenceDetails"
                      value={formValues.residenceDetails.value}
                      onChange={handleChange}
                      error={formValues.residenceDetails.error}
                      helperText={
                        formValues.residenceDetails.error &&
                        formValues.residenceDetails.errorMessage
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl defaultValue="" required>
                    <DatePicker labelText="Joining Date" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl defaultValue="" required>
                    <Input
                      placeholder="Enter Move-out Location"
                      labelText="Move-out Location"
                      name="moveOutLocation"
                      value={formValues.moveOutLocation.value}
                      onChange={handleChange}
                      error={formValues.moveOutLocation.error}
                      helperText={
                        formValues.moveOutLocation.error &&
                        formValues.moveOutLocation.errorMessage
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl defaultValue="" required>
                    <Input
                      placeholder="Enter Mobile No"
                      labelText="Mobile No"
                      name="mobileNo"
                      value={formValues.mobileNo.value}
                      onChange={handleChange}
                      error={formValues.mobileNo.error}
                      helperText={
                        formValues.mobileNo.error &&
                        formValues.mobileNo.errorMessage
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={{ xs: 3, sm: 3, md: 3 }}>
                <Grid item xs={12} sm={12} md={12}>
                  <FormControl>
                    <RadioButton
                      name="housingRequestAllowance"
                      value={formValues.housingRequestAllowance.value}
                      onChange={handleChange}
                      error={formValues.housingRequestAllowance.error}
                      helperText={
                        formValues.housingRequestAllowance.error &&
                        formValues.housingRequestAllowance.errorMessage
                      }
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
                      placeholder="Enter Pay Grade"
                      name="transportRequestAllowance"
                      value={formValues.transportRequestAllowance.value}
                      onChange={handleChange}
                      error={formValues.transportRequestAllowance.error}
                      helperText={
                        formValues.transportRequestAllowance.error &&
                        formValues.transportRequestAllowance.errorMessage
                      }
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
