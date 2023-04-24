import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HataHeaderBar from "./ErrorHeaderBar";
import CarMapper from "./CarMapper";
import axios from "axios";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import "../../fonts/hataGiris.css";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
  useReducer,
} from "react";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Select from "../../components/form/Select.js";
import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import Keyboard from "react-simple-keyboard";
import Grid from "@mui/material/Grid";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { useFormik, Formik, Form } from "formik";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LargeFont from "./LargeFont";
import { useNavigate, useLocation } from "react-router";
import VirtualKeyboard from "../../components/VirtualKeyboard/VirtualKeyboard";
import translate from "../../translation/translate";

const drawerWidth = 270;
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function PermanentDrawerRight() {
  const [info, setInfo] = useState([]);
  const [isHide, setIsHide] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);
  const [defect, setDefect] = useState("");
  const [open, setOpen] = useState(false);
  const [defectClass, setDefectClass] = useState({});
  const [defectRes, setDefectRes] = useState({});
  const [defectExit, setDefectExit] = useState({});
  const [defectRdd, setDefectRdd] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [coordxy, setCoordxy] = useState("");
  const [color, setColor] = useState(false);
  const mainPicElement = useRef();
  const largeFontElement = useRef();
  const [focus, setFocus] = useState();
  const { state } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();
  const [operation, setOperation] = useState();
  const [responsible, setResponsible] = useState();
  const [explanation, setExplanation] = useState();
  const [numPad, setNumPad]=useState(false);

  const keyboard = useRef(null);

  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
    setTimeout(() => handleClose(), 3000);
    setTimeout(() => setAlert(true), 3000);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const alertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };
  const logout = () => {
    navigate(`../`);
  };
  const audio = new Audio("/assets/sound/AlertSirenSound.mp3");
  audio.loop = true;
  let timer = null;
  const hide = (isHide) => {
    setIsHide(isHide);
  };

  const defects = (selectedValue) => {
    setSelectedValue(selectedValue);
    setShow(true);
  };

  const defectsName = (defect) => {
    setDefect(defect);
  };
  const coord = (coordxy) => {
    setCoordxy(coordxy);
  };
  const handleMouseMove = () => {
    if (timer) clearTimeout(timer);
    setColor(false);
    audio.pause();
    timer = setTimeout(() => {
      setColor(!color);
      audio.loop = true;
      audio.play();
    }, 8000);
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timer) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    axios
      .get("../../../../../db/headerData.json")
      .then((res) => setInfo(res.data.data[0]))
      .catch((err) => console.log(err));
  }, []);

  const defectLog = () => {
    axios
      .get(`../../../../../db/hataDetay.json`)
      .then((res) => {
        let partDefect = res.data.requiredFieldsByInspectionDTOList
          .filter((c) => c.englishUserName.includes("Defect Class"))
          .map((c) =>
            c.errDetailComboBoxValueDTOList.map((x) => {
              return {
                dataCode: x.dataCode,
                dataValue: x.dataValue,
              };
            })
          );
        setDefectClass(partDefect);
        let classDefect = res.data.requiredFieldsByInspectionDTOList
          .filter((c) => c.englishUserName.includes("Defect Responsibles"))
          .map((c) =>
            c.errDetailComboBoxValueDTOList.map((x) => {
              return {
                dataCode: x.dataCode,
                dataValue: x.dataValue,
              };
            })
          );
        setDefectRes(classDefect);
        let exitDefect = res.data.requiredFieldsByInspectionDTOList
          .filter((c) => c.englishUserName.includes("Exit Department"))
          .map((c) =>
            c.errDetailComboBoxValueDTOList.map((x) => {
              return {
                dataCode: x.dataCode,
                dataValue: x.dataValue,
              };
            })
          );
        setDefectExit(exitDefect);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    
  }, [focus]);
  const parseInputs = (value, setFieldValue, setFieldTouched) => {
    switch (focus) {
      case "appliedOperation":
        setOperation(value);
        setFieldValue("appliedOperation", value, true);
        setTimeout(() => setFieldTouched("appliedOperation", true), 1);
        break;
      case "subResponsible":
        setResponsible(value);
        setFieldValue("subResponsible", value, true);
        setTimeout(() => setFieldTouched("subResponsible", true), 1);

        break;
      case "explanation":
        setExplanation(value);
        setFieldValue("explanation", value, true);
        setTimeout(() => setFieldTouched("explanation", true), 1);
        break;
    }
  };
  const onChangeInput = (event, setFieldValue, setFieldTouched) => {
    if (event == "" || event == "NaN") {
      if (event == "") {
        parseInputs("");
      }
      return;
    }
    if (!event.target) {
      const t = event;
      event = { target: {} };
      event.target.value = t;
    }
    const input = event.target.value;
    parseInputs(input, setFieldValue, setFieldTouched);
    keyboard?.current.setInput(input);
  };

  const rdd = () => {
    axios
      .get(`../../../../../db/hataDetay2.json`)
      .then((res) => {
        let rddDefect = res.data;
        setDefectRdd(rddDefect);
      })
      .catch((err) => console.log(err));
  };

  const passFirstPic = () => {
    mainPicElement.current.changePic();
  };
  const openLargeFont = () => {
    largeFontElement.current.openDialog();
  };
  useEffect(() => {
    defectLog();
    rdd();
  }, []);

  return (
    <Box sx={{ display: "flex",backgroundColor:"#919394" }}>
      <CssBaseline />
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth="fullWidth"
      >
        <DialogTitle sx={{backgroundColor:"#93BFCF"}} style={{ fontWeight: "bold" }}>
          {info.companyName}
        </DialogTitle>
        <DialogContent sx={{backgroundColor:"#93BFCF"}}>
          <DialogContentText></DialogContentText>
          <Formik
            initialValues={{
              defectResponsibles: "",
              defectClass: "",
              defectExit: "",
              appliedOperation: "",
              subResponsible: "",
              explanation: "",
              rdd: "",
              coordXY: { coordxy },
            }}
            onSubmit={(values) => {
              console.log(values);
              setLoading(true);
              setTimeout(() => setLoading(false), 3000);
              setTimeout(() => handleClose(), 3000);
              setTimeout(() => setAlert(true), 3000);
              setTimeout(() => passFirstPic(), 3000);
              setTimeout(() => setIsHide(true), 3000);
            }}
          >
            {({ values,setFieldValue,setFieldTouched }) => (
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Grid container spacing={20}>
                    <Grid item xs={4}>
                      <Select
                        label={translate("Hata Sorumlusu")}
                        name="defectResponsibles"
                        options={defectRes[0].map((option) => {
                          return {
                            key: option.dataValue,
                            value: option.dataValue,
                          };
                        })}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={translate("Harigami")}
                      />
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label={translate("Sık Gelen Hata")}
                      />

                      <Select
                        dropDown={false}
                        label="RDD"
                        name="rdd"
                        options={defectRdd.map((option) => {
                          return {
                            key: option.nrReasonDetail,
                            value: option.nrReasonDetail,
                          };
                        })}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Select
                        dropDown={false}
                        label={translate("Hata Sınıfı")}
                        name="defectClass"
                        options={defectClass[0].map((option) => {
                          return {
                            key: option.dataValue,
                            value: option.dataValue,
                          };
                        })}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <DialogActions>
                        <LoadingButton
                          loading={loading}
                          loadingPosition="start"
                          type="submit"
                          size="large"
                          variant="contained"
                          color="success"
                          startIcon={<SaveIcon />}
                        >
                          {translate("Kaydet")}
                        </LoadingButton>
                        <Button
                          size="large"
                          variant="contained"
                          color="error"
                          onClick={handleClose}
                          startIcon={<CancelIcon />}
                        >
                          {translate("İptal")}
                        </Button>
                      </DialogActions>
                    </Grid>
                  </Grid>

                  <Select
                    dropDown={false}
                    label={translate("Çıkış Departmanı")}
                    name="defectExit"
                    options={defectExit[0].map((option) => {
                      return {
                        key: option.dataValue,
                        value: option.dataValue,
                      };
                    })}
                  />
                  <Input
                    onFocus={(e) => setFocus("appliedOperation",keyboard?.current.setInput(""))}
                    onChange={(e) => {
                      onChangeInput(e, setFieldValue, setFieldTouched);
                    }}
                    onInput={(e) => onChangeInput(e)}
                    label={translate("Yapılan İşlem")}
                    name="appliedOperation"
                    inputProps={{
                      value: operation,
                    }}
                  />
                  <Input
                    onFocus={(e) => setFocus("subResponsible",keyboard?.current.setInput(""))}
                    onChange={(e) => {
                      onChangeInput(e, setFieldValue, setFieldTouched);
                    }}
                    onInput={(e) => onChangeInput(e)}
                    label={translate("Alt Sorumlu")}
                    name="subResponsible"
                    inputProps={{
                      value: responsible,
                    }}
                  />
                  <Stack style={{ marginLeft: 8 }}>
                    <Textarea
                    onFocus={(e) => setFocus("explanation",keyboard?.current.setInput(""))}
                    onChange={(e) => {
                      onChangeInput(e, setFieldValue, setFieldTouched);
                    }}
                    onInput={(e) => onChangeInput(e)}
                      label={translate("Açıklama")}
                      placeHolder="Örnek açıklama"
                      name="explanation"
                      inputProps={{
                        value: explanation,
                      }}
                    />
                  </Stack>
                </Box>
          <Stack className="myFavouriteClass" style={{ alignItems: "center", marginTop: 10 }}>
            <VirtualKeyboard
              keyboardRef={keyboard}
              onChange={(e) => onChangeInput(e, setFieldValue, setFieldTouched)}
              ip={numPad}
            />
          </Stack>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
      <AppBar
  
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px`,backgroundColor:"#93BFCF" }}
      >
        <Toolbar>
          <HataHeaderBar />
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <CarMapper
          hide={hide}
          defects={defects}
          defectsName={defectsName}
          coord={coord}
          ref={mainPicElement}
        />
        <Toolbar />
      </Box>
      <AppBar
        position="fixed"
        color="default"
        sx={{ top: "auto", bottom: 0, height: 86,backgroundColor:"#93BFCF" }}
      >
        <Toolbar>
          <Stack className="button-group" direction="row" spacing={2}>
            <Button
              style={{ position: "static" }}
              size="large"
              variant="outlined"
              onClick={logout}
            >
             {translate("ÇIKIŞ")}
            </Button>
            <Button size="large" variant="outlined">
              {translate("MODEL İLK RESMİ")}
            </Button>
            <Button
              size="large"
              variant="outlined"
              startIcon={<ArrowBackIosIcon />}
            >
              {" "}
              {translate("GERİ")}
            </Button>
            <Button size="large" variant="outlined">
              {translate("HATA LİSTESİ")}
            </Button>
            <Button size="large" variant="outlined">
            {translate("TEMİZLE")}
            </Button>
            <Button onClick={openLargeFont} size="large" variant="outlined">
              {translate("BÜYÜK FONT")}
            </Button>
            <LargeFont color={color} ref={largeFontElement} />
          </Stack>
        </Toolbar>
        <Stack>
          {show && (
            <span
              style={{ marginLeft: 26, fontSize: "small", fontWeight: "bold" }}
            >
              {defect}
            </span>
          )}
        </Stack>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor:"#93BFCF",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar>
          <span
            style={{ textAlign: "center", color: "red" }}
          >{`${info.firstname} ${info.lastname} (${info.departmentCode})`}</span>
        </Toolbar>
        <Divider />
        <List>
          <Stack disablePadding spacing={2} direction="row">
            <FormControlLabel
              style={{ marginLeft: 2 }}
              control={
                <Checkbox color="success" sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
              }
              label={translate("Harigami")}
            />
            <FormControlLabel
              control={
                <Checkbox color="success" sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
              }
              label={translate("RDD")}
            />
          </Stack>
          <ListItem>
            <ListItemButton disabled className="Button">
              <ListItemText primary={translate("HIZLI KAYDET")} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton disabled className="Button">
              <ListItemText primary={translate("KAYDET VE GEÇ")} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              onClick={handleClickOpen}
              disabled={isHide}
              className="Button"
            >
              <ListItemText primary={translate("HATA KAYIT")} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <TextField
              id="outlined-basic"
              label={translate("MONTAJ NO")}
              value={`${info.seqNo}`}
              variant="outlined"
            />
          </ListItem>
          <ListItem>
            <ListItemButton className="Button">
              <ListItemText primary={translate("ARA")} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={passFirstPic} className="Button">
              <ListItemText primary={translate("TERMİNAL İLK RESMİ")} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton className="Button">
              <ListItemText primary={translate("SIK GELEN HATA")} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton className="Button">
              <ListItemText primary={translate("MANİFEST")} />
            </ListItemButton>
          </ListItem>
        </List>

        <div style={{ position: "relative" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: 20,
              fontWeight: "bold",
            }}
          >
            {show && <span>{selectedValue.defect}</span>}
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="rightRapper">{translate("Teknik Destek")} </span>
            <span className="leftRapper"> {info.companyName}</span>
          </div>
        </div>
      </Drawer>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={alert}
        autoHideDuration={5000}
        onClose={alertClose}
      >
        <Alert
          onClose={alertClose}
          open={alert}
          severity="success"
          sx={{ width: "100%" }}
        >
          {translate("Kaydedildi")}
        </Alert>
      </Snackbar>
    </Box>
  );
}

// const handleToggle = (value) => () => {
//   const currentIndex = checked.indexOf(value);
//   const newChecked = [...checked];

//   if (currentIndex === -1) {
//     newChecked.push(value);
//   } else {
//     newChecked.splice(currentIndex, 1);
//   }

//   setChecked(newChecked);
// };
