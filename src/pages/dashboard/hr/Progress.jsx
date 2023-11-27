import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useUserData from '../../../hooks/UseUserData';

const Progress = () => {
    const [users,refetch]=useUserData();
    const [selectedEmployee, setSelectedEmployee] = useState('');
  //const [selectedMonth, setSelectedMonth] = useState('');
    const axiosSecure=useAxiosSecure();

    const { data:items=[]}=useQuery({
      //refetch
      queryKey:['items',],
      queryFn:async ()=>{
          const res =await axiosSecure.get( '/progress');
          return res.data
    
      }
    })

    // Apply filter based on selected employee's email
  const filteredItems = selectedEmployee
  ? items.filter((item) => item.email === selectedEmployee)
  : items;
    return (
        <div>
            <div>

                <form >

                    <div>  
                    <label>  Select Employee:
          <select value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)}>
            <option value="">All Employees</option>
            {users.map(user => (
              <option key={user._id} value={user.email}>
                {user.name}
              </option>
            ))}
          </select>
        </label></div>
                </form>
            </div>
            progress page <h2 className='text-3xl'>Total items : {items.length}</h2>
            <div>
      <table className="table  w-full mt-5">
    {/* head */}
    <thead>
      <tr>
        <th> # </th>
        <th>Task</th>
        <th> Hour</th>
        <th>Task Date</th>
        <th> email</th>
        <th>Action</th>

      </tr>
    </thead>
    

    <tbody>
            {filteredItems.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.task}</td>
                <td>{item.hours}</td>
                <td>{item.selectedDate}</td>
                <td>{item.email}</td>
                <td>
                  <button>Action</button>
                </td>
              </tr>
            ))}
          </tbody>
    {/* foot */}
   
    
  </table>
      </div>
        </div>
    );
};

export default Progress;