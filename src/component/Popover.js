import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
const StyledDiv = styled("div")({
  display: "flex",
  alignItems: "center",
});

const MouseOverPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <StyledDiv>
        <p>Transport Request Allowance&nbsp;</p>
        <InfoOutlinedIcon
          color="info"
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        />
      </StyledDiv>

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1, color: theme.palette.info.main }}>
          Grade FC03 and below staff members are not eligible for a transport
          allowance. For any exception cases, please visit Room No. 12, Employee
          Facilities and Services Office, during weekdays from 7:00 AM to 4:00
          PM.
        </Typography>
      </Popover>
    </div>
  );
};
export default MouseOverPopover;
