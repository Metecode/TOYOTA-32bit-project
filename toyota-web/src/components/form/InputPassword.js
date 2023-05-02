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
import translate from "../../translation/translate";

export default function InputPassword({ label, onChange,error, ...props }) {
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
          error={error}
          required
        >
          <InputLabel size="small" htmlFor="outlined-adornment-password">
          {translate("Şifre")}
          </InputLabel>
          <OutlinedInput
          onChange={onChange}

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
            label={translate("Şifre")}
          />
        </FormControl>
      </div>
    </Box>
  );
}
