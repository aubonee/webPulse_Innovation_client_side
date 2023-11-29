
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, ResponsiveContainer } from 'recharts';

import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
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
   
  //  const data= {
  //   name: {payment.month},
  //   uv:{payment.salary},
   
  // },
    
    return (

        <div className='p-5 flex flex-col justify-center mx-auto mt-5'>
          
           <div>
           <div className="p-5 mx-auto text-white card lg:card-side bg-[#b057a3] max-w-[800px] shadow-xl">
  <figure><img className='h-[200px]' src={image} alt="Album"/></figure>
  <div className="card-body text-xl">
    <p><span className='text-xl font-bold mr-1'>Name:</span>{name}</p>
    <p><span className='text-xl font-bold mr-1'>email:</span>{email}</p>
    <p><span className='text-xl font-bold mr-1'>Role:</span>{role}</p>
    <p> <span className='text-xl font-bold mr-1'>Designation:</span>{designation}</p>
   
  </div>

</div>
           </div>
           <div>
           <table className="table  w-full mt-5">
    {/* head */}
    <thead>
      <tr>
        <th> # </th>
        <th>email</th>
        <th>Month</th>
        <th> Year</th>
        <th>Transection Id</th>
       

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        payments.map((payment,index)=>
        <tr key={payment._id}>
            <th> {index+1} </th>
            <td> {payment.email}</td>
            <td> {payment.month}</td>
            <td> {payment.year}</td>
            <td> {payment.transactionId}</td>
            
            
        </tr>
        )
     } 
    </tbody>
    {/* foot */}
   
    
  </table>
           </div>
           <div>
           <div>
            <p>text</p>
             <ResponsiveContainer width={800} height={700}>
        <BarChart  data={payments}>
        <XAxis dataKey="month" />
      <YAxis />
      <Bar dataKey="salary" fill="#8884d8"  label={{ position: 'top' }}>
        {payments.map((entry, index) => (
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