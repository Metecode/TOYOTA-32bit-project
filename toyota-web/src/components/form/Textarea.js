import { useField, ErrorMessage  } from "formik";
import TextField from '@mui/material/TextField';
export default function Input({placeHolder, ...props}) {
    const[field, meta, helpers] = useField(props)
    return(
        <label className="block w-full">
            <TextField required error={meta.error && Boolean(meta.error)}
          helperText={meta.error ? meta.error : ""} multiline autoFocus size="small" fullWidth placeholder={placeHolder} {...field} {...props} />
            <ErrorMessage name={field.name} component="small" className="text-xs block mt-2 text-red-600" />

        </label>
    )
}