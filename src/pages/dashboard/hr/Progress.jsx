import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useUserData from '../../../hooks/UseUserData';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
const formattedSelectedMonth = selectedMonth
  ? selectedMonth.toLocaleString('en-US', { month: '2-digit', year: 'numeric' })
  : null;
const filteredItems = items.filter(
    (item) =>
      (!selectedEmployee || item.email === selectedEmployee) &&
      (!formattedSelectedMonth ||
        new Date(item.selectedDate).toLocaleString('en-US', { month: '2-digit', year: 'numeric' }) === formattedSelectedMonth)
      // (!selectedMonth ||
        
      //     new Date(item.selectedDate).toLocaleString('en-US', { month: '2-digit', year: 'numeric' }) === `0${selectedMonth}-${new Date(item.selectedDate).getFullYear()}`)
        // new Date(item.selectedDate).toLocaleString('en-US', { month: '2-digit', year: 'numeric' }) )
        // new Date(item.selectedDate).getMonth() + 1 === Number(selectedMonth))
  );

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
                    <DatePicker
                className='input input-bordered font-2xl p-2 font-normal'
                selected={selectedMonth}
                onChange={(date) => {
                  setSelectedMonth(date)
                  console.log(selectedMonth);
                }}
                dateFormat="MM-yyyy"
                showMonthYearPicker
              />

                    {/* <select
      className='input input-bordered font-2xl p-2 font-normal'
      value={selectedMonth}
      // onChange={(e) => setSelectedMonth(e.target.value)} 
      onChange={(e) => {
        setSelectedMonth(e.target.value);
        console.log(selectedMonth); // Add this line
      }}
    >
      <option value="">All</option>
      {Array.from({ length: 12 }, (_, index) => {
        const monthValue = (index + 1).toString().padStart(2, '0');
        const yearValue = new Date().getFullYear();
        const monthYearValue = `${monthValue}-${yearValue}`;
        
        return (
          <option key={monthValue} value={monthYearValue}>
            {`${monthValue}-${yearValue}`}
          </option>
        );
      })}
    </select> */}
          
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