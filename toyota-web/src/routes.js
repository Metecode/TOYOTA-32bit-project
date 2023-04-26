import PrivateRoute from "./components/PrivateRoute"
import Page404 from "./pages/404"
import Authlayout from "./pages/Auth/AuthLayout"
import Login from "./pages/Auth/Login"
import ErrorList from "./pages/ErrorList"
import Terminal from "./pages/Terminal"
import TerminalLayout from "./pages/TerminalLayout"
import ErrorEntryPage from "./pages/ErrorEntry/ErrorEntryPage"

const routes = [
    {
        path:'/',
        name:'terminal',
        element: <TerminalLayout/>,
        children:[
            {
                index:true,
                name:'index',
                element: <Terminal/>
            },
            {
                name:'errorList',
                path:'errorList/:depCode?/:filterCode?',
                element: <ErrorList/>,
                auth:true
            },
            {
                name:'errorEntryPage',
                path:'defectentry/:depCode?/:filterCode?/3070725',
                element: <ErrorEntryPage/>,
                auth:true
            },
        ]
    },
    {
        name:'auth',
        path:'/auth',
        element: <Authlayout/>,
        children:[
            {
                name:'login',
                path: 'login/:filterCode/:depCode',
                element: <Login/>
            }
        ]
    },
    {
        name:'notFound',
        path:'*',
        element: <Page404/>
    }
]

const authMap = routes => routes.map(route =>{
    if(route?.auth){
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if(route?.children){
        route.children = authMap(route.children)
    }
    return route
})

export default authMap(routes)