import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import FormControl from "@mui/material/FormControl";
import { useField, ErrorMessage } from "formik";

export default function DatePicker({ original = false, ...props }) {
  const [field, meta, helpers] = useField(props);
  const changeHandle = (e) => {
    helpers.setValue(new Date(e).toLocaleDateString())
    setSelectedDate(e);
    // let selected = options.find((option) => option.key === +e.target.value);
    // helpers.setValue(original ? selected : e.target.value);
  };
  // const [value, setValue] = React.useState(dayjs('2022-05-11'));
  const [selectedDate, setSelectedDate] = React.useState();
  console.log({ selectedDate });
  // const handleChange = (newValue) => {
  //   setValue(newValue);

  // };
  return (
    <FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack>
          <DesktopDatePicker
            {...field}
            label="Tarih"
            inputFormat="MM/DD/YYYY"
            onChange={changeHandle}
            // onChange={(newValue) => {
            //   setSelectedDate(newValue);
            //   const date = new Date(newValue).toLocaleDateString();
            //   // setSelectedDate(new Date(newValue).toLocaleDateString())
            // }}
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
