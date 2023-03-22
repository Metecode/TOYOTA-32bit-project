import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../../fonts/hataGiris.css"
export default function HataHeaderBar() {
  return (
    <Stack spacing={3} className="wrap" direction="row" >
      <Button>
        MONTAJ NO <br />
        222
      </Button>
      <Button variant="contained">
        BODY NO <br />
        222
      </Button>
      <span className="wrap-text">HATA GİRİŞ EKRANI</span>
      <div>
      <Button >
        RENK <br />
        222
      </Button>
      </div>
    </Stack>
  );
}
