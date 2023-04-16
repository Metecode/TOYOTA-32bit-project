import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useField, ErrorMessage } from "formik";
import "./form.css";
export default function InputPassword({ label, onChange, ...props }) {
  const [field, meta, helpers] = useField(props);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <div>
        <FormControl
          sx={{ m: 1, minWidth: 400 }}
          variant="outlined"
          error={meta.error && Boolean(meta.error)}
          helperText={meta.error ? meta.error : ""}
        >
          <InputLabel size="small" htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
          onChange={onChange}
            error={meta.error && Boolean(meta.error)}
            helperText={meta.error ? meta.error : ""}
            {...field}
            {...props}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            size="small"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
    </Box>
  );
}
