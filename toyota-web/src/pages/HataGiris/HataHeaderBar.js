import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
export default function HataHeaderBar() {
  return (
    <Stack direction="row" spacing={2}>
      <Button>
        MONTAJ NO <br />
        222
      </Button>
      <Button>
        BODY NO <br />
        222
      </Button>
      <span>HATA GİRİŞ EKRANI</span>
      <Button style={{alignItems: "end"}} >
        RENK <br />
        222
      </Button>
    </Stack>
  );
}
