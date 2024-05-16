import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Label from "../component/Label";
import { blue, grey, red } from "../const";
import { styled } from "@mui/material/styles";
import "../App.css";
const StyledDesktopDatePicker = styled(DesktopDatePicker)(
  ({ theme, error }) => `
      width: -webkit-fill-available !important; 
      
      .MuiOutlinedInput-root{
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 8px 12px;
      border-radius: 8px;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${error ? red[200] : grey[200]};

      &:hover {
        border-color: ${blue[400]};
       
      }
  
      &:focus {
        box-shadow: 0 0 0 3px ${
          theme.palette.mode === "dark" ? blue[600] : blue[200]
        };
      }
  
     }
    }
    .MuiOutlinedInput-notchedOutline {
      border: none !important;
    }
    .MuiInputBase-input{
      padding: 0px !important;
    }
    `
);

const DatePicker = ({
  labelText,
  error,
  name,
  onChange,
  value,
  helperText,
}) => {
  return (
    <div>
      <Label error={error}>{`${labelText} *`}</Label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDesktopDatePicker
          defaultValue={dayjs(value)}
          onChange={(e) => console.log(dayjs(e))}
          name={name}
          error={error}
        />
      </LocalizationProvider>
      {error && <span style={{ color: red[500] }}>{helperText}</span>}
    </div>
  );
};

export default DatePicker;
