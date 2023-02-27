import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useField, ErrorMessage } from "formik";

export default function Input({ label, options, original = false, defaultValue, ...props }) {
  const [field, meta, helpers] = useField(props);

  const changeHandle = (e) => {
    let selected = options.find((option) => option.key === +e.target.value);
    helpers.setValue(original ? selected : e.target.value);
  };
  return (
    <label className="block w-full">
      <FormControl required sx={{ m: 1, minWidth: 400 }}>
        <InputLabel size="small" id="demo-simple-select-required-label">
          {label}
        </InputLabel>
        <Select
         id="demo-simple-select-error"
          size="small"
          label={label}
          defaultValue={field.value}
          {...props}
          onChange={changeHandle}
        >
          <MenuItem value="">
            {" "}
            <em>Secin</em>{" "}
          </MenuItem>
          {options.map((option, key) => (
            <MenuItem value={option.key} key={key}>
              {option.value}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      {/* <select  className="w-full  border-b outline-none focus:border-black" onChange={changeHandle} defaultValue={field.value} {...props}>
                
            </select> */}
      <ErrorMessage
        name={field.name}
        component="small"
        className="text-xs block mt-2 text-red-600"
      />
    </label>
  );
}
