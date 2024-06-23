import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { grey } from "../const";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import Box from "@mui/material/Box";

const StyledContainer = styled(Container)(
  ({ theme }) => `
  
    @media (min-width: ${theme.breakpoints.values.md}px) {
      box-shadow: 0 0 6px 6px ${grey[300]};
    border-radius: 16px;
    margin:24px 0px;
  
  
    }
    padding: 24px;`
);

function createData(
  ERP,
  requesterName,
  accommodationLocation,
  requestType,
  RequestStatus
) {
  return {
    ERP,
    requesterName,
    accommodationLocation,
    requestType,
    RequestStatus,
  };
}

const rows = [
  createData("23453", "Nimal", "Jabel Ali", "Transport Request", "Approve"),
  createData(
    "23123",
    "Nimal",
    "Accommodation 3",
    "Housing and Transport Request",
    "Approve"
  ),
  createData(
    "25312",
    "Nimal",
    "Accommodation 4",
    "Transport Request",
    "Reject"
  ),
  createData("12312", "Nimal", "Accommodation 4", "Housing Request", "Approve"),
  createData("12312", "Nimal", "Accommodation 5", "Housing Request", "Reject"),
];

export default function BasicTable() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }} // Ensure the container takes up the full viewport height
    >
      <StyledContainer fixed>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ERP</TableCell>
                <TableCell align="left">Requester Name</TableCell>
                <TableCell align="left">Accommodation Location </TableCell>
                <TableCell align="left">Request Type</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="center">Download</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.ERP}
                  </TableCell>
                  <TableCell align="left">{row.requesterName}</TableCell>

                  <TableCell align="left">
                    {row.accommodationLocation}
                  </TableCell>
                  <TableCell align="left">
                    <Box
                      key={row.requestType}
                      sx={{
                        padding: "4px",
                        lineHeight: "15px",
                        borderRadius: "2px",
                        textAlign: "center",
                      }}
                      style={{
                        backgroundColor: grey[800],
                        color: grey[50],
                      }}
                    >
                      {row.requestType}
                    </Box>
                  </TableCell>
                  <TableCell align="left">{row.RequestStatus}</TableCell>
                  <TableCell align="center">
                    <DownloadForOfflineIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledContainer>
    </Grid>
  );
}
