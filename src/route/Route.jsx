import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Home from "../pages/home/Home";

  export const router = createBrowserRouter([
    {
        
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
        {
            path: "/",
            element: <Home></Home>
        }

        ]
    }
]);