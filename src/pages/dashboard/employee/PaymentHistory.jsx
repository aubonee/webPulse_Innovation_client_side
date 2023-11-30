import React from 'react';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';
import SectionTitle from '../../../components/shared/sectinTitle/SectionTitle';

const PaymentHistory = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure=useAxiosSecure();
  const { data:payments=[] , }=useQuery({
    //refetch
    queryKey:['payments',user?.email],
    queryFn:async ()=>{
        const res =await axiosSecure.get( `/payments?email=${user?.email}`);
        return res.data
  
    }
  })
    return (
        <div>
           <div className='w-full pb-10'>
            <SectionTitle heading="Payment History" subHeading="The payments you got from the company"></SectionTitle>
           </div>
            <table className="table  w-full mt-5">
    {/* head */}
    <thead>
      <tr>
        <th> # </th>
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
    );
};

export default PaymentHistory;