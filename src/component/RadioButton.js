import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Label from "./Label";
import { styled } from "@mui/material/styles";
import { red } from "../const";

const StyledRadioGroup = styled(RadioGroup)(
  ({ theme }) => `
    // justify-content: space-between;
  `
);

const RadioButton = ({
  options,
  error,
  labelText,
  helperText,
  onChange,
  label,
  name,
  value,
}) => {
  return (
    <div>
      <Label error={error}>{`${labelText} *`}</Label>
      <StyledRadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        onChange={onChange}
        name={name}
      >
        {options !== undefined &&
          options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
      </StyledRadioGroup>
      {error && <span style={{ color: red[500] }}>{helperText}</span>}
    </div>
  );
};

export default RadioButton;
