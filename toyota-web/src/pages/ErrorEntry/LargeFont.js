import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
  useReducer,
} from "react";
import HataHeaderBar from "./ErrorHeaderBar";
import axios from "axios";
import translate from "../../translation/translate";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LargeFont = forwardRef(function LargeFont({color}, ref) {
  const [info, setInfo] = useState([]);
  const [info2, setInfo2] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [background, setBackground] = useState(null);
  useEffect(() => {
    axios
      .get("../../../../../db/largeFont.json")
      .then((res) => setInfo(res.data.data))
      .catch((err) => console.log(err));
    axios
      .get("../../../../../db/largeFont2.json")
      .then((res) => setInfo2(res.data.data[0]))
      .catch((err) => console.log(err));
  }, []);
  useImperativeHandle(ref, () => ({
    openDialog: openDialog,
  }));
  const openDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
useEffect(()=>{
  setBackground(color);
},[color])
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            backgroundColor: (background ? "red" : "#93BFCF"),
          },
        }}
      >
        <Box
          sx={{
            margin: "20px",
            backgroundColor: "#EEE9DA",
            borderRadius: "10px",
            flexDirection: "row",
            
          }}
          position="static"
        >
          <HataHeaderBar />
        </Box>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          <Grid style={{ textAlign: "center" }} item xs={8} sm={8} >
            <Typography style={{ fontSize: 100, fontWeight: "bold"}}>
              {info2.modelCode} - 222
              <br />
              25073
            </Typography>
            {info.map((item) => {
          return (
            <Typography
              style={{ fontSize: 30, marginLeft: "10px", fontWeight: "bold",textAlign:"left" }}
            >
              {item.partName} - {item.defectName}
            </Typography>
          );
        })}
          </Grid>
          <Grid item xs={4}  >
            <Card
              sx={{
                width: 270,
                height: 200,
                float: "right",
                margin: "20px",
                marginTop: "3px",
                backgroundColor: "#EEE9DA",
              }}
            >
              <CardActions>
                <Button
                  onClick={handleClose}
                  size="large"
                  variant="contained"
                  color="error"
                  style={{ width: 250 }}
                >
                  {translate("HATA GİRİŞİ")}
                </Button>
              </CardActions>
              <CardContent>
                <TextField
                  style={{ marginLeft: "7px" }}
                  id="outlined-basic"
                  label={translate("MONTAJ NO")}
                  value={222}
                  variant="outlined"
                />
              </CardContent>
              <CardActions>
                <Button sx={{borderColor:"black", color:"black"}} size="large" variant="outlined" style={{ width: 250 }}>
                {translate("ARA")}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        
      </Dialog>
    </div>
  );
});
export default LargeFont;
