import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const AlignedTable = () => {
  const rows = [
    { type: "4 Bed", Availblity: "1 Bed",  price: 28, facilities: "Ac attached batoorm/TV" },
    { type: "2 Bed", Availblity: "2 Bed", price: 34, facilities: "Ac attached batoorm/TV" },
    { type: "3 Bed", Availblity: "1 Bed", price: 29, facilities: "Ac attached batoorm/TV" },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                padding: "8px", // Consistent padding
                width: "20%", // Set explicit width for proper alignment
              }}
            >
              Room Type
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                padding: "8px",
                width: "40%",
              }}
            >
              Available
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                padding: "8px",
                width: "20%",
              }}
            >
              Price
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
                padding: "8px",
                width: "20%",
              }}
            >
              Facilities
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow key={index}>
              <TableCell sx={{ textAlign: "center", padding: "8px", width: "20%" }}>
                {row.type}
              </TableCell>
              <TableCell sx={{ textAlign: "center", padding: "8px", width: "40%" }}>
                {row.Availblity}
              </TableCell>
              <TableCell sx={{ textAlign: "center", padding: "8px", width: "20%" }}>
                {row.price}
              </TableCell>
              <TableCell sx={{ textAlign: "center", padding: "8px", width: "20%" }}>
                {row.facilities}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AlignedTable;
