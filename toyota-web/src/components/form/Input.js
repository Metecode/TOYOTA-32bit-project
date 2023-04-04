import classNames from "classnames";
import { useField, ErrorMessage } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export default function Input({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label className="block w-full">
        <TextField
        required
          error={meta.error && Boolean(meta.error)}
          helperText={meta.error ? meta.error : ""}
          sx={{ m: 1, minWidth: 400 }}
          id="outlined-basic"
          size="small"
          label={label}
          variant="outlined"
          {...field}
          {...props}
        />

        {/* <input  className={classNames({
                "w-full h-10  border-b outline-none ":true,
                "focus:border-black": !meta.error,
                "border-red-600":meta.error 
            })} {...field} {...props} /> */}
      </label>
    </>
  );
}
