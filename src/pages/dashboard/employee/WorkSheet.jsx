import React, { useContext, useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';

const WorkSheet = () => {
  const {user} = useContext(AuthContext);
  // const email = user?.email ;
  const axiosSecure=useAxiosSecure();
  const { data:items=[] ,refetch }=useQuery({
    //refetch
    queryKey:['items',user?.email],
    queryFn:async ()=>{
        const res =await axiosSecure.get( `/worksheet?email=${user?.email}`);
        return res.data
  
    }
  })
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
   console.log('date:',date);
  };
  
  const handleWorksheet= async (event)=>{
    event.preventDefault();
    const form =event.target;
  const task=form.task.value;
  const hours=form.hours.value;
  
  console.log('task:',task);
  console.log('hours:',hours);
  console.log('selectedDate:', selectedDate);
  const taskItem={
   
     task,
     hours,
     selectedDate,
     email:user?.email

  }
   const taskRes =await axiosSecure.post('/workSheet',taskItem);
   if(taskRes.data.insertedId){
    //show sucess 
    console.log("data send to the backend");
    refetch();
    Swal.fire({
        title: "Done!",
        text: "Task Added",
        icon: "success"
      });
   }
   else{
    // Handle error, show user a message, etc.
    console.error('Error:', error);
  }
  
 
}


  return (
    <div>
      <div>

      </div>
      <div>
      <h2 className='text-3xl'>Total items : {items.length}</h2>
      <h1>Table</h1>
      <div>
      <table className="table  w-full mt-5">
    {/* head */}
    <thead>
      <tr>
        <th> # </th>
        <th>Task</th>
        <th> Hour</th>
        <th>Task Date</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        items.map((item,index)=>
        <tr key={item._id}>
            <th> {index+1} </th>
            <td> {item.task}</td>
            <td> {item.hours}</td>
            <td> {item.selectedDate}</td>
            <td><button>Action</button></td>
            
        </tr>
        )
     } 
    </tbody>
    {/* foot */}
   
    
  </table>
      </div>
      </div>
     
    </div>
  );
};

export default WorkSheet;