import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
const Chart = () => {
    
    return (
        <div>
           <div>
           {/* <table className="table  w-full mt-5">
    
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
  
   
    
  </table> */}
           </div>
            
        </div>
    );
};

export default Chart;