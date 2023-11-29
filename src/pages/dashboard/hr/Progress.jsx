import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useUserData from '../../../hooks/UseUserData';

const Progress = () => {
    const [users,refetch]=useUserData();
    const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
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
//   const filteredItems = selectedEmployee
//   ? items.filter((item) => item.email === selectedEmployee)
//   : items;
const filteredItems = items.filter(
    (item) =>
      (!selectedEmployee || item.email === selectedEmployee) &&
      (!selectedMonth ||
        new Date(item.selectedDate).getMonth() + 1 === Number(selectedMonth))
  );


   
//   const dateString = '2023-11-07T18:00:00.000Z';
//   const dateObject = new Date(dateString);
  //const dateObject = new Date(items.selectedDate);

// Get the month (0-indexed, where 0 represents January)
// const month = dateObject.getMonth() + 1;
// console.log(month)
    return (
        <div className='mt-8'>
            <div>

                <form className='flex justify-around ' >

                    <div>  
                    <label className='font-2xl font-bold mt-5 mr-2'>  Select Employee: 
          <select className='input input-bordered font-2xl p-2  font-normal' value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)}>
            <option value="">All Employees</option>
            {users.map(user => (
              <option key={user._id} value={user.email}>
                {user.name}
              </option>
            ))}
          </select>
        </label></div>

        <div>  
                    <label className='font-2xl font-bold mt-5 mr-2'>  Select Month: 
                    <select
                className='input input-bordered font-2xl p-2 font-normal'
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
            <option value=""> All</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
         
          </select>
        </label></div>
                </form>
            </div>
          
            <div className='mt-5'>
      <table className="table  w-full mt-5">
    {/* head */}
    <thead className='text-2xl'>
      <tr>
        <th className='font-3xl '> # </th>
        <th className='font-5xl'>Task</th>
        <th> Hour</th>
        <th>Task Date</th>
        

      </tr>
    </thead>
    

    <tbody>
            {filteredItems.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.task}</td>
                <td>{item.hours}</td>
                <td>{item.selectedDate}</td>
               
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