import React from 'react';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const VerifiedEmployee = () => {
    const axiosSecure =useAxiosSecure();
  
    const { data:users=[] , }=useQuery({
        //refetch
        queryKey:['users'],
        queryFn:async ()=>{
            const res =await axiosSecure.get('/users');
            return res.data

        }
    })


    const employees= users.filter(user=> user.role==='employee' && user.isVerified==='verified' );
    return (
        <div>
            
            <div>
            <table className="table  w-full mt-5">
    {/* head */}
    <thead>
      <tr>
        <th> # </th>
        <th> Name</th>
        <th>Designation</th>
        <th>Role</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        employees.map((employee,index)=>
        <tr key={employee._id}>
            <td> {index+1} </td>
            <td> {employee.name}</td>
            <td> {employee.designation}</td>
            <td> <button className='btn text-white bg-purple-500'>Make HR</button></td>
            <td><button className='btn text-white bg-purple-500'>Fire</button></td>
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

export default VerifiedEmployee;