import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import "../../fonts/hataGiris.css"
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useEffect,useState, useReducer} from "react";
import { siteReducer } from "../../reducer";
import MainImage from "./MainImage";

export default function HataSideBar() {
  const [checked, setChecked] = React.useState([0]);
  const [info, setInfo]= useState([]);
  const [carImg, dispatch] = useReducer(siteReducer);

 const firstImage=() =>{
  dispatch({type:"TOGGLE_IMAGE"})
  console.log(carImg)
 }
  useEffect(()=>{
    axios
    .get("../db/headerData.json")
      .then((res) => setInfo(res.data.data[0]))
      .catch((err) => console.log(err));
    },[])
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

    console.log(info)
  return (
    <Box>
      <List>
        <Stack disablePadding spacing={2} direction="row">
            <FormControlLabel style={{marginLeft:2}} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Harigami" />
            <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="RDD" />        
        </Stack>
        <ListItem  >
          <ListItemButton disabled className="Button">
            <ListItemText primary={"HIZLI KAYDET"} />
          </ListItemButton>
        </ListItem>
        <ListItem  >
          <ListItemButton disabled className="Button">
            <ListItemText primary={"KAYDET VE GEÇ"} />
          </ListItemButton>
        </ListItem>
        <ListItem  >
          <ListItemButton disabled className="Button">
            <ListItemText primary={"HATA KAYIT"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
      
      <ListItem >
      <TextField id="outlined-basic" label="MONTAJ NO" value={`${info.seqNo}`} variant="outlined" />
          </ListItem>
          <ListItem >
            <ListItemButton className="Button">
              <ListItemText primary={"ARA"} />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <MainImage className="Button">
              <ListItemText primary={"TERMİNAL İLK RESMİ"} />
             
            </MainImage>
            
          </ListItem>
          <ListItem >
            <ListItemButton className="Button">
              <ListItemText primary={"SIK GELEN HATA"} />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton className="Button">
              <ListItemText primary={"MANİFEST"} />
            </ListItemButton>
          </ListItem>
      </List>
      <br />
      <span style={{color:"red"}}>Teknik Destek</span>
      <span> {info.companyName}</span>
    </Box>
  );
}
