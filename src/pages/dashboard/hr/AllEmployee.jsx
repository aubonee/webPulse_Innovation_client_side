import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import { Link } from 'react-router-dom';
import { FaCheck  } from 'react-icons/fa';
import { ImCross } from "react-icons/im";
import Swal from 'sweetalert2';
import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MonthPicker from 'react-month-picker';
import { FaInfo, FaCommentDollar, } from "react-icons/fa";


import SectionTitle from '../../../components/shared/sectinTitle/SectionTitle';


const AllEmployee = () => {
  
    const axiosSecure =useAxiosSecure();
    
   
      
    const { data:users=[] }=useQuery({
      //refetch
      queryKey:['users'],
      queryFn:async ()=>{
          const res =await axiosSecure.get('/users');
          return res.data

      }
  })

    const employees= users.filter(user=> user.role==='employee');

   
    return (
        <div className='mx-auto w-full pb-12'>
            <SectionTitle heading="All Employee" subHeading="All the verified & unverified employee list"></SectionTitle>
           

            <div className="">
  <div className="grid grid-cols-3 gapx-5 gap-y-3">
    
   
  {
            employees.map((employee)=>
            <div key={employee._id}>

<div className='card w-96 bg-base-200 shadow-xl pb-5'>
<div className='  flex flex-col justify-center items-center'>
  <div className='flex flex-col justify-center items-center w-full mb-10 bg-blue-400'>
    <img src={employee.image} alt=""  className='rounded-full w-[100px] h-[100px] object-center relative -bottom-10'/>
  </div>
  <div className='flex flex-col justify-center items-center'>
    <h2 className='text-lg font-semibold mb-5'> {employee.name}</h2>
    

    <div>
      <p><span>Email: </span>{employee.email}</p>
      <p><span>Designation: </span>{employee.designation}</p>
      <p><span> Role :</span>{employee.role}</p>
      <p><span> Bank Account No. :</span>{employee.email}</p>
      <p><span> Salary :</span>{employee.salary}</p>
     

   

  </div>
</div>
              </div>
</div>
       
  
  
  </div>
    )}
    
</div>
</div>
</div>

      
    );
};

export default AllEmployee;