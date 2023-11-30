
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer } from 'recharts';

import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const EmployeeDetail = () => {
  const {name,image,email, designation,role,_id} = useLoaderData();
   const axiosSecure=useAxiosSecure();
   const { data:payments=[] , }=useQuery({
     //refetch
     queryKey:['payments',email],
     queryFn:async ()=>{
         const res =await axiosSecure.get( `/payments?email=${email}`);
         return res.data
   
     }
   })
    
   const dataForChart = payments.map(payment => ({
    ...payment,
    monthYear: `${payment.month}-${payment.year}`, // Combine month and year
  }));
    
    return (

        <div className='p-5 flex flex-col justify-around gap-10 items-center mx-auto mt-5'>
          
           <div>
           <div className="p-5 mx-auto text-white card lg:card-side bg-[#b057a3] max-w-[800px] shadow-xl">
  <figure><img className='h-[200px]' src={image} alt="Album"/></figure>
  <div className="card-body text-xl">
    <p><span className='text-xl font-bold mr-1'>Name:</span>{name}</p>
   
    <p><span className='text-xl font-bold mr-1'>Role:</span>{role}</p>
    <p> <span className='text-xl font-bold mr-1'>Designation:</span>{designation}</p>
   
  </div>

</div>
           </div>
          
           <div>
           <div>
           
             <ResponsiveContainer width={800} height={500}>
        <BarChart  data={dataForChart}>
        <XAxis dataKey="monthYear" />
      <YAxis />
      <Bar dataKey="salary" fill="#8884d8"  label={{ position: 'top' }}>
        {dataForChart.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
        </BarChart>
      </ResponsiveContainer>
            
        </div>
           </div>
        </div>
    );
};

export default EmployeeDetail;