import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import { Link } from 'react-router-dom';

const AllEmployee = () => {
    const axiosSecure =useAxiosSecure();
    const { data:users=[] ,}=useQuery({
        //refetch
        queryKey:['users'],
        queryFn:async ()=>{
            const res =await axiosSecure.get('/users');
            return res.data

        }
    })
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
        <th>Verified</th>
        <th>Bank Account</th>
        <th>Salary</th>
        <th>Action</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        users.map((user,index)=>
        <tr key={user._id}>
            <th> {index+1} </th>
            <td> {user.name}</td>
            <td> {user.email}</td>
            <td><button className='btn text-white bg-purple-500'>Not Verified</button></td>
            <td> {user.bank_account_no}</td>
            <td>{user.salary}</td>
            <td> <button className='btn text-white bg-purple-500'>Pay</button></td>
            <td> <Link to={`/dashboard/employeeDetail/${user._id}`}  className='btn text-white bg-purple-500'>Details</Link></td>
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