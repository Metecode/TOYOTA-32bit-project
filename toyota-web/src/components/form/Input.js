import classNames from "classnames";
import { useField, ErrorMessage  } from "formik";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function Input({label, ...props}) {
    const[field, meta, helpers] = useField(props)
    return(
        <>
        <label className="block w-full">
            <div className="text-sm text-gray-600">{label}</div>
            <input  className={classNames({
                "w-full h-10  border-b outline-none ":true,
                "focus:border-black": !meta.error,
                "border-red-600":meta.error 
            })} {...field} {...props} />
            <ErrorMessage name={field.name} component="small" className="text-xs block mt-2 text-red-600" />
        </label>
                </>
    )
}