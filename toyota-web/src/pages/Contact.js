
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
import Select from "../components/form/Select";
import Radio from "../components/form/Radio";
import { useEffect } from "react";
import { SampleSchema, ContactSchema } from "../validations";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import "../App.css";
import axios from "axios";



const sample = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
  ['Gingerbread', 356, 16.0, 49, 3.9],
  ['Gingerbread', 356, 16.0, 49, 3.9],
  ['Gingerbread', 356, 16.0, 49, 3.9],
  ['Gingerbread', 356, 16.0, 49, 3.9],

];

function createData(id, dessert, calories, fat, carbs, protein) {
  return { id, dessert, calories, fat, carbs, protein };
}

const columns = [
  {
    width: 25,
    label: 'Bildiren',
    dataKey: 'bildiren',
  },
  {
    width: 25,
    label: 'Body',
    dataKey: 'body',
    numeric: true,
  },
  {
    width: 15,
    label: 'Assy',
    dataKey: 'assy',
    numeric: true,
  },
  {
    width: 25,
    label: 'Vin No',
    dataKey: 'vin No',
    numeric: true,
  },
  {
    width: 25,
    label: 'Renk',
    dataKey: 'renk',
    numeric: true,
  },
  {
    width: 25,
    label: 'Mdl',
    dataKey: 'mdl',
    numeric: true,
  },
  {
    width: 25,
    label: 'Sicil',
    dataKey: 'sicil',
    numeric: true,
  },
  {
    width: 100,
    label: 'Parca',
    dataKey: 'parca',
    numeric: true,
  },
  {
    width: 25,
    label: 'Spot',
    dataKey: 'spot',
    numeric: true,
  },
  {
    width: 25,
    label: 'Gun',
    dataKey: 'gun',
    numeric: true,
  },
  {
    width: 25,
    label: 'Arc',
    dataKey: 'arc',
    numeric: true,
  },
  {
    width: 25,
    label: 'ArcGun',
    dataKey: 'arcGun',
    numeric: true,
  },
  {
    width: 100,
    label: 'Hata',
    dataKey: 'hata',
    numeric: true,
  },
  {
    width: 25,
    label: 'Rank',
    dataKey: 'rank',
    numeric: true,
  },
  {
    width: 25,
    label: 'Saat',
    dataKey: 'saat',
    numeric: true,
  },
  {
    width: 25,
    label: 'Hata Türü',
    dataKey: 'hata turu',
    numeric: true,
  },
  {
    width: 25,
    label: 'Hata Türü',
    dataKey: 'hata turu',
    numeric: true,
  },
  {
    width: 25,
    label: 'Hata Sor',
    dataKey: 'hata sor',
    numeric: true,
  },
  {
    width: 40,
    label: 'Alt Sorumlu',
    dataKey: 'alt sorumlu',
    numeric: true,
  },
  {
    width: 50,
    label: 'NR REASON',
    dataKey: 'nr reason',
    numeric: true,
  },
  {
    width: 25,
    label: 'Kaydet',
    dataKey: 'kaydet',
    numeric: true,
  },
  {
    width: 25,
    label: 'İşlem',
    dataKey: 'islem',
    numeric: true,
  },
];

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
        className="grid-item "
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width,
            borderCollapse: "collapse",
            border: "1px solid black", }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
        className="grid-item "
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function Contact() {
  useEffect(() => {
    axios
      .get("./db/hataListesiData.json")
      .then((res) => {
        let data = res.data.data.map((item) => {
          return {
            nrReasonList: item.nrReasonList.map((x) => {
              return {
                nrId: x.nrId,
                nrReasonDetail: x.nrReasonDetail,
              };
            }),
          };
        });
        console.log(data);
        // setTerminals(data);
      })
      .catch((err) => console.log(err));
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
        let hata = res.data.data.map((item) => {
          return {
            defectList: item.defectList.map((x) => {
              return {
                depCode: x.depCode,
                bodyNo: x.bodyNo,
                vinNo: x.vinNo,
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
                defectName: x.defectName,
              };
            }),
          };
        });
        console.log(hata);
      })
      .catch((err) => console.log(err));
  }, []);
  //  useEffect(() => {
  //   axios
  //     .get("./db/hataListesiData.json")
  //     .then((res) => {
  //       let data = res.data.data.map((item) => {
  //         return {
  //           nrReasonList: item.nrReasonList.map((x) => {
  //             return {
  //               nrId: x.nrId,
  //               nrReasonAbb: x.nrReasonAbb,
  //               nrReasonDetail:x.nrReasonDetail,
  //             };
  //           }),
  //         };
  //       });
  //       console.log(data);
  //       // setTerminals(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div>
      Hata Data List

    <Paper style={{ height: 480, width: '100%', borderCollapse: "collapse",
            border: "1px solid black", }}>
      <TableVirtuoso 
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
    </div>
  );
}
// const AutoSubmitCode = () => {
//   const { values, submitForm } = useFormikContext();
//   useEffect(() => {
//     if (values.code.length === 6) {
//       submitForm();
//     }
//   }, [values]);
//   return null;
// };

// export default function Contact() {
//   return (
    
//   );
// }

{/* <Formik
  initialValues={{
    code: "",
  }}
  onSubmit={(values) => {
    console.log(values);
  }}
  validationSchema={SampleSchema}
>
  {({ values }) => (
    <Form className="hidden">
      <Input label="Kodu Girin" name="code"></Input> 
      <button type="submit">Gonder</button>
      <AutoSubmitCode></AutoSubmitCode>
    </Form>
  )}
</Formik>
<Formik
  initialValues={{
    name: "",
    about: "",
    accept: false,
    gender: 1,
    avatar: "",
    skills: [],
    level: "sr",
  }}
  onSubmit={(values) => {
    console.log(values);
  }}
  validationSchema={ContactSchema}
>
  {({ values }) => (
    <Form className="p-6 m-4 shadow=lg grid gap-y-4 border rounded p-4">
      <Input label="ad-soyad" name="name"/> 
      <Textarea label="Hakkimda" rows={5} name="about" /> 
      <Checkbox label="Kurallari kabul ediyorum!" name="accept" />
      <Select
        label="Cinsiyet"
        name="gender"
        options={[
          { key: 1, value: "Kadin" },
          { key: 2, value: "Erkek" },
        ]}
      />{" "}
      
      <Field component="select" name="skills" multiple={true}>
        <option value="css">css</option>
        <option value="js">js</option>
        <option value="php">php</option>
        <option value="c++">c++</option>
      </Field>
      <File label="Avatar" name="avatar" />
      <Radio
        label="Seviyenizi secin"
        name="level"
        options={[
          { key: "jr", value: "Jr. Developer" },
          { key: "sr", value: "Sr. Developer" },
          { key: "ninja", value: "Ninja" },
        ]}
      />
      <button
        className="h-10 rounded bg-black text-sm text-white px-5"
        type="submit"
      >
        Gonder
      </button>
    </Form>
  )}
</Formik> */}

