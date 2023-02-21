import PrivateRoute from "./components/PrivateRoute"
import Page404 from "./pages/404"
import Authlayout from "./pages/Auth/AuthLayout"
import Login from "./pages/Auth/Login"
import BlogLayout from "./pages/Blog"
import Blog from "./pages/Blog/Blog"
import Blog404 from "./pages/Blog/Blog404"
import Categories from "./pages/Blog/Categories"
import Post from "./pages/Blog/Post"
import Contact from "./pages/Contact"
import Terminal from "./pages/Terminal"
import TerminalLayout from "./pages/TerminalLayout"
import Profile from "./pages/Profile"
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
                name:'contact',
                path:'contact',
                element: <Contact/>
            },
            {
                name:'blog',
                path:'blog',
                element: <BlogLayout/>,
                auth:true,
                children:[
                    {
                        name:'index',
                        index:true,
                        element: <Blog/>
                    },
                    {
                        name:'categories',
                        path:'categories',
                        element: <Categories/>
                    },
                    {
                        name:'post',
                        path: 'post/:id/:url',
                        element: <Post/>
                    },
                    {
                        name:'notFound',
                        path: '*',
                        element: <Blog404/>
                    }
                ]
            },
            {
                name: 'profile',
                path: 'profile',
                element:  <Profile></Profile>,
                auth:true
            }
        ]
    },
    {
        name:'auth',
        path:'/auth',
        element: <Authlayout/>,
        children:[
            {
                name:'login',
                path: 'login',
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