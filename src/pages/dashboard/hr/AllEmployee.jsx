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


const AllEmployee = () => {
    const axiosSecure =useAxiosSecure();
    
    const [selectedDate, setSelectedDate] = useState(null);
      
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
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
        text: "You want to make this Employee Verified!",
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
        <div>
             <div className='flex justify-evenly my-4 text-center'>
            <h2 className='text-3xl'>All Users</h2>
                <h2 className='text-3xl'>Total Users : {users.length}</h2>
            </div>

            <div className="overflow-x-auto">
  <table className="table  w-full mt-5">
    {/* head */}
    <thead>
      <tr>
        <th>
       #
        </th>
        <th> Name</th>
        <th> Email</th>
        <th>Verified Status</th>
        <th>Bank Account</th>
        <th>Salary</th>
        <th>Role</th>
        <th>Action</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        employees.map((employee,index)=>
        <tr key={employee._id}>
            <th> {index+1} </th>
            <td> {employee.name}</td>
            <td> {employee.email}</td>
            {/* <td><button className='btn text-white bg-purple-500'>Make Verified</button></td> */}
            <td>
              {employee.isVerified == 'verified'? <button onClick={()=>handleMakeUnVerified(employee)}  className="btn  p-3 py-1 my-2 text-green-500 text-lg "><FaCheck/> </button> : <button onClick={()=>handleMakeVerified(employee)}  className="btn  p-3 py-1 my-2  text-lg text-red-700"><ImCross /> </button>}
               
              <div>
  

  <dialog id="my_modal_3" className="modal">
    <div className="modal-box min-h-[300px]">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form >
      <h3 className="font-bold text-lg">Salary:{employee.salary}</h3>
<form className='flex flex-col items-center justify-center'>
     
     <div className="flex gap-5">
     <div className='form-control'>
     <label className="label">
    <span className="label-text  font-bold">Choose the Month:</span>
  </label>
      <DatePicker className='input input-bordered w-full max-w-xs'
        selected={selectedDate}
        onChange={handleDateChange}
        showMonthYearPicker
        dateFormat="MM"
        
      />
     </div>
     <div className='form-control'>
     <label className="label">
    <span className="label-text  font-bold">Choose the Year:</span>
  </label>
      <DatePicker className='input input-bordered w-full max-w-xs'
        selected={selectedDate}
        onChange={handleDateChange}
        showMonthYearPicker
        dateFormat="yyyy"
        
      />
     </div>
     </div>
     <div> <button className='btn btn-primary my-5' type="submit">Submit</button></div>
     </form>

    
    </div>
  </dialog>
    </div>
              </td>
            <td> {employee.bank_account_no}</td>
            <td>{employee.salary}</td>
            <td>{employee.role}</td>
            <td> <button className='btn text-white bg-purple-500'onClick={()=>document.getElementById('my_modal_3').showModal()} disabled={employee.isVerified !== 'verified'}>Pay</button></td>
            <td> <Link to={`/dashboard/employeeDetail/${employee._id}`}  className='btn text-white bg-purple-500'>Details</Link></td>
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