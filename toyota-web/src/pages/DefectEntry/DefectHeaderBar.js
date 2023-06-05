import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../../fonts/hataGiris.css"
import axios from "axios";
import { useEffect,useState} from "react";
import translate from "../../translation/translate";
export default function HataHeaderBar() {
   const [info, setInfo]= useState([]);

  useEffect(()=>{
    axios
    .get("../../../../../db/headerData.json")
      .then((res) => setInfo(res.data.data[0]))
      .catch((err) => console.log(err));
    },[])
    
  
    return (
    <Stack spacing={{ xs: 1, sm: 2, md: 4}} columns={{ xs: 4, sm: 8, md: 12 }} className="wrap" direction={{ xs: 'column', sm: 'row' }} >
      <Button>
      {translate("MONTAJ NO")}<br />
        {info.seqNo}
      </Button>
      <Button variant="contained">
      {translate("BODY NO")} <br />
        {info.bodyNo} 
        {/* Arka plan vardiyaya gore renk degistirecek */}
      </Button>
      <span className="wrap-text">{translate("HATA GİRİŞ EKRANI")} </span>
      <div>
      <Button style={{backgroundColor:`${info.bgColor}`, color:"white"}} >
      {translate("RENK")} <br />
        {info.extCode}
      </Button>
      </div>
    </Stack>
  );
}
