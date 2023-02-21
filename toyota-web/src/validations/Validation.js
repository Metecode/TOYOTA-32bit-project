import * as Yup from "yup"


Yup.setLocale({
    mixed:{
        required:'bu alan doldurulmasi zorunlu alandir',
        oneOf:'Bu alani isaretlemek zorundasiniz'
    },
    string:{
        min:'Bu alan minimum ${min} karakter olmalidir.',
        max:'Bu alan maksimum ${max} karakter olmalidir'
    }

})

export default Yup