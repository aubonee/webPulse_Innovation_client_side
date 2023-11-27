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
import PrivateRoute from "./PrivateRoute"
import EmployeeDetail from "../pages/dashboard/hr/employeeDetail";
import WorkSheet from "../pages/dashboard/employee/WorkSheet";
import AllEmployee from "../pages/dashboard/hr/AllEmployee";
import VerifiedEmployee from "../pages/dashboard/admin/VerifiedEmployee";
import AdminRoute from "./AdminRoute";
import HrRoute from "./HrRoute";
import Progress from "../pages/dashboard/hr/Progress";

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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
           
            {
                path: "allemployee",
                element:<HrRoute><AllEmployee></AllEmployee></HrRoute> 

            },
            {
                path: "progress",
                element:<HrRoute><Progress></Progress></HrRoute> 

            },
            {
                path: "worksheet",
                element: <WorkSheet></WorkSheet>
            },
            {
                // path: " ",
                 path: "verifiedemployee",
                 //element: <VerifiedEmployee></VerifiedEmployee>
                 element: <AdminRoute><VerifiedEmployee></VerifiedEmployee></AdminRoute>
            },
            {
                path: 'employeeDetail/:id',
                element: <EmployeeDetail></EmployeeDetail>,
                loader: ({params}) => fetch(`http://localhost:5000/employeeDetail/${params.id}`)
      
            }
        ]
    }
]);