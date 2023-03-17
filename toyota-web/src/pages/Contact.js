// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { visuallyHidden } from '@mui/utils';

// function createData(name, calories, fat, carbs, protein) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Donut', 452, 25.0, 51, 4.9),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0),
//   createData('KitKat', 518, 26.0, 65, 7.0),
//   createData('Lollipop', 392, 0.2, 98, 0.0),
//   createData('Marshmallow', 318, 0, 81, 2.0),
//   createData('Nougat', 360, 19.0, 9, 37.0),
//   createData('Oreo', 437, 18.0, 63, 4.0),
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: 'name',
//     numeric: false,
//     disablePadding: true,
//     label: 'Dessert (100g serving)',
//   },
//   {
//     id: 'calories',
//     numeric: true,
//     disablePadding: false,
//     label: 'Calories',
//   },
//   {
//     id: 'fat',
//     numeric: true,
//     disablePadding: false,
//     label: 'Fat (g)',
//   },
//   {
//     id: 'carbs',
//     numeric: true,
//     disablePadding: false,
//     label: 'Carbs (g)',
//   },
//   {
//     id: 'protein',
//     numeric: true,
//     disablePadding: false,
//     label: 'Protein (g)',
//   },
// ];

// function EnhancedTableHead(props) {
//   const { order, orderBy, onRequestSort } =
//     props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>

//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// export default function EnhancedTable() {
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
//   const [dense, setDense] = React.useState(false);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//           >
//             <EnhancedTableHead
//               order={order}
//               orderBy={orderBy}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {stableSort(rows, getComparator(order, orderBy))
//                 .map((row, index) => {

//                   return (
//                     <TableRow
//                       hover
//                       role="checkbox"
//                       tabIndex={-1}
//                       key={row.name}

//                     >

//                       <TableCell
//                         component="th"
//                         scope="row"
//                         padding="none"
//                       >
//                         {row.name}
//                       </TableCell>
//                       <TableCell align="right">{row.calories}</TableCell>
//                       <TableCell align="right">{row.fat}</TableCell>
//                       <TableCell align="right">{row.carbs}</TableCell>
//                       <TableCell align="right">{row.protein}</TableCell>
//                     </TableRow>
//                   );
//                 })}

//             </TableBody>
//           </Table>
//         </TableContainer>

//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </Box>
//   );
// }
import { Formik, Form, Field, useFormikContext } from "formik";
import Input from "../components/form/Input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";
import Textarea from "../components/form/Textarea";
import Radio from "../components/form/Radio";
import { useEffect, useState } from "react";
import { SampleSchema, ContactSchema } from "../validations";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import "../App.css";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
// import Select from "../components/form/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TextField from "@mui/material/TextField";
import "../fonts/hataListesi.css";

const columns = [
  {
    width: 40,
    label: "Bildiren",
    dataKey: "depCode",
  },
  {
    width: 25,
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
    label: "Renk",
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
    width: 25,
    label: "Sicil",
    dataKey: "localId",
    numeric: true,
  },
  {
    width: 150,
    label: "Parca",
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
    width: 25,
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
    label: "Hata",
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
    width: 40,
    label: "Saat",
    dataKey: "formattedDefectHour",
    numeric: true,
  },
  {
    width: 25,
    label: "Hata Türü",
    dataKey: "defectType",
    numeric: true,
  },
  {
    width: 90,
    label: "Hata Sor",
    dataKey: "defrespName",
    numeric: true,
  },
  {
    width: 40,
    label: "Alt Sorumlu",
    dataKey: "altSorumlu",
    numeric: true,
  },
  {
    width: 150,
    label: "NR REASON",
    dataKey: "nrReason",
    numeric: true,
  },
  // {
  //   width: 25,
  //   label: 'Kaydet',
  //   dataKey: 'kaydet',
  //   numeric: true,
  // },
  // {
  //   width: 25,
  //   label: 'İşlem',
  //   dataKey: 'islem',
  //   numeric: true,
  // },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
    stickyHeader 
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed", backgroundColor:"#B9F3FC",
      "& .MuiTableRow-root:hover": {
            backgroundColor: "primary.light"
          }
      }} 
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props}  />,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow >
      {columns.map((column) => (
        <TableCell
          
          className="grid-item header-color"
          key={column.dataKey}
          variant="head"
          align={"center"}
          style={{
            width: column.width,
            borderCollapse: "collapse",
            border: "1px solid black",
          }}
        >
          {column.label}
        </TableCell>
      ))}
      <TableCell
        className="grid-item header-color "
        variant="head"
        style={{
          borderCollapse: "collapse",
          border: "1px solid black",
          width: 60,
        }}
      >
        Kaydet
      </TableCell>
      <TableCell
        className="grid-item header-color"
        variant="head"
        style={{
          borderCollapse: "collapse",
          border: "1px solid black",
          width: 140,
        }}
      >
        İşlem
      </TableCell>
    </TableRow>
  );
}

