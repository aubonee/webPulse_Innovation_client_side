import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import { Link } from 'react-router-dom';
import { FaCheck  } from 'react-icons/fa';
import { ImCross } from "react-icons/im";
import Swal from 'sweetalert2';


const AllEmployee = () => {
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
              {employee.isVerified == 'verified'? <button onClick={()=>handleMakeUnVerified(employee)}  className="btn  p-3 py-1 my-2 text-red-500 text-lg "> <ImCross /> </button> : <button onClick={()=>handleMakeVerified(employee)}  className="btn  p-3 py-1 my-2  text-lg text-green-700"><FaCheck/></button>}
               
              </td>
            <td> {employee.bank_account_no}</td>
            <td>{employee.salary}</td>
            <td>{employee.role}</td>
            <td> <button className='btn text-white bg-purple-500'>Pay</button></td>
            <td> <Link to={`/dashboard/employeeDetail/${employee._id}`}  className='btn text-white bg-purple-500'>Details</Link></td>
        </tr>
        )
     } 
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
        </div>
    );
};

export default AllEmployee;