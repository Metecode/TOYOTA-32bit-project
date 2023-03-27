import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../../fonts/hataGiris.css"
import axios from "axios";
import { useEffect,useState} from "react";

export default function HataHeaderBar() {
   const [info, setInfo]= useState([]);

  useEffect(()=>{
    axios
    .get("../db/headerData.json")
      .then((res) => setInfo(res.data.data[0]))
      .catch((err) => console.log(err));
    },[])
    
    console.log(info)
    return (
    <Stack spacing={3} className="wrap" direction="row" >
      <Button>
        MONTAJ NO <br />
        {info.seqNo}
      </Button>
      <Button variant="contained">
        BODY NO <br />
        {info.bodyNo} 
        {/* Arka plan vardiyaya gore renk degistirecek */}
      </Button>
      <span className="wrap-text">HATA GİRİŞ EKRANI  </span>
      <div>
      <Button style={{backgroundColor:"#ff1c23", color:"white"}} >
        RENK <br />
        {info.extCode}
      </Button>
      </div>
    </Stack>
  );
}
