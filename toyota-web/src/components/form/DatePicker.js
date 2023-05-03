import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import FormControl from "@mui/material/FormControl";
import { useField } from "formik";

export default function DatePicker({ original = false,label, ...props }) {
  const [field, meta, helpers] = useField(props);
  const changeHandle = (e) => {
    helpers.setValue(new Date(e).toLocaleDateString())
    setSelectedDate(e);
  };

  const [selectedDate, setSelectedDate] = React.useState();

  return (
    <FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack>
          <DesktopDatePicker
            {...field}
            label={label}
            inputFormat="MM/DD/YYYY"
            onChange={changeHandle}
            selected={field.value || null}
            renderInput={(params) => (
              <TextField sx={{ m: 1, minWidth: 400 }} {...params} />
            )}
            value={selectedDate}
            {...props}
          />
        </Stack>
      </LocalizationProvider>
    </FormControl>
  );
}
