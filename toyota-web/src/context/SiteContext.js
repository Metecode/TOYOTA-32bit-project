// import { createContext, useContext, useReducer } from "react";
// import {siteReducer} from "../reducer"
// export const Context = createContext()

// const Provider = ({children}) =>{

//     const[state, dispatch] = useReducer(siteReducer,{
//         carImg: localStorage.getItem('image') || './assets/img/car.jpg',
//     })

//     const data = {
//         ...state,
//         dispatch
//     }
//     return(
//         <Context.Provider value={data} >
// {children}
//         </Context.Provider>
//     )
// }

// export const useSite = () => useContext(Context)

// export default Provider 