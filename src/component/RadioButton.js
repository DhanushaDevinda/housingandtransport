import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Label from "./Label";
import { styled } from "@mui/material/styles";

const StyledRadioGroup = styled(RadioGroup)(
  ({ theme }) => `
    // justify-content: space-between;
  `
);

const RadioButton = ({ options, labelText }) => {
  console.log("🚀 ~ RadioButton ~ options:", options);
  return (
    <div>
      <Label>{labelText}</Label>
      <StyledRadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {options != undefined &&
          options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
      </StyledRadioGroup>
    </div>
  );
};

export default RadioButton;
