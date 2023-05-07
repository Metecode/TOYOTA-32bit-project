import { useEffect, useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import axios from "axios";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TextField from "@mui/material/TextField";
import "../fonts/hataListesi.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router";
import translate from "../translation/translate";
import { useAuth } from "../context/AuthContext";

const columns = [
  {
    width: 60,
    label: translate("Bildiren"),
    dataKey: "depCode",
  },
  {
    width: 30,
    label: "Body",
    dataKey: "bodyNo",
    numeric: true,
  },
  {
    width: 20,
    label: "Assy",
    dataKey: "assy",
    numeric: true,
  },
  {
    width: 150,
    label: "Vin No",
    dataKey: "vinNo",
    numeric: true,
  },
  {
    width: 25,
    label: translate("Renk"),
    dataKey: "colorExtCode",
    numeric: true,
  },
  {
    width: 25,
    label: "Mdl",
    dataKey: "modelCode",
    numeric: true,
  },
  {
    width: 40,
    label: translate("Sicil"),
    dataKey: "localId",
    numeric: true,
  },
  {
    width: 150,
    label: translate("Parça"),
    dataKey: "partName",
    numeric: true,
  },
  {
    width: 25,
    label: "Spot",
    dataKey: "spotCode",
    numeric: true,
  },
  {
    width: 30,
    label: "Gun",
    dataKey: "spotgunName",
    numeric: true,
  },
  {
    width: 35,
    label: "Arc",
    dataKey: "arcnutboltCode",
    numeric: true,
  },
  {
    width: 35,
    label: "ArcGun",
    dataKey: "arcnutboltgunName",
    numeric: true,
  },
  {
    width: 100,
    label: translate("Hata"),
    dataKey: "description",
    numeric: true,
  },
  {
    width: 25,
    label: "Rank",
    dataKey: "defrankCode",
    numeric: true,
  },
  {
    width: 50,
    label: translate("Saat"),
    dataKey: "formattedDefectHour",
    numeric: true,
  },
  {
    width: 25,
    label: translate("Hata Türü"),
    dataKey: "defectType",
    numeric: true,
  },
  {
    width: 90,
    label: translate("Hata Sor"),
    dataKey: "defrespName",
    numeric: true,
  },
  {
    width: 40,
    label: translate("Alt Sorumlu"),
    dataKey: "altSorumlu",
    numeric: true,
  },
  {
    width: 150,
    label: "NR REASON",
    dataKey: "nrReason",
    numeric: true,
  },
  {
    width: 60,
    label: translate("Kaydet"),
    dataKey: "kaydet",
    numeric: true,
  },
  {
    width: 140,
    label: translate("İşlem"),
    dataKey: "islem",
    numeric: true,
  },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      stickyHeader
      {...props}
      sx={{
        borderCollapse: "separate",
        tableLayout: "fixed",
        backgroundColor: "#93BFCF",
        "& .MuiTableRow-root:hover": {
          backgroundColor: "#6096B4",
        },
      }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function HataListesi() {
  const [defectList, setdefectList] = useState([]);
  const [reasonList, setReasonList] = useState([]);
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const navigate = useNavigate();
  const { setUser, user } = useAuth();
  const [temp, setTemp] = useState();
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdateClose = () => {
    setOpenUpdate(false);
  };
  useEffect(() => {
    axios
      .get("../../../db/hataListesiData.json")
      .then((res) => {
        let reason = res.data.data[0].nrReasonList.map((x) => {
          return {
            nrId: x.nrId,
            nrReasonDetail: x.nrReasonDetail,
          };
        });
        setReasonList(reason);
        let hata = res.data.data[0].defectList.map((x) => {
          let color = "black";
          if (
            x.rgbCode == "#ff1c23" ||
            x.rgbCode == "#000000" ||
            x.rgbCode == "#6C414F" ||
            x.rgbCode == "#CF0C0C" ||
            x.rgbCode == "#686e92" ||
            x.rgbCode == "#969696" ||
            x.rgbCode == "#5f4769"
          ) {
            color = "white";
          }

          return {
            depCode: x.depCode,
            bodyNo: x.bodyNo,
            vinNo: x.vinNo,
            rgbCode: x.rgbCode,
            colorExtCode: x.colorExtCode,
            modelCode: x.modelCode,
            localId: x.localId,
            partName: x.partName,
            spotCode: x.spotCode,
            spotgunName: x.spotgunName,
            arcnutboltCode: x.arcnutboltCode,
            arcnutboltgunName: x.arcnutboltgunName,
            description: x.description,
            defrankCode: x.defrankCode,
            formattedDefectHour: x.formattedDefectHour,
            defectType: x.defectType,
            defrespName: x.defrespName,
            textColorCode: color,
            nrReasonId: x.nrReasonId,
            disable: true,
            nrReasonValue: reason.filter((r) => r.nrId == x.nrReasonId)[0]
              ?.nrReasonDetail,
          };
        });
        setdefectList(hata);
      })
      .catch((err) => console.log(err));

  }, []);
 
  const sorting = (key) => {
    setdefectList((data) => {
      const dataToSort = [...data];
      let newData = [];
      switch (key) {
        case columns[1].dataKey:
          newData = dataToSort.sort(
            (a, b) => Number(a.bodyNo) - Number(b.bodyNo)
          );
          break;
        case columns[0].dataKey:
          newData = dataToSort.sort((a, b) =>
            a.depCode?.toString().localeCompare(b.depCode.toString())
          );
          break;
        case columns[6].dataKey:
          newData = dataToSort.sort(
            (a, b) => Number(a.localId) - Number(b.localId)
          );
          break;
        default:
          return dataToSort;
      }
      console.log(data);
      return newData;
    });
  };
  function fixedHeaderContent() {
    return (
      <TableRow>
        {columns.map((column) => (
          <TableCell
            onClick={(e) => sorting(column.dataKey)}
            className="grid-item header-color"
            key={column.dataKey}
            variant="head"
            align={"center"}
            style={{
              width: column.width,
              borderCollapse: "collapse",
              border: "1px solid grey",
              backgroundColor: "#93BFCF",
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  const handleDelete = (columnIndex) => {
    setdefectList((defectList) =>
      defectList.filter((_, index) => index !== columnIndex)
    );
    setOpen(true);
  };
  const handleUpdate = (columnIndex) => {
    let updatedList = defectList.map((item) => {
      if (item.vinNo == columnIndex) {
        return { ...item, nrReasonValue: temp, disable: true };
      }
      return item;
    });
    setdefectList(updatedList);
    setOpenUpdate(true);
  };

  const onChangeReason = (columnIndex, event) => {
    const reason = event.target.value;
    setTemp(reason);
    let updatedList = defectList.map((item) => {
      if (item.vinNo == columnIndex) {
        return { ...item, disable: false };
      }
      return item;
    });

    setdefectList(updatedList);
  };
  const logoutHandle = () => {
    navigate(`../../`);
    setUser(false);
  };

  function rowContent(_index, row) {
    return (
      <React.Fragment>
        {columns.map((column) => (
          <TableCell
            style={{
              color:
                (column.dataKey == "colorExtCode" ? row.textColorCode : "") ||
                (column.dataKey == "partName" ? "red" : ""),
              background: column.dataKey == "colorExtCode" ? row.rgbCode : "",
            }}
            className={`grid-item color ${
              column.dataKey == "colorExtCode" ? "button" : " "
            }`}
            key={column.dataKey}
            align={"left"}
          >
            {column.dataKey == "nrReason" ? (
              <Select
                size="small"
                className="break"
                labelId="demo-select-small"
                id="demo-select-small"
                style={{ maxWidth: 150 }}
                value={row.nrReasonValue}
                onChange={(e) => onChangeReason(row.vinNo, e)}
              >
                {console.log(row.nrReasonValue, row.nrReasonId)}
                {reasonList.map((option, key) => (
                  <MenuItem value={option.nrReasonDetail} key={key}>
                    {option.nrReasonDetail}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              row[column.dataKey]
            )}
            {column.dataKey == "kaydet" ? (
              <Button
                size="small"
                disabled={row.disable}
                variant="contained"
                style={{ backgroundColor: "black" }}
                sx={{
                  "&.Mui-disabled": {
                    background: "#eaeaea",
                    color: "#c0c0c0",
                  },
                }}
                aria-label="save"
                onClick={(e) => handleUpdate(row.vinNo, e)}
              >
                <SaveIcon />
              </Button>
            ) : (
              ""
            )}
            {column.dataKey == "islem" ? (
              <Stack direction="row" spacing={2}>
                <Button
                  size="small"
                  variant="contained"
                  color="success"
                  aria-label="edit"
                >
                  <EditIcon />
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  aria-label="delete"
                  onClick={(e) => handleDelete(_index, e)}
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            ) : (
              ""
            )}
          </TableCell>
        ))}
      </React.Fragment>
    );
  }

  const style = {
    color: "#000000",
    backgroundColor: "#93BFCF",
    "&:hover": {
      color: "#000000",
      backgroundColor: "#6096B4",
    },
  };

  const buttons = [
    <Button sx={style} variant="contained" size="large" style={{ padding: 20 }}>
      {translate("ARAÇ LİSTESİ")}
    </Button>,
    <Button sx={style} variant="contained" size="large" style={{ padding: 20 }}>
      {translate("MANUEL HATA")}
    </Button>,
    <Button sx={style} variant="contained" size="large" style={{ padding: 20 }}>
      {translate("ÇOKLU HATA")}
    </Button>,
    <Button sx={style} variant="contained" size="large" style={{ padding: 20 }}>
      {translate("HATA LİSTESİ")}
    </Button>,
    <Button sx={style} variant="contained" size="large" style={{ padding: 20 }}>
      {translate("HATA KOPYA")}
    </Button>,
    <Button
      sx={style}
      variant="contained"
      size="large"
      style={{ padding: 20, width: 150 }}
      onClick={logoutHandle}
    >
      {translate("ÇIKIŞ")}
    </Button>,
  ];
  return (
    <div style={{ height: "100%", backgroundColor: "#EEE9DA" }}>
      <Paper
        style={{
          height: 570,
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid black",
        }}
      >
        <TableVirtuoso
          data={defectList}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
        />
      </Paper>
      <Box className="total-row">
        <span style={{ marginRight: 5 }}>Total Row: {defectList.length}</span>
      </Box>

      <Box
        style={{ display: "flex", height: "100%" }}
        sx={{
          background: "linear-gradient(#EEE9DA,#BDCDD6);",
          "& button": { m: 1 },
        }}
      >
        <Box
          style={{
            marginTop: 10,
            marginLeft: 10,
            display: "inline-block",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box component="form">
            <TextField
              style={{ marginTop: 8 }}
              id="outlined-search"
              label={translate("MONTAJ NO")}
              type="search"
            />
            <Button
              sx={style}
              size="large"
              variant="contained"
              style={{ height: 50, width: 100 }}
            >
              {translate("ARA")}
            </Button>
          </Box>
          <Box component="form">
            <TextField
              sx={{
                "& fieldset.MuiOutlinedInput-notchedOutline": {
                  borderColor: "#93BFCF",
                },
                "&hover fieldset.MuiOutlinedInput-notchedOutline": {
                  borderColor: "#93BFCF",
                },
              }}
              style={{ marginTop: 8 }}
              id="outlined-search"
              label={translate("BODY NO")}
              type="search"
            />
            <Button
              sx={style}
              size="large"
              variant="contained"
              style={{ height: 50, width: 100 }}
            >
              {translate("ARA")}
            </Button>
          </Box>
        </Box>

        <ButtonGroup
          className="button-group"
          style={{ margin: 20 }}
          orientation="vertical"
          aria-label="vertical contained button group"
        >
          <Button
            sx={style}
            variant="contained"
            size="large"
            style={{ margin: 0, height: 40, width: 100 }}
          >
            <ArrowDropUpIcon />
          </Button>
          <Button
            sx={style}
            variant="contained"
            size="large"
            style={{ margin: 0, height: 40, width: 100 }}
          >
            <ArrowDropDownIcon />
          </Button>
          <span style={{ marginTop: 30 }} className="teknik-text">
            {translate("Teknik Destek")}
          </span>
        </ButtonGroup>
        {buttons}
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openUpdate}
        autoHideDuration={6000}
        onClose={handleUpdateClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {translate("Başarılı bir şekilde hata kaydı güncellendi")}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {translate("The record has been deleted successfully!")}
        </Alert>
      </Snackbar>
    </div>
  );
}
