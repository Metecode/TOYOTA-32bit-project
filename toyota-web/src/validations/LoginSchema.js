import Yup from "./Validation"
 
export const LoginSchema = Yup.object().shape({
    terminalListe: Yup.mixed()
    .required("Bu alanın seçilmesi zorunludur"),
    sicilNo: Yup.number()
    .required("Lütfen sicil no giriniz")
    .min(5),
    pass: Yup.string()
    .required("Lütfen şifre giriniz"),
    montaj: Yup.number()
    .required("Lütfen montaj no giriniz")
    .min(3),
    date:Yup.mixed()
    .required(),
    vardiya:Yup.mixed()
    .required(),
    
})
