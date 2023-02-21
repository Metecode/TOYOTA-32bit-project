import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";

const columns = [
  { id: "name", label: "Bolum Bazinda", minWidth: 50 },
  { id: "code", label: "Filtre Bazinda", minWidth: 250 },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN ", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function TerminalTable() {
  const [terminals, setTerminals] = useState([]);

  useEffect(() => {
    axios
      .get("./db/terminal.json")
      .then((res) => {
        res.data.data.map((item) => {
          terminals.push(
            `(${item.depCode}) ${item.depName}  `
          );
        });
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(terminals);
  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer
        sx={{ maxHeight: "100%" }}
        style={{ overflowX: "initial" }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5} position="sticky">
                Tum Terminaller
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        className="grid-item"
                        key={column.id}
                        align={column.align}
                      >
                        <Button variant="outlined">
                          {" "}
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </Button>
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
// `(${res.data.data[0].depCode}) ${res.data.data[0].depName} `
