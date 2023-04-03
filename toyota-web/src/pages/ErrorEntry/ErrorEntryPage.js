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
import { useEffect, useState, useReducer } from "react";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const drawerWidth = 270;

export default function PermanentDrawerRight() {
  const [checked, setChecked] = React.useState([0]);
  const [info, setInfo] = useState([]);
  const [isHide, setIsHide] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);
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
  // useEffect(() => {
  //   async function getData(selectedValue) {
  //     const defects = await setSelectedValue(selectedValue);
  //     setShow(true);
  //   }
  //   getData(selectedValue);
  // }, []);
  console.log(selectedValue);
  const handleMouseMove = () => {
    if (timer) clearTimeout(timer);
    audio.pause();
    timer = setTimeout(() => {
      audio.loop = true;
      audio.play();
    }, 30000);
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
      .get("../db/headerData.json")
      .then((res) => setInfo(res.data.data[0]))
      .catch((err) => console.log(err));
  }, []);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <Toolbar>
          <HataHeaderBar />
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <CarMapper hide={hide} defects={defects} />
        <Toolbar />
      </Box>
      <AppBar position="fixed" color="default" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <Button size="large" variant="outlined">
              ÇIKIŞ
            </Button>
            <Button size="large" variant="outlined">
              MODEL İLK RESMİ
            </Button>
            <Button
              size="large"
              variant="outlined"
              startIcon={<ArrowBackIosIcon />}
            >
              {" "}
              GERİ
            </Button>
            <Button size="large" variant="outlined">
              HATA LİSTESİ
            </Button>
            <Button size="large" variant="outlined">
              TEMİZLE
            </Button>
            <Button size="large" variant="outlined" href="#contained-buttons">
              BÜYÜK FONT
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#F5F5F5",
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
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
              }
              label="Harigami"
            />
            <FormControlLabel
              control={
                <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
              }
              label="RDD"
            />
          </Stack>
          <ListItem>
            <ListItemButton disabled className="Button">
              <ListItemText primary={"HIZLI KAYDET"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton disabled className="Button">
              <ListItemText primary={"KAYDET VE GEÇ"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton disabled={isHide} className="Button">
              <ListItemText primary={"HATA KAYIT"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <TextField
              id="outlined-basic"
              label="MONTAJ NO"
              value={`${info.seqNo}`}
              variant="outlined"
            />
          </ListItem>
          <ListItem>
            <ListItemButton className="Button">
              <ListItemText primary={"ARA"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton className="Button">
              <ListItemText primary={"TERMİNAL İLK RESMİ"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton className="Button">
              <ListItemText primary={"SIK GELEN HATA"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton className="Button">
              <ListItemText primary={"MANİFEST"} />
            </ListItemButton>
          </ListItem>
        </List>

        <div style={{ position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom:20}}>
            {show && <span>{selectedValue.defect}</span>}
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="rightRapper">Teknik Destek </span>
            <span className="leftRapper"> {info.companyName}</span>
          </div>
        </div>
      </Drawer>
    </Box>
  );
}
{
  /* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */
}
