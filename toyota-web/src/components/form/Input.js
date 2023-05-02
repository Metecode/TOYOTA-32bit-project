import { useField, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
export default function Input({ label,value,onKeyUp,onChange,error, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label className="block w-full">
        <TextField
        required
          error={error}
          sx={{ m: 1, minWidth: 400 }}
          id="outlined-basic"
          size="small"
          label={label}
          variant="outlined"
          onChange={onChange}
          onKeyUp={onKeyUp}
          value={value}
          {...field}
          {...props}
        />

      </label>
      
    </>
  );
}
