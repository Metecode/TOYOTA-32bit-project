import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import FormControl from "@mui/material/FormControl";

export default function DatePicker() {
  const [value, setValue] = React.useState(dayjs('2022-05-11T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <FormControl >

    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <Stack  >
        <DesktopDatePicker

          label="Tarih"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField sx={{ m: 1, minWidth: 400 }} {...params} />}
          />
      </Stack>
    </LocalizationProvider>
          </FormControl>
  );
}