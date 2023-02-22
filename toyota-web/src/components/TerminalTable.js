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
import Badge from "@mui/material/Badge";

export default function TerminalTable() {
  const [terminals, setTerminals] = useState([]);

  useEffect(() => {
    axios
      .get("./db/terminal.json")
      .then((res) => {
        let data = res.data.data.map((item) => {
          return {
            depCode: `(${item.depCode})  ${item.depName}`,
            filterBaseds: item.filterBaseds.map((x) => {
              return {
                filterCode: x.filterCode,
                linkCount: x.linkCount,
              };
            }),
          };
        });
        setTerminals(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
              <TableCell
                key="bolum"
                align="center"
                style={{ top: 57, minWidth: 50 }}
              >
                Bölüm Bazında
              </TableCell>
              <TableCell
                key="filtre"
                align="center"
                style={{ top: 57, minWidth: 250 }}
              >
                Filtre bazinda
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {terminals.map((terminal) => {
              return (
                <TableRow hover role="checkbox" key={terminal.depName}>
                  <TableCell className="grid-item" key="bolumFiltre">
                    {terminal.depCode}
                  </TableCell>

                  {terminal.filterBaseds.map((filter) => {
                    return (
                      <TableCell className="grid-item" key="filtreBazinda">
                        <Badge
                          badgeContent={filter.linkCount}
                          invisible={filter.linkCount === 1}
                          color="primary"
                        >
                          <Button variant="outlined">
                            {filter.filterCode}
                          </Button>
                        </Badge>
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