export default function Contact() {
  const [defectList, setdefectList] = useState([]);

  const [reasonList, setReasonList] = useState([]);
  useEffect(() => {
    //depCode -> bildiren
    //bodyNo -> body
    //vinNo -> Vin No
    //colorExtCode -> renk
    //modelCode-> mdl
    //localId -> sicil
    //partName -> parca
    //spotCode-> spot
    //spotgunName-> gun
    //arcnutboltCode->arc
    //arcnutboltgunName-> arcgun
    //description-> hata
    //defrankCode-> rank
    //formattedDefectHour -> saat
    //defectType -> hata turu
    //defectName -> HATA SOR
    axios
      .get("./db/hataListesiData.json")
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
            nrReasonValue: reason.filter((r) => r.nrId == x.nrReasonId)[0]
              ?.nrReasonDetail,
          };
        });
        setdefectList(hata);
      })
      .catch((err) => console.log(err));
  }, []);
  function rowContent(_index, row) {
    return (
      <React.Fragment>
        {columns.map((column) => (
          <TableCell 
            style={{
              color: (column.dataKey == "colorExtCode" ? row.textColorCode : "") || (column.dataKey == "partName" ? "red": ""),
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
          </TableCell>
        ))}

        <TableCell className="grid-item ">
          <Button
            size="small"
            variant="contained"
            style={{ backgroundColor: "black" }}
            aria-label="save"
          >
            <SaveIcon />
          </Button>
        </TableCell>
        <TableCell className="grid-item  ">
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
            >
              <DeleteIcon />
            </Button>
          </Stack>
        </TableCell>
      </React.Fragment>
    );
  }

  const buttons = [
    <Button variant="contained" size="large" style={{ padding: 40 }}>
      Araç Listesi
    </Button>,
    <Button variant="contained" size="large" style={{ padding: 40 }}>
      Manual Hata
    </Button>,
    <Button variant="contained" size="large" style={{ padding: 40 }}>
      Çoklu Hata
    </Button>,
    <Button variant="contained" size="large" style={{ padding: 40 }}>
      Hata Listesi
    </Button>,
    <Button variant="contained" size="large" style={{ padding: 40 }}>
      Hata Kopya
    </Button>,
    <Button variant="contained" size="large" style={{ padding: 40 }}>
      Çıkış
    </Button>,
  ];
  return (
    <div style={{ height: "100%" }}>
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
        sx={{ backgroundColor: "white", "& button": { m: 1 } }}
      >
        <Box style={{ marginTop: 10, marginLeft: 10 }}>
          <TextField id="outlined-search" label="MONTAJ NO" type="search" />
          <Button
            size="large"
            variant="contained"
            style={{ height: 50, width: 100 }}
          >
            ARA
          </Button>
          <TextField
            style={{ marginTop: 8 }}
            id="outlined-search"
            label="BODY NO"
            type="search"
          />
          <Button
            size="large"
            variant="contained"
            style={{ height: 50, width: 100 }}
          >
            ARA
          </Button>
        </Box>

        <ButtonGroup
          style={{ margin: 20 }}
          orientation="vertical"
          aria-label="vertical contained button group"
        >
          <Button
            variant="contained"
            size="large"
            style={{ margin: 0, height: 40, width: 100 }}
          >
            <ArrowDropUpIcon />
          </Button>
          <Button
            variant="contained"
            size="large"
            style={{ margin: 0, height: 40, width: 100 }}
          >
            <ArrowDropDownIcon />
          </Button>
          <span style={{ marginTop: 30 }} className="teknik-text">
            Teknik Destek
          </span>
        </ButtonGroup>
        {buttons}
      </Box>
    </div>
  );
}
