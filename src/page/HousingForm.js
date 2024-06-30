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

import MouseOverPopover from "../component/Popover";

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
  @media only screen and (max-width: 600px) {
      width: -webkit-fill-available;
  }

  &:hover {
    background-color: ${grey[700]};
  }
`
);

function HousingForm() {
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
      value: "none",
      error: false,
      errorMessage: "You must enter your Residence Details",
    },
    joiningDate: {
      value: "2022-04-17",
      error: false,
      errorMessage: "You must choose your Joining Date",
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
    marriageCertificate: {
      value: [],
      error: false,
      errorMessage: "You must upload attachment",
    },
    residentVisaCopies: {
      value: [],
      error: false,
      errorMessage: "You must upload attachment",
    },
    passportCopies: {
      value: [],
      error: false,
      errorMessage: "You must upload attachment",
    },
  });

  const setFile = (name, array) => {
    if (array.length === 0) {
      setFormValues({
        ...formValues,
        [name]: {
          ...formValues[name],
          value: array,
          error: true,
        },
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: {
          ...formValues[name],
          value: array,
          error: false,
        },
      });
    }
  };
  const fileHandleChange = (e) => {
    const name = e.target.name;
    const selectedFiles = e.target.files;

    if (formValues[name].value.length >= 0) {
      if (selectedFiles.length <= 2 && files.length < 2) {
        setFormValues({
          ...formValues,
          [name]: {
            ...formValues[name],
            value: [...formValues[name].value, ...selectedFiles],
            error: false,
          },
        });
      }
    } else {
      setFormValues({
        ...formValues,
        [name]: {
          ...formValues[name],
          error: true,
        },
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value === "FC04" || value === "FC05") {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [name]: {
          ...prevFormValues[name],
          value,
          error: false,
        },
        housingRequestAllowance: {
          ...prevFormValues.housingRequestAllowance,
          value: "",
          error: false,
        },
      }));
    } else if (value === "" || value === "none") {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [name]: {
          ...prevFormValues[name],
          value,
          error: true,
        },
      }));
    } else {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [name]: {
          ...prevFormValues[name],
          value,
          error: false,
        },
      }));
    }
  };
  //   console.log(
  //     "🚀 ~ handleChange ~ name, value:",
  //     name,
  //     value,
  //     formValues[name]
  //   );
  //   setFormValues({
  //     ...formValues,
  //     housingRequestAllowance: {
  //       ...formValues.housingRequestAllowance,
  //       value: "FC04 or above",
  //       error: false,
  //     },
  //     transportRequestAllowance: {
  //       ...formValues.transportRequestAllowance,
  //       value,
  //       error: false,
  //     },
  //   });
  // }

  // if (value === "" || value === "none") {
  //   setFormValues({
  //     ...formValues,
  //     [name]: {
  //       ...formValues[name],
  //       value,
  //       error: true,
  //     },
  //   });
  // } else {
  //   setFormValues({
  //     ...formValues,
  //     [name]: {
  //       ...formValues[name],
  //       value,
  //       error: false,
  //     },
  //   });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;
      console.log("🚀 ~ handleSubmit ~ currentValue:", currentValue);

      if (
        currentValue === "" ||
        currentValue === "none" ||
        currentValue === "2022-04-17" ||
        currentValue.length === 0
      ) {
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

              <Typography variant={"1rem"} gutterBottom>
                Please fill out the following form to request your housing and
                transport allowance.
              </Typography>

              <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
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
                        value: "none",
                        label: "Select an option",
                      },
                      { value: "FC01", label: "FC01" },
                      { value: "FC02", label: "FC02" },
                      { value: "FC03", label: "FC03" },
                      { value: "FC04", label: "FC04" },
                      { value: "FC05", label: "FC05" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DropDown
                    placeholder="Enter Residence Details"
                    labelText="Accommodation Location"
                    name="residenceDetails"
                    value={formValues.residenceDetails.value}
                    onChange={handleChange}
                    error={formValues.residenceDetails.error}
                    helperText={
                      formValues.residenceDetails.error &&
                      formValues.residenceDetails.errorMessage
                    }
                    options={[
                      {
                        value: "none",
                        label: "Select an option",
                      },
                      { value: "Accommodation 3", label: "Accommodation 3" },
                      { value: "Accommodation 4", label: "Accommodation 4" },
                      { value: "Accommodation 5", label: "Accommodation 5" },
                      { value: "Al Nahda", label: "Al Nahda" },
                      { value: "Al Khail Gate", label: "Al Khail Gate" },
                      { value: "Jabel Ali", label: "Jabel Ali" },
                      {
                        value: "Not Staying in Accommodation",
                        label: "Not Staying in Accommodation",
                      },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl defaultValue="" required>
                    <DatePicker
                      labelText="Joining Date"
                      name="joiningDate"
                      onChange={handleChange}
                      value={dayjs(formValues.joiningDate.value)}
                      error={formValues.joiningDate.error}
                      helperText={
                        formValues.joiningDate.error &&
                        formValues.joiningDate.errorMessage
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

              {formValues.payGrade.value !== "none" && (
                <>
                  {!(
                    formValues.payGrade.value === "FC04" ||
                    formValues.payGrade.value == "FC05"
                  ) ? (
                    <Grid container>
                      <Grid item xs={10} sm={6} md={12}>
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
                                value: "Parent/in Law/Children",
                                label: "Parent/in Law/Children",
                              },
                              {
                                value: "Exception cases",
                                label: "Exception cases",
                              },
                            ]}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  ) : (
                    <p style={{ marginBottom: "0px" }}>
                      Housing Request Allowance *&nbsp;
                    </p>
                  )}
                </>
              )}

              {formValues.housingRequestAllowance.value === "Married" && (
                <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={12} sm={4} md={4}>
                    <FileField
                      name="marriageCertificate"
                      onChange={fileHandleChange}
                      labelText="Attested marriage certificate"
                      multiple={true} // Allow multiple files to be selected
                      files={formValues.marriageCertificate.value}
                      textfieldProps={"Upload Files"} // Props for the text field
                      autoCompleteProps={{ freeSolo: true }} // Props for the Autocomplete component
                      error={formValues.marriageCertificate.error}
                      helperText={
                        formValues.marriageCertificate.error &&
                        formValues.marriageCertificate.errorMessage
                      }
                      setFile={setFile}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <FileField
                      name="passportCopies"
                      onChange={fileHandleChange}
                      labelText="Passport copy (Husband and Wife)"
                      multiple={true} // Allow multiple files to be selected
                      files={formValues.passportCopies.value}
                      textfieldProps={"Upload Files"} // Props for the text field
                      autoCompleteProps={{ freeSolo: true }} // Props for the Autocomplete component
                      error={formValues.passportCopies.error}
                      helperText={
                        formValues.passportCopies.error &&
                        formValues.passportCopies.errorMessage
                      }
                      setFile={setFile}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <FileField
                      name="residentVisaCopies"
                      onChange={fileHandleChange}
                      labelText="Resident visa copy (Husband and Wife)"
                      multiple={true} // Allow multiple files to be selected
                      files={formValues.residentVisaCopies.value}
                      textfieldProps={"Upload Files"} // Props for the text field
                      autoCompleteProps={{ freeSolo: true }} // Props for the Autocomplete component
                      error={formValues.residentVisaCopies.error}
                      helperText={
                        formValues.residentVisaCopies.error &&
                        formValues.residentVisaCopies.errorMessage
                      }
                      setFile={setFile}
                    />
                  </Grid>
                </Grid>
              )}

              {formValues.housingRequestAllowance.value ===
                "Parent/in Law/Children" && (
                <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={12} sm={4} md={4}>
                    <FileField
                      name="passportCopies"
                      onChange={fileHandleChange}
                      labelText="Passport copy (Parent and Children)"
                      multiple={true} // Allow multiple files to be selected
                      files={formValues.passportCopies.value}
                      textfieldProps={"Upload Files"} // Props for the text field
                      autoCompleteProps={{ freeSolo: true }} // Props for the Autocomplete component
                      error={formValues.passportCopies.error}
                      helperText={
                        formValues.passportCopies.error &&
                        formValues.passportCopies.errorMessage
                      }
                      setFile={setFile}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <FileField
                      name="residentVisaCopies"
                      onChange={fileHandleChange}
                      labelText="Resident visa copy (Parent and Children)"
                      multiple={true} // Allow multiple files to be selected
                      files={formValues.residentVisaCopies.value}
                      textfieldProps={"Upload Files"} // Props for the text field
                      autoCompleteProps={{ freeSolo: true }} // Props for the Autocomplete component
                      error={formValues.residentVisaCopies.error}
                      helperText={
                        formValues.residentVisaCopies.error &&
                        formValues.residentVisaCopies.errorMessage
                      }
                      setFile={setFile}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <FileField
                      name="marriageCertificate"
                      onChange={fileHandleChange}
                      labelText="Attested Birth Certificate"
                      multiple={true} // Allow multiple files to be selected
                      files={formValues.marriageCertificate.value}
                      textfieldProps={"Upload Files"} // Props for the text field
                      autoCompleteProps={{ freeSolo: true }} // Props for the Autocomplete component
                      error={formValues.marriageCertificate.error}
                      helperText={
                        formValues.marriageCertificate.error &&
                        formValues.marriageCertificate.errorMessage
                      }
                      setFile={setFile}
                    />
                  </Grid>
                </Grid>
              )}

              {(formValues.payGrade.value === "FC04" ||
                formValues.payGrade.value === "FC05") && (
                <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={12} sm={4} md={4}>
                    <FileField
                      name="promotionLetter"
                      onChange={fileHandleChange}
                      labelText="Promotion Letter"
                      multiple={true} // Allow multiple files to be selected
                      files={formValues.marriageCertificate.value}
                      textfieldProps={"Upload Files"} // Props for the text field
                      autoCompleteProps={{ freeSolo: true }} // Props for the Autocomplete component
                      error={formValues.marriageCertificate.error}
                      helperText={
                        formValues.marriageCertificate.error &&
                        formValues.marriageCertificate.errorMessage
                      }
                      setFile={setFile}
                    />
                  </Grid>
                </Grid>
              )}

              {formValues.housingRequestAllowance.value ===
                "Exception cases" && (
                <div>
                  <Grid item xs={12} sm={6} md={6}>
                    <Input
                      placeholder="Enter specify details"
                      labelText="Specify Details"
                      name="department"
                      value={formValues.department.value}
                      onChange={handleChange}
                      error={formValues.department.error}
                      helperText={
                        formValues.department.error &&
                        formValues.department.errorMessage
                      }
                      multiline={true}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <FileField
                      name="emailApproval"
                      onChange={fileHandleChange}
                      labelText="Approval Attachment"
                      multiple={true} // Allow multiple files to be selected
                      files={formValues.marriageCertificate.value}
                      textfieldProps={"Upload Files"} // Props for the text field
                      autoCompleteProps={{ freeSolo: true }} // Props for the Autocomplete component
                      error={formValues.marriageCertificate.error}
                      helperText={
                        formValues.marriageCertificate.error &&
                        formValues.marriageCertificate.errorMessage
                      }
                      setFile={setFile}
                      secondaryText="Upload WhatsApp or email screenshot"
                    />
                  </Grid>
                </div>
              )}

              {!(
                formValues.payGrade.value === "FC04" ||
                formValues.payGrade.value === "FC05"
              ) &&
                formValues.payGrade.value !== "none" && <MouseOverPopover />}
              {/* 
                <>
                  <Grid container>
                    <Grid item xs={10} sm={6}>
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
                            {
                              value: "FC04 or above",
                              label: "FC04 or above",
                            },
                            {
                              value: "Exception cases",
                              label: "Exception cases",
                            },
                          ]}
                        />
                      </FormControl>

                      <p style={{ marginBottom: "0px" }}>
                        Transport Request Allowance *&nbsp;
                      </p>
                    </Grid>
                  </Grid> */}

              {(formValues.payGrade.value === "FC04" ||
                formValues.payGrade.value === "FC05") && (
                <Grid container spacing={{ xs: 3, sm: 3, md: 3 }}>
                  <Grid item xs={12} sm={4} md={4}>
                    <p style={{ marginBottom: "0px" }}>
                      Transport Request Allowance *&nbsp;
                    </p>
                    <FileField
                      name="promotionLetter"
                      onChange={fileHandleChange}
                      labelText="Promotion Letter"
                      multiple={true} // Allow multiple files to be selected
                      files={formValues.marriageCertificate.value}
                      textfieldProps={"Upload Files"} // Props for the text field
                      autoCompleteProps={{ freeSolo: true }} // Props for the Autocomplete component
                      error={formValues.marriageCertificate.error}
                      helperText={
                        formValues.marriageCertificate.error &&
                        formValues.marriageCertificate.errorMessage
                      }
                      setFile={setFile}
                    />
                  </Grid>
                </Grid>
              )}

              {/* {formValues.transportRequestAllowance.value ===
                    "Exception cases" && (
                    <div div>
                      <Grid item xs={12} sm={6} md={6}>
                        <Input
                          placeholder="Enter specify details"
                          labelText="Specify Details"
                          name="department"
                          value={formValues.department.value}
                          onChange={handleChange}
                          error={formValues.department.error}
                          helperText={
                            formValues.department.error &&
                            formValues.department.errorMessage
                          }
                          multiline={true}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <FileField
                          name="emailApproval"
                          onChange={fileHandleChange}
                          labelText="Email Approval Attachment"
                          multiple={true} // Allow multiple files to be selected
                          files={formValues.marriageCertificate.value}
                          textfieldProps={"Upload Files"} // Props for the text field
                          autoCompleteProps={{ freeSolo: true }} // Props for the Autocomplete component
                          error={formValues.marriageCertificate.error}
                          helperText={
                            formValues.marriageCertificate.error &&
                            formValues.marriageCertificate.errorMessage
                          }
                          setFile={setFile}
                        />
                      </Grid>
                    </div>
                  )}
                </> 
              ) : (
                formValues.payGrade.value !== "none" && <MouseOverPopover />
              )}*/}
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

          <StyledContainer fixed>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} sm={6} md={6}>
                <DropDown
                  placeholder="Enter Pay Grade"
                  labelText="Status"
                  name="payGrade"
                  value={formValues.payGrade.value}
                  // onChange={handleChange}
                  // error={formValues.payGrade.error}
                  // helperText={
                  //   formValues.payGrade.error &&
                  //   formValues.payGrade.errorMessage
                  // }
                  options={[
                    {
                      value: "none",
                      label: "Select an option",
                    },
                    { value: "Approve", label: "Approve" },
                    { value: "Reject", label: "Reject" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Input
                  placeholder="Enter name"
                  name="requesterName"
                  value={formValues.requesterName.value}
                  // onChange={handleChange}
                  labelText="Description"
                  error={formValues.requesterName.error}
                  helperText={
                    formValues.requesterName.error &&
                    formValues.requesterName.errorMessage
                  }
                  multiline={true}
                />
              </Grid>
            </Grid>
          </StyledContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default HousingForm;
