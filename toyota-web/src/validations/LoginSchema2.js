import Yup from "./Validation"
 
export const LoginSchema2 = Yup.object().shape({
    terminalListe: Yup.mixed()
    .required(),
    sicilNo: Yup.number()
    .required("Lütfen sicil no giriniz")
    .min(5),
    pass: Yup.string()
    .required("Lütfen şifre giriniz"),
    body: Yup.number()
    .required("body no giriniz")
    .min(5),
    date:Yup.mixed()
    .required(),
    vardiya:Yup.mixed()
    .required(),
    
})
