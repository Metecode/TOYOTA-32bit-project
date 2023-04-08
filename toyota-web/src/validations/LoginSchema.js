import Yup from "./Validation"
 
export const LoginSchema = Yup.object().shape({
    sicilNo: Yup.number()
    .required()
    .min(5),
    pass: Yup.string()
    .required(),
    montaj: Yup.number()
    .required()
    .min(3),
    date:Yup.string()
    .required(),
    vardiya:Yup.string()
    .required(),

})