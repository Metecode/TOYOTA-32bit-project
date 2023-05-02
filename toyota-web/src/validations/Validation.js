import * as Yup from "yup"


Yup.setLocale({
    mixed:{
        required:'Bu alan seçilmesi zorunlu alandır',
        oneOf:'Bu alani isaretlemek zorundasiniz'
    },
    string:{
        min:'Bu alan minimum ${min} karakter olmalidir.',
        max:'Bu alan maksimum ${max} karakter olmalidir'
    },
    number:{
        min:'Bu alan minimum ${min} karakter olmalidir.',
        max:'Bu alan maksimum ${max} karakter olmalidir'
    }

})

export default Yup