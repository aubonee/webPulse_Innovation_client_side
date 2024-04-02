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
    <div className='pb-12 font-serif '>
      <div>
      <form onSubmit={handleWorksheet} className='py-5 my-5 mx-auto  bg-[#FDC854] flex items-center justify-around' action="">

<div className="form-control">

  <label className="task">
    <span className="label-text my-1  text-white font-bold ">Choose a Task:</span>
  </label>
 
  <select className=' mt-2 input input-bordered text-black  rounded-none' name="task" id="task" required defaultValue="default">
    <option disabled value="default" >select one</option>
    <option value="sales">Sales</option>
    <option value="support">Support</option>
    <option value="content">Content</option>
    <option value="paperwork">Paper Work</option>
  </select>
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text  text-white font-bold">Hours</span>
  </label>
  <input type="number" name='hours' placeholder="Hours" className="input input-bordered text-black rounded-none" required />

</div>
<div className="form-control">
  <label className="label">
    <span className="label-text text-white font-bold">Choose the Date</span>
  </label>
    <DatePicker placeholderText='pick the date' className="input input-bordered text-black  rounded-none" required
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MMMM d, yyyy" 
    />

</div>
<div className='form-control '>
  {/* <button type='submit' className='btn btn-ghost bg-gray-100 font-bold px-5 mt-6'>Add  </button> */}
  <input className="btn   bg-[#5F9FFF] font-bold px-5 mt-6 text-white border-none"  type="submit" value="Submit"/>
</div>

</form>
      </div>
      <div>
      <h2 className='text-3xl'>Total items : {items.length}</h2>
    
      <div>
      <table className="table mb-12 pb-6 w-full mt-5">
    {/* head */}
    <thead>
      <tr>
        <th> # </th>
        <th>Task</th>
        <th> Hour</th>
        <th>Task Date</th>
       

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