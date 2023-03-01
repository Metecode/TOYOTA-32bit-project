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
import {Routes, Route, useNavigate} from 'react-router-dom';

import { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";

export default function TerminalTable() {
  const [terminals, setTerminals] = useState([]);
  const navigate = useNavigate();

  const navigateToContacts = (filterCode) => {
    navigate('/auth/login', {state:{filterCode}});
  };
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
    <Paper sx={{ width: "100%", backgroundColor:"#B9F3FC" }}>
      <TableContainer
        sx={{ maxHeight: "100%" }}
        // style={{ overflowX: "initial" }}
      >
        <Table
          style={{
            width: "auto",
            tableLayout: "auto",
            borderCollapse: "collapse",
            border: "1px solid black",
          }}
          stickyHeader
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow >
              <TableCell
                style={{ borderBottom: "1px solid black",backgroundColor:"#B9F3FC"}}
                align="center"
                colSpan={14}
                position="sticky"
              >
                Tum Terminaller
              </TableCell>
            </TableRow>
            <TableRow style={{ width: "100%" }}>
              <TableCell
                className="grid-item "
                key="bolum"
                align="center"
                style={{
                  top: 57,
                  minWidth: 150,
                  borderBottom: "1px solid black",
                  backgroundColor:"#B9F3FC"
                }}
              >
                Bölüm Bazında
              </TableCell>
              <TableCell
                colSpan={13}
                className="grid-item"
                key="filtre"
                align="center"
                style={{
                  top: 57,
                  width: "100%",
                  borderBottom: "1px solid black",
                  backgroundColor:"#B9F3FC"
                }}
              >
                Filtre bazinda
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {terminals.map((terminal) => {
              return (
                <TableRow
                  style={{ borderBottom: "1px solid black", backgroundColor:"#B9F3FC" }}
                  hover
                  role="checkbox"
                  key={terminal.depName}
                >
                  <TableCell
                    style={{ minWidth: 150, borderBottom: "1px solid black", backgroundColor:"#B9F3FC" }}
                    className="grid-item "
                    key="bolumFiltre"
                  >
                    {terminal.depCode}
                  </TableCell>

                  {terminal.filterBaseds.map((filter) => {
                    return (
                      <TableCell
                        style={{
                          width: "100%",
                          borderBottom: "1px solid black",
                        }}
                        key="filtreBazinda"
                      >
                        <Badge
                          badgeContent={filter.linkCount}
                          invisible={filter.linkCount === 1}
                          color="primary"
                        >
                          <Button variant="outlined"  onClick={()=>{
                            navigateToContacts(filter.filterCode)
                          }} >
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
