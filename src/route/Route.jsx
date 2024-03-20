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
import EmployeeRoute from "./EmployeeRoute";
import PaymentHistory from "../pages/dashboard/employee/PaymentHistory";
import SalaryUpdate from "../pages/dashboard/hr/SalaryUpdate";
import ManageEmployee from "../pages/dashboard/hr/ManageEmployee";

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
                path: "manageEmployee",
                element:<HrRoute><ManageEmployee></ManageEmployee></HrRoute> 

            },
            {
                path: "progress",
                element:<HrRoute><Progress></Progress></HrRoute> 

            },
            {
                path: "worksheet",
                element: <EmployeeRoute><WorkSheet></WorkSheet></EmployeeRoute> 
            },
            {
                path: "paymenthistory",
                element: <EmployeeRoute><PaymentHistory></PaymentHistory></EmployeeRoute> 
            },
            {
                
                 path: "verifiedemployee",
                 element: <AdminRoute><VerifiedEmployee></VerifiedEmployee></AdminRoute>
            },
            {
                path: 'employeeDetail/:id',
                element:<HrRoute><EmployeeDetail></EmployeeDetail></HrRoute> ,
                loader: ({params}) => fetch(`https://assignment-12-server-side-five.vercel.app/employeeDetail/${params.id}`)
      
            },
            {
                path: 'salaryUpdate/:id',
                element:<HrRoute><SalaryUpdate></SalaryUpdate></HrRoute> ,
                loader: ({params}) => fetch(`https://assignment-12-server-side-five.vercel.app/employeeDetail/${params.id}`)
      
            }
        ]
    }
]);