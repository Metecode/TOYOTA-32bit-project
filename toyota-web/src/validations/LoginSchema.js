import Yup from "./Validation"
 
export const LoginSchema = Yup.object().shape({
    sicilNo: Yup.string()
    .required(),
    password: Yup.string()
    .required(),
    montaj: Yup.string()
    .required(),
})