import { useField, ErrorMessage } from "formik";

export default function Input({label, options, original = false, ...props}) {
    const[field, meta, helpers] = useField(props)

    const changeHandle = e=>{
        let selected = options.find(option => option.key === +e.target.value)
        helpers.setValue(original ? selected: e.target.value)
    }
    return(
        <label className="block w-full">
            <div className="text-sm text-gray-600 ">{label}</div>
            <select  className="w-full  border-b outline-none focus:border-black" onChange={changeHandle} defaultValue={field.value} {...props}>
                <option value="">Secin</option>
            {options.map((option,key)=>(
                <option value={option.key} key={key}>{option.value}</option>
                ))} 
            </select>
        <ErrorMessage name={field.name} component="small" className="text-xs block mt-2 text-red-600" />
        </label>

               
        
    )
}