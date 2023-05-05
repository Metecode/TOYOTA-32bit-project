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
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Badge from "@mui/material/Badge";
import translate from "../translation/translate";
import { AppContext } from "../context";
import LangSwitcher from "../components/LangSwitcher";

export default function TerminalTable() {
  const [terminals, setTerminals] = useState([]);
  const navigate = useNavigate();
  const navigateToContacts = (filterCode, linkCount, depCode, termName) => {
    navigate(`/auth/login/${depCode}/${filterCode}`, {
      state: { filterCode, linkCount, depCode, termName },
    });
  };
  useEffect(() => {
    axios
      .get("./db/terminal.json")
      .then((res) => {
        let data = res.data.data.map((item) => {
          return {
            depCode: `(${item.depCode})  ${item.depName}`,
            pathCode: `${item.depCode}`,
            filterBaseds: item.filterBaseds.map((x) => {
              return {
                filterCode: x.filterCode,
                linkCount: x.linkCount,
                termName: x.termName,
              };
            }),
          };
        });
        setTerminals(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <LangSwitcher />
      <Paper sx={{ width: "100%", backgroundColor: "#93BFCF" }}>
        <TableContainer sx={{ maxHeight: "100%" }}>
          <Table
            style={{
              width: "auto",
              tableLayout: "auto",
              borderCollapse: "collapse",
              border: "1px solid grey",
              boxShadow: "0 15px 25px rgba(0,0,0,.6)",
            }}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    borderBottom: "1px solid grey",
                    backgroundColor: "#93BFCF",
                    color: "#c42929",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                  align="center"
                  colSpan={14}
                  position="sticky"
                >
                  {translate("TÜM TERMİNALLER")}
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
                    borderBottom: "1px solid grey",
                    backgroundColor: "#93BFCF",
                    color: "#c42929",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  {translate("BÖLÜM BAZINDA")}
                </TableCell>
                <TableCell
                  colSpan={13}
                  className="grid-item"
                  key="filtre"
                  align="center"
                  style={{
                    top: 57,
                    width: "100%",
                    borderBottom: "1px solid grey",
                    backgroundColor: "#93BFCF",
                    color: "#c42929",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  {translate("FİLTRE BAZINDA")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {terminals.map((terminal) => {
                return (
                  <TableRow
                    style={{
                      borderBottom: "1px solid grey",
                      backgroundColor: "#93BFCF",
                    }}
                    hover
                    role="checkbox"
                    key={terminal.depName}
                  >
                    <TableCell
                      style={{
                        minWidth: 150,
                        borderBottom: "1px solid grey",
                        backgroundColor: "#93BFCF",
                        color: "#c42929",
                      }}
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
                            borderBottom: "1px solid grey",
                          }}
                          key="filtreBazinda"
                        >
                          <Badge
                            badgeContent={filter.linkCount}
                            invisible={filter.linkCount === 1}
                            sx={{
                              "& .MuiBadge-badge": {
                                color: "white",
                                backgroundColor: "#c42929",
                              },
                            }}
                          >
                            <Button
                              sx={{
                                color: "#000000",
                                "&:hover": {
                                  color: "#BDCDD6",
                                  border: "1px solid black",
                                },
                                border: "1px solid black",
                                fontWeight: "bold",
                              }}
                              variant="outlined"
                              onClick={() => {
                                navigateToContacts(
                                  filter.filterCode,
                                  filter.linkCount,
                                  terminal.pathCode,
                                  filter.termName
                                );
                              }}
                            >
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
    </>
  );
}
