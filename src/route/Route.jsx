import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Home from "../pages/home/Home";
import ContactUs from "../pages/contactUs/ContactUs";
import Login from "../pages/login/Login";
import Registration from "../pages/signup/Registration";
import Dashboard from "../layout/dashboard/Dashboard";

import EmployeeDetail from "../pages/dashboard/hr/employeeDetail";
import WorkSheet from "../pages/dashboard/employee/WorkSheet";
import AllEmployee from "../pages/dashboard/hr/AllEmployee";
import VerifiedEmployee from "../pages/dashboard/admin/VerifiedEmployee";

  export const router = createBrowserRouter([
    {
        
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/contactus",
            element: <ContactUs></ContactUs>
        },
        {
            path: "/login",
            element: <Login></Login>
          },
          {
            path: "/register",
            element: <Registration></Registration>
          }

        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children:[
            {
                path: " ",
                element: <AllEmployee></AllEmployee>
            },
            {
                path: "allemployee",
                element: <AllEmployee></AllEmployee>
            },
            {
                path: "worksheet",
                element: <WorkSheet></WorkSheet>
            },
            {
                path: "verifiedemployee",
                element: <VerifiedEmployee></VerifiedEmployee>
            },
            {
                path: 'employeeDetail/:id',
                element: <EmployeeDetail></EmployeeDetail>,
                loader: ({params}) => fetch(`http://localhost:5000/employeeDetail/${params.id}`)
      
            }
        ]
    }
]);