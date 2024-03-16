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
import { FaArrowUpRightDots } from "react-icons/fa6";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './payment/CheckOutForm';
import SectionTitle from '../../../components/shared/sectinTitle/SectionTitle';


const AllEmployee = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    const axiosSecure =useAxiosSecure();
    
   
      
    const { data:users=[] , refetch}=useQuery({
      //refetch
      queryKey:['users'],
      queryFn:async ()=>{
          const res =await axiosSecure.get('/users');
          return res.data

      }
  })

    const employees= users.filter(user=> user.role==='employee');

    const handleMakeVerified= employee =>{
      Swal.fire({
          title: "Are you sure?",
          text: "You want to make this Employee Verified!",
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, update it"
        }).then((result) => {
          if (result.isConfirmed) {
         
          axiosSecure.patch(`users/employee/${employee._id}`)
          .then(res=>{
              console.log(res.data);
              if(res.data.modifiedCount > 0){
                  refetch()
                  Swal.fire({
                      title: "Done!",
                      text: "this user is Verified now.",
                      icon: "success"
                    });

              }
          })
          }
        })  .catch(error => {
          // Handle error, show user a message, etc.
          console.error('Error updating user verification:', error);
        });

  }
  const handleMakeUnVerified= employee =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You want to make this Employee UnVerified!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it"
      }).then((result) => {
        if (result.isConfirmed) {
       
        axiosSecure.patch(`users/unverified/${employee._id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    title: "Done!",
                    text: "this user is Unverified now.",
                    icon: "success"
                  });

            }
        })
        }
      })  .catch(error => {
        // Handle error, show user a message, etc.
        console.error('Error updating user verification:', error);
      });

      

}
    return (
        <div className='mx-auto w-full pb-12'>
            <SectionTitle heading="All Employee" subHeading="All the verified & unverified employee list"></SectionTitle>
             <div className='flex justify-evenly my-4 text-center'>
         
            </div>

            <div className="overflow-x-auto">
  <table className="table table-zebra table-sm mx-5 w-full mt-5 mb-10 pb-6">
    {/* head */}
    <thead>
      <tr>
        <th>
       #
        </th>
        <th>User Info</th>
        <th>Change User Status</th>
        <th>Pay Salary</th>
        <th>Details</th>
        <th>Increase Salary</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        employees.map((employee,index)=>
        <tr key={employee._id}>
            <th> {index+1} </th>
            <td> {employee.name} <br /> {employee.email}</td>
          
            <td>
              {employee.isVerified == 'verified'? <button onClick={()=>handleMakeUnVerified(employee)}  className="btn  p-3 py-1 my-2 text-green-500 text-lg "><FaCheck/> </button> : <button onClick={()=>handleMakeVerified(employee)}  className="btn  p-3 py-1 my-2  text-lg text-red-700"><ImCross /> </button>}
               
              <div>
  

  <dialog id={`my_modal_${employee._id}`} className="modal">
    <div className="modal-box min-h-[300px]">

     
<form method="dialog">

     
     <div>
          
            <div>
            <Elements stripe={stripePromise}>
    
      {employee.salary ? (
      <CheckOutForm key={employee._id} employee={employee} />
    ) : (
      <p>Salary is undefined</p>
    )}
    </Elements>
            </div>
        </div>
     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
     </form>

    
    </div>
  </dialog>
    </div>
              </td>
           
            <td> <button className='btn tooltip  text-white bg-[#5f9fff] hover:bg-blue-500' data-tip="Pay Salary" onClick={()=>document.getElementById(`my_modal_${employee._id}`).showModal()} disabled={employee.isVerified !== 'verified'}><FaCommentDollar /></button></td>
            <td> <button className='tooltip text-white' data-tip="Details Info"> <Link to={`/dashboard/employeeDetail/${employee._id}`}  className='btn text-white bg-[#fdc854] hover:bg-yellow-600' ><FaInfo /></Link></button> </td>
            <td> <button className='tooltip text-white' data-tip="Increase Salary"> <Link to={`/dashboard/salaryUpdate/${employee._id}`}  className='btn text-white bg-[#48753a] hover:bg-green-800'disabled={employee.isVerified !== 'verified'}><FaArrowUpRightDots /></Link></button></td>
        </tr>
        )
     } 
    </tbody>
  </table>
  
</div>
        </div>
    );
};

export default AllEmployee;