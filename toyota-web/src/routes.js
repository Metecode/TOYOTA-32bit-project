import PrivateRoute from "./components/PrivateRoute"
import Page404 from "./pages/404"
import Authlayout from "./pages/Auth/AuthLayout"
import Login from "./pages/Auth/Login"
import DefectList from "./pages/DefectList"
import Terminal from "./pages/Terminal"
import TerminalLayout from "./pages/TerminalLayout"
import DefectEntryPage from "./pages/DefectEntry/DefectEntryPage"

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
                name:'defectList',
                path:'defectList/:depCode?/:filterCode?',
                element: <DefectList/>,
                auth:true
            },
            {
                name:'errorEntryPage',
                path:'defectentry/:depCode?/:filterCode?/3070725',
                element: <DefectEntryPage/>,
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