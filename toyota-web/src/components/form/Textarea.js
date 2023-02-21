import classNames from "classnames";
import { useField, ErrorMessage  } from "formik";

export default function Input({label, ...props}) {
    const[field, meta, helpers] = useField(props)
    return(
        <label className="block w-full">
            <div className="text-sm text-gray-600 block mb-1.5">{label}</div>
            <textarea  className={classNames({
                "w-full  border-b resize-none outline-none": true,
                "focus:border-black": !meta.error || meta.touched,
                "border-red-600":meta.error && meta.touched
            })} {...field} {...props} />
            <ErrorMessage name={field.name} component="small" className="text-xs block mt-2 text-red-600" />

        </label>
    )
}